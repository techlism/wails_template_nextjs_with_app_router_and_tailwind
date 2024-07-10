'use client'
// this function is coming directly from the go code
import { Greet } from "@/wailsjs/go/main/App"
import { useState } from "react"

export default function Greeting(){
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result.toUpperCase());

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div>
            <div className="my-4 font-medium" >{resultText}</div>
            <div>
                <input className="p-2 rounded-md text-pretty text-gray-900 font-medium focus:border-0" onChange={updateName} autoComplete="off" name="input" type="text"/>
                <button onClick={greet} className="bg-primary border rounded-md p-2 mx-2 font-semibold hover:opacity-75" disabled={name===''}>Greet</button>
            </div>
        </div>
    )    
}