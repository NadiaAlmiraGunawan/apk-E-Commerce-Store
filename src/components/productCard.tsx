import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { toast } from "sonner"
import { useCart } from "../pages/cardContex"
import type { Product } from "../data/produk"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} ditambahkan ke cart!`)
  }

  return (
    <Card className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <Link to={`/products/${product.id}`} className="relative overflow-hidden">
        <div className="aspect-[4/3] bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-3 left-3 rounded-full border border-border/50 bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md">
          {product.category}
        </div>
      </Link>

      <CardContent className="flex-1 p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="line-clamp-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-xl font-bold text-primary">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
      </CardContent>

      <CardFooter className="mt-auto p-5 pt-0">
        <Button
          className="w-full rounded-full font-medium shadow-sm transition-all hover:shadow-md"
          onClick={handleAddToCart}
        >
          Tambah ke Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
