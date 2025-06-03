import Link from "next/link"

export default function NewsLayout({children} : Readonly<{
    children: React.ReactNode
}>){

    function TopNav(){
        return(
          <div className="grid grid-cols-8 items-center p-1 md:p-2">
            <div className="link-wrapper grid col-span-6 grid-cols-4 items-center">
            <Link href={'/'} className="grid text-2xl lg:text-3xl font-bold my-6 hover:text-[2rem] transition-all">
            Baxter. 
            </Link>
                   
                <Link className="grid text-white lg:text-2xl my-2 hover:text-[#53D22c] transition-all" href='/stock/watchlist'>
                Watchlist
                </Link>

                <Link className="grid text-white lg:text-2xl my-2 hover:text-[#53D22c] transition-all" href='/stock'>
                Top Movers
                  </Link>

             
                <Link className="grid text-white lg:text-2xl my-2 hover:text-[#53D22c] transition-all" href='/news'>
                News
                  </Link>
            </div>

            <div className="grid col-span-2 justify-end">
                <input type="text" placeholder="Search..." className="rounded-lg p-1 outline-none bg-inherit border-[2px] border-[#53D22C]"/>
            </div>
            </div>
        )
      }

      function WatchlistSidebar(){

        return(
            <>
            <p className="underline text-xl md:text-2xl">Your Watchlist</p>
            <div className="rounded-2xl p-2 bg-transparent opacity-80">
            <div className="grid grid-cols-3 items-center my-2 py-1">
                <div className="p-1 md:p-2 col-span-1 grid justify-self-center">
                <img src={"https://cdn.brandfetch.io/apple.com/w/200/h/244/theme/light/logo?c=1id090JVq9Slhwrn5Rm"} alt={"Hoop"} className="rounded-full p-2 max-h-[3.5rem]"/>
                </div>
                <div className="grid col-span-2">
                    <p className="font-bold sm:max-lg:text-xl lg:text-2xl">Apple Inc.</p>
                    <p className="sm:max-lg:text-lg lg:text-xl">Tech.</p>
                </div>
            </div>

             <div className="grid grid-cols-3 items-center my-2 py-1">
                <div className="p-1 md:p-2 col-span-1 grid justify-self-center">
                <img src={"https://cdn.brandfetch.io/reddit.com/w/400/h/400?c=1id090JVq9Slhwrn5Rm"} alt={"Hoop"} className="rounded-full p-2 max-h-[3.5rem]"/>
                </div>
                <div className="grid col-span-2">
                    <p className="font-bold sm:max-lg:text-xl lg:text-2xl">Reddit </p>
                    <p className="sm:max-lg:text-lg lg:text-xl">Social Media</p>
                </div>
            </div>

             <div className="grid grid-cols-3 items-center my-2 py-1">
                <div className="p-1 md:p-2 col-span-1 grid justify-self-center">
                <img src={"https://cdn.brandfetch.io/coinbase.com/w/400/h/400?c=1id090JVq9Slhwrn5Rm"} alt={"Hoop"} className="rounded-full p-2 max-h-[3.5rem]"/>
                </div>
                <div className="grid col-span-2">
                    <p className="font-bold sm:max-lg:text-xl lg:text-2xl">Coinbase</p>
                    <p className="sm:max-lg:text-lg lg:text-xl">Cryptocurrency</p>
                </div>
            </div>



             <div className="grid grid-cols-3 items-center my-2 py-1">
                <div className="p-1 md:p-2 col-span-1 grid justify-self-center">
                <img src={"https://cdn.brandfetch.io/nvidia.com/w/400/h/400?c=1id090JVq9Slhwrn5Rm"} alt={"Hoop"} className="rounded-full p-2 max-h-[3.5rem]"/>
                </div>
                <div className="grid col-span-2">
                    <p className="font-bold sm:max-lg:text-xl lg:text-2xl">NVIDIA Corp.</p>
                    <p className="sm:max-lg:text-lg lg:text-xl">Technology, Chip Manufacture...</p>
                </div>
            </div>

        </div>
            </>
        )
      }


    return(
        <>
           <div className="hidden md:grid">
            <TopNav/>
        </div>
        <div className="p-1 md:p-2 mx-auto grid grid-cols-8">
        <div className="p-1 md:p-2 col-span-2">
        <WatchlistSidebar/>
        </div>
        <div className="grid md:col-span-6">
            {children}
        </div>
        </div>
        </>
    )
}