import { Routes, Route } from "react-router-dom"
import { Home, Contacts } from "../pages"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/contacts'} element={<Contacts />} />
        </Routes>
    )
}
