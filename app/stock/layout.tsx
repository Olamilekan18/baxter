import Link from "next/link"
import { FaSearch } from "react-icons/fa"
import { FaBookmark } from "react-icons/fa6"
import { SlGraph } from "react-icons/sl"

export default function StockLayout({children} : Readonly<{
    children: React.ReactNode
}>){

    function SideNav(){
        return(
          <div>
            <Link href={'/'} className=" text-2xl lg:text-3xl font-bold my-6 hover:text-[2.5rem] transition-all">
            Baxter. 
            </Link>
            <div className="flex gap-x-4 items-center group" >
                <div>
               <FaSearch size={'1.5rem'} className="group-hover:fill-pink-600"/> 
                </div>
                              <Link className="block text-white lg:text-2xl my-2 hover:text-pink-600 transition-all" href="/stock">
                                  Search
                              </Link>
            </div>

            <div className="flex gap-x-4 items-center">
            <div>
            <FaBookmark size={'1.5rem'} className="fill-pink-600"/> 
            </div>
                <Link className="block text-white lg:text-2xl my-2 hover:text-pink-600 transition-all" href='/stock/watchlist'>
                Watchlist
                </Link>
            </div>

            <div className="flex gap-x-4 items-center">
            <div>
               <SlGraph size={'1.5rem'} className="fill-pink-600"/> 
                </div>
                <Link className="block text-white lg:text-2xl my-2 hover:text-pink-600 transition-all" href='/stock/top'>
                Top Movers
                  </Link>
             </div>
            </div>
        )
      }

    return(
        <>
        <div className="p-1 md:p-2 mx-auto grid md:grid-cols-6">
        <div className="hidden md:grid md:col-span-1">
            <SideNav/>
        </div>
        <div className="grid md:col-span-5">
            {children}
        </div>
        </div>
        </>
    )
}