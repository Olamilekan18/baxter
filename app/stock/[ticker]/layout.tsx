export default function HouseLayout({children}: Readonly<{
    children: React.ReactNode
}>){

    return(
        <div className={`w-11/12 p-2 md:p-4 mx-auto`}>
            <div className="grid">
                {children}
            </div>
        </div>     
    )
}