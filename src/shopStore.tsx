import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from 'react'

export type ShopItem = {
  title: string
  image: string
  priceWeek?: string
  priceMonth: string
  oldPriceMonth?: string
}

type CartEntry = {
  item: ShopItem
  quantity: number
}

type ShopStoreContextType = {
  likes: ShopItem[]
  cart: CartEntry[]
  addLike: (item: ShopItem) => void
  removeLike: (title: string) => void
  addToCart: (item: ShopItem, quantity?: number) => void
  removeCartItem: (index: number) => void
  updateCartQuantity: (index: number, quantity: number) => void
  clearCart: () => void
}

const ShopStoreContext = createContext<ShopStoreContextType | undefined>(undefined)

const LIKES_KEY = 'shop_likes_v1'
const CART_KEY = 'shop_cart_v1'

function getItemKey(item: ShopItem) {
  return `${item.title}|${item.priceMonth}|${item.image}`
}

export function ShopStoreProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<ShopItem[]>([])
  const [cart, setCart] = useState<CartEntry[]>([])

  useEffect(() => {
    const rawLikes = localStorage.getItem(LIKES_KEY)
    const rawCart = localStorage.getItem(CART_KEY)

    if (rawLikes) {
      try {
        setLikes(JSON.parse(rawLikes))
      } catch {
        setLikes([])
      }
    }

    if (rawCart) {
      try {
        setCart(JSON.parse(rawCart))
      } catch {
        setCart([])
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes))
  }, [likes])

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const value = useMemo<ShopStoreContextType>(
    () => ({
      likes,
      cart,
      addLike: (item) => {
        setLikes((prev) => {
          if (prev.some((x) => getItemKey(x) === getItemKey(item))) return prev
          return [...prev, item]
        })
      },
      removeLike: (title) => {
        setLikes((prev) => prev.filter((x) => x.title !== title))
      },
      addToCart: (item, quantity = 1) => {
        setCart((prev) => [...prev, { item, quantity: Math.max(1, quantity) }])
      },
      removeCartItem: (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index))
      },
      updateCartQuantity: (index, quantity) => {
        setCart((prev) =>
          prev.map((entry, i) => (i === index ? { ...entry, quantity: Math.max(1, quantity) } : entry)),
        )
      },
      clearCart: () => setCart([]),
    }),
    [likes, cart],
  )

  return <ShopStoreContext.Provider value={value}>{children}</ShopStoreContext.Provider>
}

export function useShopStore() {
  const context = useContext(ShopStoreContext)
  if (!context) {
    throw new Error('useShopStore must be used inside ShopStoreProvider')
  }
  return context
}
