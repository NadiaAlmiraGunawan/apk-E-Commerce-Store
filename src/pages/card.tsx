import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, ShoppingBag } from "lucide-react"
import { toast } from "sonner"
import { useCart } from "./cardContex"

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice, totalItems } = useCart()

  const handleRemove = (id: number, name: string) => {
    removeFromCart(id)
    toast.info(`${name} dihapus dari cart.`)
  }

  const handleCheckout = () => {
    toast.success("Checkout berhasil! Terima kasih sudah berbelanja.")
    clearCart()
  }

  if (cart.length === 0) {
    return (
      <main className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <ShoppingBag className="mx-auto mb-6 h-20 w-20 text-muted-foreground/50" />
        <h1 className="mb-2 font-heading text-3xl font-bold">
          Cart kamu masih kosong
        </h1>
        <p className="mb-8 text-muted-foreground">
          Yuk mulai belanja dan tambahkan produk favoritmu!
        </p>
        <Link to="/products">
          <Button size="lg" className="rounded-full px-8">
            Lihat Produk
          </Button>
        </Link>
      </main>
    )
  }

  return (
    <main className="container mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 font-heading text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cart.map((item) => (
            <Card key={item.id} className="border-border shadow-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-xl bg-muted object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.quantity} x Rp {item.price.toLocaleString("id-ID")}
                  </p>
                  <p className="mt-1 font-bold text-primary">
                    Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  className="rounded-full shadow-sm"
                  onClick={() => handleRemove(item.id, item.name)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card className="border-border shadow-md">
            <CardContent className="space-y-4 p-6">
              <h2 className="mb-2 font-heading text-xl font-bold">Ringkasan</h2>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Item</span>
                <span className="font-semibold">{totalItems}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-4 text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>
              <Button
                className="h-12 w-full rounded-full text-base shadow-lg shadow-primary/20"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-full border-border hover:bg-secondary"
                onClick={() => {
                  clearCart()
                  toast.info("Cart dikosongkan.")
                }}
              >
                Kosongkan Cart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
