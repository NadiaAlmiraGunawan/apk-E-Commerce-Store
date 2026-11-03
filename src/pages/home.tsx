import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-[#d4a373]/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#faedcd]/40 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccd5ae]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center px-4 py-20 text-center">
        <h1 className="mb-6 font-heading text-5xl leading-tight font-extrabold tracking-tight text-foreground md:text-7xl">
          Temukan Gaya Terbaikmu Disini
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Dari gadget tercanggih hingga fashion kekinian. Semua kebutuhan gaya
          hidup modernmu ada dalam satu tempat.
        </p>

        <div className="flex w-full justify-center">
          <Link to="/products">
            <Button
              size="lg"
              className="h-14 gap-2 rounded-full bg-[#9c6644] px-10 text-base text-white shadow-lg shadow-[#9c6644]/20 transition-all hover:bg-[#7a4d32] hover:shadow-[#9c6644]/40"
            >
              Belanja Sekarang <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
