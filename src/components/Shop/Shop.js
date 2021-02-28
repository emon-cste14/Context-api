import React,{ useContext }  from 'react'
import Product from '../Product/Product'
import { categoryContext } from '../../App'

export default function Shop() {
    const count=useContext(categoryContext)

    return (
        <div style={{border:'1px solid red'}}>
            <h3>This is shop:{count}</h3>
            <Product />
        </div>
    )
}
