import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import WatchlistPage from '@/pages/WatchlistPage'
import LoginPage from '@/pages/LoginPage'

function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/watchlist" element={<WatchlistPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router