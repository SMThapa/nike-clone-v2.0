import { Phone } from "lucide-react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import useCartStore from "./useCartStore";
import useWishStore from "./useWishStore";

const initialUser = {
    email: "",
    userId: "",
    phone: "",
    address: [],
    orderInfo: [],
};

const useUserStore = create(
    persist(
        (set) => ({
            user: initialUser,
            isLoggedIn: false,

            // login / set user
            setUser: (data) =>
                set((state) => ({
                    user: { ...state.user, ...data },
                    isLoggedIn: true,
                })),

            // logout
            logout: () => {
                useCartStore.getState().clearCart();
                useWishStore.getState().clearWishlist();
                set({
                    user: initialUser,
                    isLoggedIn: false,
                })
            },

            // update fields
            setEmail: (email) =>
                set((state) => ({
                    user: { ...state.user, email },
                })),

            setUserId: (userId) =>
                set((state) => ({
                    user: { ...state.user, userId },
                })),

            addAddress: (address) =>
                set((state) => ({
                    user: {
                        ...state.user,
                        address: [...state.user.address, address],
                    },
                })),

            addOrder: (order) =>
                set((state) => ({
                    user: {
                        ...state.user,
                        orderInfo: [...state.user.orderInfo, order],
                    },
                })),
        }),
        {
            name: "user-store", // ✅ REQUIRED (localStorage key)
        }
    )
);

export default useUserStore;
