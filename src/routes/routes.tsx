import { Navigate, Route, Routes } from "react-router-dom"
import { useAppSelector } from "../hooks/TypedHooks"
import LoginPage from "../pages/LoginPage"
import MainPage from "../pages/MainPage"
import NewsPage from "../pages/NewsPage"
import ProfilePage from "../pages/ProfilePage"




export const useRoutes = () => {
    const isLogged = useAppSelector(state => state.route.isLogged)
    if (isLogged) {
        return (
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<Navigate to='/' />} />

        </Routes>
    )
}