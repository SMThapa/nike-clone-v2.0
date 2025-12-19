import { Routes, Route } from "react-router-dom"
import { Home, Contacts, Login, Register, AllProducts, ProductSingle } from "../pages"

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
        </Routes>
    )
}
