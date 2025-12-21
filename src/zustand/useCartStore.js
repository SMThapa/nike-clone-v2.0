import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],

            addToCart: ({ product, size, color, quantity = 1 }) => {
                const items = get().items

                const cartKey = `${product.id}-${size}-${color}`

                const existing = items.find(item => item.key === cartKey)

                if (existing) {
                    set({
                        items: items.map(item =>
                            item.key === cartKey
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        )
                    })
                } else {
                    set({
                        items: [
                            ...items,
                            {
                                key: cartKey,          // 🔑 unique identifier
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                thumbnail: product.thumbnail[0],
                                size,
                                color,
                                quantity
                            }
                        ]
                    })
                }
            },

            removeFromCart: (key) => {
                set({
                    items: get().items.filter(item => item.key !== key)
                })
            },

            updateQuantity: (key, quantity) => {
                if (quantity < 1) return
                set({
                    items: get().items.map(item =>
                        item.key === key ? { ...item, quantity } : item
                    )
                })
            },

            clearCart: () => set({ items: [] }),

            totalItems: () =>
                get().items.reduce((sum, i) => sum + i.quantity, 0),

            totalPrice: () =>
                get().items.reduce((sum, i) => sum + i.price * i.quantity, 0)
        }),
        { name: 'cart-storage' }
    )
)

export default useCartStore
