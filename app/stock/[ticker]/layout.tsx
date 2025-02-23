import { Agdasima } from "next/font/google"
import Link from 'next/link'

export const Agdas_font = Agdasima({
  subsets: ['latin'],
  weight: "400"
})

export default function HouseLayout({children}: Readonly<{
    children: React.ReactNode
}>){

    return(
        <div className={`w-11/12 p-2 md:p-4 mx-auto`}>
            <div className="grid md:grid-cols-6">
                <div className=" hidden md:grid md:col-span-1">
                    <div>
                        <Link className="block text-white md:text-3xl" href="/stock">
                            Search
                        </Link>
                        <a className="block  text-white md:text-3xl">
                            Watchlist
                        </a>
                        <a className="block  text-white Md:text-3xl">
                            Top Movers
                        </a>
                    </div>
                </div>
                <div className="col-span-5">
                {children}
                </div>
            </div>
        </div>     
    )
}