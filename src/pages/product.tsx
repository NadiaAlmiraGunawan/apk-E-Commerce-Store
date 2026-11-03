import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { products } from "../data/produk"
import { Input } from "@base-ui/react/input"
import ProductCard from "../components/productCard"

export default function Products() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(products.map((p) => p.category))]

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory
    return matchSearch && matchCategory
  })

  return (
    <main className="container mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h1 className="mb-2 font-heading text-3xl font-bold">Semua Produk</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} produk ditemukan
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari produk impianmu..."
            className="rounded-full border-border bg-card pl-10 shadow-sm focus-visible:ring-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full ${selectedCategory !== cat && "border-border bg-card hover:bg-secondary"}`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card py-20 text-center shadow-sm">
          <p className="text-xl font-medium text-muted-foreground">
            Produk tidak ditemukan
          </p>
          <Button
            variant="link"
            className="text-primary"
            onClick={() => {
              setSearch("")
              setSelectedCategory("All")
            }}
          >
            Reset Pencarian
          </Button>
        </div>
      )}
    </main>
  )
}
