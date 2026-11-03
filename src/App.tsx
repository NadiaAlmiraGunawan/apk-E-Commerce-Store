import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Toaster } from "@/components/ui/sonner"
import { CartProvider } from "./pages/cardContex"
import Home from "./pages/home"
import Products from "./pages/product"
import ProductDetail from "./pages/productDetail"
import Cart from "./pages/card"

export function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Toaster position="bottom-right" richColors theme="light" />
      </div>
    </CartProvider>
  )
}

export default App
