import Link from "next/link"

export default function NewsLayout({children} : Readonly<{
    children: React.ReactNode
}>){

    function SideNav(){
        return(
          <div className="grid grid-cols-8 items-center">
            <Link href={'/'} className=" text-2xl lg:text-3xl font-bold my-6 hover:text-[2rem] transition-all">
            Baxter. 
            </Link>
            <div className="flex items-center group" >
                              <Link className="block text-white lg:text-2xl my-2 hover:text-[#53D22c] transition-all" href="/stock">
                                  Search
                              </Link>
            </div>

            <div className="flex items-center">
                <Link className="block text-white lg:text-2xl my-2 hover:text-[#53D22c] transition-all" href='/stock/watchlist'>
                Watchlist
                </Link>
            </div>

            <div className="flex items-center">
                <Link className="block text-white lg:text-2xl my-2 hover:text-[#53D22c] transition-all" href='/stock/top_movers'>
                Top Movers
                  </Link>
             </div>

             <div className="flex items-center">
                <Link className="block text-white lg:text-2xl my-2 hover:text-[#53D22c] transition-all" href='/news'>
                News
                  </Link>
             </div>

            </div>
        )
      }

    return(
        <>
           <div className="hidden md:grid md:col-span-1">
            <SideNav/>
        </div>
        <div className="p-1 md:p-2 mx-auto">
        <div className="grid md:col-span-5">
            {children}
        </div>
        </div>
        </>
    )
}