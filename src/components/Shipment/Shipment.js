import React, { useContext } from 'react'
import { categoryContext } from '../../App'
export default function Shipment() {
    const count=useContext(categoryContext)

    return (
        <div>
            <h4>Shipment product:{count}</h4>
        </div>
    )
}
