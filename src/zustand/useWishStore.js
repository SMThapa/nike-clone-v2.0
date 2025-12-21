import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWishStore = create(
    persist(
        (set, get) => ({
            items: [],

            /* ---------------- TOGGLE WISHLIST ---------------- */
            toggleWishlist: (product) => {
                const items = get().items
                const exists = items.find(item => item.id === product.id)

                if (exists) {
                    set({
                        items: items.filter(item => item.id !== product.id)
                    })
                } else {
                    set({
                        items: [
                            ...items,
                            {
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                thumbnail: product.thumbnail[0],
                                gender: product.gender,
                                genre: product.genre
                            }
                        ]
                    })
                }
            },

            /* ---------------- REMOVE ---------------- */
            removeFromWishlist: (id) => {
                set({
                    items: get().items.filter(item => item.id !== id)
                })
            },

            /* ---------------- CHECK ---------------- */
            isWishlisted: (id) =>
                get().items.some(item => item.id === id),

            /* ---------------- CLEAR ---------------- */
            clearWishlist: () => set({ items: [] }),

            /* ---------------- DERIVED ---------------- */
            totalWishlistItems: () => get().items.length
        }),
        {
            name: 'wishlist-storage',
            version: 1
        }
    )
)

export default useWishStore
