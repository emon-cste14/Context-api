import React from 'react'
import '../Cart/Cart.css';
export default function Cart(props) {
    var cart=props.cart
    let total=0;
    var pp=0;
    for(let i=0;i<cart.length;i++)
    {
        const product=cart[i];
         pp=product.price;
        total+=pp;
    }
    var shippingCost=0;
    if(total>50)
    shippingCost=0;
    else if(total>20)
    shippingCost=5;
    else if(total>0)
    shippingCost=10;

    var tax=(total/10).toFixed(2);
    var totalAmount=(total+shippingCost).toFixed(2);
    return (
        <div>
            <h1>Order Summary</h1>
             <h3>Items Ordered:{cart.length}</h3>
             <h5>Product Price:${pp}</h5>
             <h5>Shipping Cost:${shippingCost}</h5>
             <h5>Tax+Vat:${tax}</h5>
             <h4>Total Price:${totalAmount}</h4>
             <button className="summry-btn">See details</button>
        </div>
    )
}