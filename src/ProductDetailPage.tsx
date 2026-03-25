import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Heart } from 'lucide-react'

type DetailState = {
  item?: {
    title: string
    image: string
    priceWeek: string
    priceMonth: string
    oldPriceMonth?: string
  }
}

function formatMoney(value: number) {
  const parts = Math.max(0, Math.round(value))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return parts
}

function parseMoney(raw?: string) {
  if (!raw) return 0
  const digits = raw.replace(/[^\d]/g, '')
  if (!digits) return 0
  return Number(digits)
}

function detectCurrency(raw?: string) {
  if (!raw) return 'сум'
  if (raw.toLowerCase().includes('sym')) return 'sym'
  if (raw.toLowerCase().includes('сум')) return 'сум'
  return 'сум'
}

export default function ProductDetailPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = (location.state ?? {}) as DetailState

  const item = state.item
  const [period, setPeriod] = useState<'week' | 'month'>('month')
  const [count, setCount] = useState(1)

  const unitPrice = useMemo(() => {
    if (!item) return 0
    return period === 'week' ? parseMoney(item.priceWeek) : parseMoney(item.priceMonth)
  }, [item, period])

  const currency = useMemo(() => detectCurrency(period === 'week' ? item?.priceWeek : item?.priceMonth), [item, period])

  const totalPrice = unitPrice * count

  const thumbs = useMemo(() => {
    if (!item) return []
    // We don't have multiple images in the data, so we repeat the main image.
    return [item.image, item.image, item.image, item.image]
  }, [item])

  if (!item) {
    return (
      <div className="min-h-screen bg-[#F4F7FE] p-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[30px] p-10 text-center">
          <p className="text-gray-700 font-semibold">Товар не найден.</p>
          <button
            className="mt-6 px-6 py-3 rounded-xl bg-[#3D3D3D] text-white font-bold"
            onClick={() => navigate('/')}
          >
            Назад
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F4F7FE] p-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[30px] overflow-hidden shadow-sm flex">
          {/* Gallery */}
          <div className="w-[470px] p-10 bg-white">
            <div className="flex gap-6">
              <div className="w-[90px] flex flex-col gap-4">
                {thumbs.map((src, idx) => (
                  <div
                    key={idx}
                    className="rounded-[20px] bg-gray-50 border border-gray-100 h-[70px] flex items-center justify-center overflow-hidden"
                  >
                    <img src={src} alt="" className="h-full w-full object-contain opacity-80" />
                  </div>
                ))}
              </div>

              <div className="flex-1 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[360px] w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 p-10 bg-white relative">
            <button
              className="absolute top-6 right-8 text-gray-300 hover:text-gray-500"
              onClick={(e) => e.preventDefault()}
              aria-label="favorite"
            >
              <Heart size={22} />
            </button>

            <p className="text-[12px] text-gray-400 font-medium mb-6">Более 70 заказов</p>

            <h1 className="text-[22px] font-bold text-gray-900 leading-tight mb-10">{item.title}</h1>

            <div className="mb-8">
              <p className="text-[12px] text-gray-400 font-medium uppercase tracking-wide mb-4">Срок аренды:</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setPeriod('week')}
                  className={[
                    'px-5 py-2 rounded-xl border text-[12px] font-bold transition-colors',
                    period === 'week'
                      ? 'border-[#1DBF73] bg-white text-[#1DBF73]'
                      : 'border-gray-200 bg-white text-gray-500',
                  ].join(' ')}
                >
                  Неделя
                </button>
                <button
                  onClick={() => setPeriod('month')}
                  className={[
                    'px-5 py-2 rounded-xl border text-[12px] font-bold transition-colors flex items-center gap-2',
                    period === 'month'
                      ? 'border-[#1DBF73] bg-white text-[#1DBF73]'
                      : 'border-gray-200 bg-white text-gray-500',
                  ].join(' ')}
                >
                  Месяц <span className="text-green-400">🎁</span>
                </button>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[12px] text-gray-400 font-medium uppercase tracking-wide mb-4">Количество:</p>
              <div className="flex items-center justify-start">
                <div className="flex items-center justify-between bg-[#F8F8F8] rounded-xl px-3 py-3 w-[140px]">
                  <button
                    className="text-gray-400 font-bold text-xl leading-none"
                    onClick={() => setCount((c) => Math.max(1, c - 1))}
                  >
                    -
                  </button>
                  <span className="font-bold text-gray-800">{count}</span>
                  <button
                    className="text-gray-400 font-bold text-xl leading-none"
                    onClick={() => setCount((c) => c + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-[12px] text-gray-400 font-medium uppercase tracking-wide mb-4">Цена:</p>
              <div className="flex items-baseline gap-4 mb-8">
                {period === 'month' && item.oldPriceMonth ? (
                  <span className="text-red-500 line-through text-[14px] font-bold">
                    {item.oldPriceMonth}
                  </span>
                ) : null}
                <p className="text-[26px] font-black text-gray-900">
                  {formatMoney(totalPrice)} {currency}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  className="bg-[#EAF9F1] border border-[#1DBF73] text-[#1DBF73] py-4 rounded-xl font-extrabold uppercase tracking-widest text-[12px] hover:bg-[#def7ea] transition-colors"
                >
                  В корзину
                </button>
                <button className="bg-white border border-gray-200 text-[#1B254B] py-4 rounded-xl font-extrabold uppercase tracking-widest text-[12px] hover:bg-gray-50 transition-colors">
                  Купить сейчас
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className="text-sm font-bold text-gray-500 hover:text-gray-800"
            onClick={() => navigate(-1)}
          >
            Назад к каталогу
          </button>
        </div>
      </div>
    </div>
  )
}

