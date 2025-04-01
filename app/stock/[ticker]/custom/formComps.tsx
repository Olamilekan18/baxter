'use client'

import { FormEvent, useState } from "react"

export default function Cliens(){
    const [initial_date, setInitDate] = useState('')
    const [final_date, setFinDate] = useState('')

    function tester(e: FormEvent){
        e.preventDefault()
        console.log(
            initial_date, final_date
        )
    }

    return(
        <>
        <form onSubmit={tester}>
        <input type="date" name="Initial" id="initial" className="block text-black my-2" onChange={
            (e)=> setInitDate(e.target.value)} required/>
        <input type="date" name="Final" id="fin" className="block text-black my-2" onChange={(e)=> setFinDate(e.target.value)} required />
        <button type="submit">Submit</button>
    </form>
       
        </>
    )
}