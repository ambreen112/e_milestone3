import Link from "next/link"


export default function Navbar(){
    return(
        <header className="mb-8 border-b-4">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href ="/">
                <h1 className=" text-2xl md:text-4xl font-bold font-serif">Smart<span className="text-primary  text-lime-600 ">BigBuy</span></h1>
                </Link>

                <nav className=" gap-12 lg:flex 2xl:ml-16 ">
                    <ul className="flex justify-between gap-8 font-sans font-bold hover:text-lime-700" >
                        <Link href= "/" ><li className="text-purple-700">Home</li></Link>
                        <Link href= "/" ><li>Men</li></Link>
                        <Link href= "#" ><li>Women</li></Link>
                        <Link href= "#" ><li>Kids</li></Link>
                    </ul>

                </nav>
            </div>
        </header>















    )
}