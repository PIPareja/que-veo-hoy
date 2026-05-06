import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
    const location = useLocation()

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <nav className="border-b border-gray-800 px-6 py-4">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                        🎬 ¿Qué veo hoy?
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link
                            to="/"
                            className={`text-sm transition-colors hover:text-white ${location.pathname === '/'
                                    ? 'text-white font-medium'
                                    : 'text-gray-400'
                                }`}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/watchlist"
                            className={`text-sm transition-colors hover:text-white ${location.pathname === '/watchlist'
                                    ? 'text-white font-medium'
                                    : 'text-gray-400'
                                }`}
                        >
                            Mi lista
                        </Link>
                        <Link
                            to="/login"
                            className="text-sm bg-white text-gray-950 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
                        >
                            Entrar
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-6 py-10">
                {children}
            </main>
        </div>
    )
}

export default Layout