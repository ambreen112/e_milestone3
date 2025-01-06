import Link from "next/link";



export default function Navbar(){
    return(
        <header className="mb-8 border-b-4">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          {/* Logo and Home link */}
          <Link href="/">
            <h1 className="text-2xl md:text-4xl font-bold font-serif">
              Smart<span className="text-primary text-lime-600">BigBuy</span>
            </h1>
          </Link>
      
          {/* Navigation Menu */}
          <nav className="hidden lg:flex gap-12">
            <ul className="flex justify-between gap-8 font-sans font-bold text-lg hover:text-lime-700">
              <Link href="/"><li className="text-purple-700">Home</li></Link>
              <Link href="/Mens"><li>Men</li></Link>
              <Link href="/Womens"><li>Women</li></Link>
              <Link href="/Teans"><li>Teens</li></Link>
            </ul>
          </nav>
      
          {/* Cart Button and Small Screen Navigation */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <Link href="/cart">
              <button className="bg-lime-600 hover:bg-orange-600 text-black px-4 py-2 font-bold rounded-sm" type="button">
                Cart
              </button>
            </Link>
      
            {/* Mobile Menu Toggle Icon */}
            <button className="lg:hidden p-2">
              {/* Add icon for mobile menu */}
              <span className="text-2xl">☰</span> {/* Mobile menu icon */}
            </button>
          </div>
        </div>
      
        {/* Mobile Navigation Menu (hidden by default, shown on mobile) */}
        <nav className="lg:hidden p-4">
          <ul className="flex flex-col gap-4 font-sans font-bold text-lg hover:text-lime-700">
            <Link href="/"><li className="text-purple-700">Home</li></Link>
            <Link href="/Mens"><li>Men</li></Link>
            <Link href="/Womens"><li>Women</li></Link>
            <Link href="/Teans"><li>Teens</li></Link>
          </ul>
        </nav>
      </header>
      















    )
}