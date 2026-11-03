import { Link, NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../pages/cardContex"

export default function Navbar() {
  const { totalItems } = useCart()

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-semibold transition-colors py-2 ${
      isActive
        ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
        : "text-muted-foreground hover:text-foreground"
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-background/95 backdrop-blur-xl">
      <div className="flex h-20 w-full items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <span className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            Storely
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-10 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
        </nav>

        <div className="flex items-center">
          <Link to="/cart">
            <Button
              variant="outline"
              className="relative h-11 rounded-full border-border bg-card px-6 shadow-sm transition-all hover:bg-secondary"
            >
              <ShoppingCart className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
