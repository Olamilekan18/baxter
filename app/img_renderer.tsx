'use client'


export function ImgShow(props: {brandURL: string}){

    return(
        <img src={`https://cdn.brandfetch.io/${props.brandURL}/w/400/h/400?c=1id090JVq9Slhwrn5Rm`} alt="company_logo" height={30} width={30}/>
    )
}
