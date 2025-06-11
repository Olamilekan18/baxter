'use client'

import { useState } from "react"
import { chatItem } from "./load_processor"
import { FiSend } from "react-icons/fi"
import { SideNav } from "../stock/layout"

export default function AIRoute(){
    const [query, updateQVal] = useState('')
    const [response, updateRes] = useState('')
     
    function appender(){
         const chat_window = document.querySelector('#chat_body')
        const div = document.createElement('div')
        div.className = 'grid text-xl justify-self-end rounded-2xl p-2 my-2 bg-gray-400 text-right justify-self-right h-auto'
       chat_window?.appendChild(div)
       div.textContent = query
    }

    function appendAIResponse(txt: string){
        const chat_window = document.querySelector('#chat_body')
        const div = document.createElement('div')
        div.className = 'grid text-xl rounded-2xl p-2 indent-4 my-2 bg-[#53D22c] text-left justify-self-left h-auto w-[60%] text-justify'
       chat_window?.appendChild(div)
       div.textContent = txt
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        updateRes('')
        appender();
        const value = await chatItem(query)
        if(value){updateRes(value)
            appendAIResponse(value)
        }
    }

    return(
        <div className="grid grid-cols-6 p-2 my-2">
        <div className="grid col-span-1">
            <SideNav/>
        </div>

        <div className="grid col-span-5 h-[90vh] p-4">
            <p className="text-4xl">Chat Here!</p>
            <div id='chat_body' className="grid h-[75vh] overflow-auto my-2">

            </div>
            <form className="grid gap-x-2 grid-cols-4 items-center" onSubmit={handleSubmit}>
            <input type="text" autoFocus name='chat_text' maxLength={100} minLength={2} onChange={(e)=> updateQVal(e.target.value)} className="bg-transparent p-2 rounded-2xl col-span-3 text-wrap border-gray-400 outline-none border-2"/>
             <button type="submit" className="flex gap-x-3 col-span-1 hover:bg-[#53D22c] p-3 rounded-[1.5rem] justify-center items-center">
                <FiSend fill="white" size={"1.25rem"}/>
                <span>Send</span>

                </button>
            </form>

        </div>
        </div>
    )
}