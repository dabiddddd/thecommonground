import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { CartProvider } from './context/CartContext'
import ErrorBoundary from './components/ErrorBoundary'

const App = lazy(() => import('./App.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ErrorBoundary>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-paper">
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                <span className="text-ink-muted text-sm font-medium tracking-wide">Loading...</span>
              </div>
            </div>
          }>
            <App />
          </Suspense>
        </ErrorBoundary>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
