import React,{useState,useContext} from 'react'
import { categoryContext } from '../../App'

export default function Header() {
    const [value,setvalue]=useContext(categoryContext)
  
    function incrementHandle(){
        setvalue(value+1)
    }
    return (
        <div>
            <h1>This is Header</h1>
            <h2>Show setValue:{value}</h2>
            <button onClick={incrementHandle}>Increment</button>
        </div>
    )
}
