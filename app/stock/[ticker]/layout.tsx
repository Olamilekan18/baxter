import { Agdasima } from "next/font/google"

export const Agdas_font = Agdasima({
  subsets: ['latin'],
  weight: "400"
})

export default function HouseLayout({children}: Readonly<{
    children: React.ReactNode
}>){

    return(
        <div className={`w-11/12 p-2 md:p-4 mx-auto`}>
            <div className="grid md:grid-cols-2">
                {children}
            </div>
        </div>     
    )
}