import { Trash2 } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShopStore } from './shopStore'

function parseMoney(raw?: string) {
  if (!raw) return 0
  const digits = raw.replace(/[^\d]/g, '')
  if (!digits) return 0
  return Number(digits)
}

function formatMoney(value: number) {
  return Math.max(0, Math.round(value))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function CartPage() {
  const navigate = useNavigate()
  const { cart, updateCartQuantity, removeCartItem, clearCart } = useShopStore()

  const total = useMemo(
    () => cart.reduce((sum, entry) => sum + parseMoney(entry.item.priceMonth) * entry.quantity, 0),
    [cart],
  )

  const oldTotal = useMemo(
    () =>
      cart.reduce((sum, entry) => {
        const old = parseMoney(entry.item.oldPriceMonth)
        const current = parseMoney(entry.item.priceMonth)
        return sum + (old > 0 ? old : current) * entry.quantity
      }, 0),
    [cart],
  )

  return (
    <div className="min-h-screen bg-[#f1f1f1] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-[#2c2c2c] mb-8">Корзина</h1>

        <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <button className="text-sm text-[#1ba450] font-semibold mb-4" onClick={clearCart}>
              Снять все
            </button>

            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-gray-500 mb-5">Корзина пока пустая</p>
                <button
                  className="px-6 py-3 rounded-xl bg-[#3D3D3D] text-white font-bold"
                  onClick={() => navigate('/')}
                >
                  В каталог
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((entry, index) => {
                  const rowPrice = parseMoney(entry.item.priceMonth) * entry.quantity
                  const rowOld = entry.item.oldPriceMonth ? parseMoney(entry.item.oldPriceMonth) * entry.quantity : 0

                  return (
                    <div key={`${entry.item.title}-${index}`} className="flex gap-4 border-b border-gray-100 pb-4">
                      <div className="w-28 h-24 rounded-2xl bg-gray-50 overflow-hidden flex items-center justify-center">
                        <img src={entry.item.image} alt={entry.item.title} className="w-full h-full object-contain" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between gap-3">
                          <h3 className="font-bold text-xl text-[#303030]">{entry.item.title}</h3>
                          <button className="text-gray-400 hover:text-gray-700" onClick={() => removeCartItem(index)}>
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="mt-3 inline-flex items-center rounded-lg bg-[#f3f3f3] px-2 py-1 gap-4">
                          <button
                            className="text-lg text-gray-500"
                            onClick={() => updateCartQuantity(index, entry.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold min-w-4 text-center">{entry.quantity}</span>
                          <button
                            className="text-lg text-gray-500"
                            onClick={() => updateCartQuantity(index, entry.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right min-w-32">
                        {rowOld > 0 ? <p className="text-sm text-red-500 line-through">{formatMoney(rowOld)} сум</p> : null}
                        <p className="font-bold text-xl text-[#2f2f2f]">{formatMoney(rowPrice)} сум</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h2 className="font-bold text-lg text-[#2f2f2f] mb-4">Ваш заказ</h2>
            <div className="space-y-2 mb-5">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Товары ({cart.length}):</span>
                <span>{formatMoney(oldTotal)} сум</span>
              </div>
              <div className="flex justify-between text-lg font-black text-[#2f2f2f]">
                <span>Итого:</span>
                <span>{formatMoney(total)} сум</span>
              </div>
              {oldTotal > total ? (
                <p className="text-xs text-[#1dbf73]">Вы экономите: {formatMoney(oldTotal - total)} сум</p>
              ) : null}
            </div>
            <button className="w-full py-3 rounded-xl bg-[#3D3D3D] text-white font-bold hover:bg-black">
              Перейти к оформлению
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
