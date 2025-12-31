import { Routes, Route } from "react-router-dom"
import { Home, Contacts, Login, Register, AllProducts, ProductSingle, Cart, WishList, Checkout, UserAccount, ThankYou } from "../pages"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/contacts'} element={<Contacts />} />

            {/* products */}
            <Route path="/products" element={<AllProducts />} />
            <Route path="/product/:pid" element={<ProductSingle />} />

            {/* auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<UserAccount />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
    )
}
