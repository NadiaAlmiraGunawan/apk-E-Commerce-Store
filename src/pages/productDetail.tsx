import { useParams, Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck } from "lucide-react"
import { toast } from "sonner"
import { useCart } from "./cardContex"
import { products } from "../data/produk"

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const productId = Number(id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <main className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">Produk tidak ditemukan</h1>
        <Button onClick={() => navigate("/products")}>
          Kembali ke Products
        </Button>
      </main>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} berhasil ditambahkan ke cart!`)
  }

  return (
    <main className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6 -ml-4 gap-2 hover:bg-secondary"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali
      </Button>

      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="mx-auto w-full max-w-md md:mx-0">
          <div className="aspect-square overflow-hidden rounded-2xl border bg-card shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <Badge
            variant="secondary"
            className="mb-4 w-fit bg-secondary px-3 py-1 text-sm text-secondary-foreground"
          >
            {product.category}
          </Badge>

          <h1 className="mb-4 font-heading text-3xl leading-tight font-bold text-foreground md:text-4xl">
            {product.name}
          </h1>

          <p className="mb-6 text-3xl font-bold text-primary md:text-4xl">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          <div className="mb-6 border-t border-b border-border py-6">
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Deskripsi Produk
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="mb-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Garansi Resmi</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span>Gratis Ongkir</span>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 gap-2 rounded-full py-6 text-base shadow-lg shadow-primary/20"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5" /> Tambah ke Cart
            </Button>
            <Link to="/cart" className="flex-1">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-border py-6 text-base hover:bg-secondary"
              >
                Lihat Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
