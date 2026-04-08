import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetailPage from './ProductDetailPage'
import CartPage from './CartPage'
import LikesPage from './LikesPage'
import { ShopStoreProvider } from './shopStore'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
      </BrowserRouter>
    </ShopStoreProvider>
  </StrictMode>,
)
