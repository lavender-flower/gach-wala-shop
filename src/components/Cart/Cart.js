import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{cart}=props;
    let total=0;
    let name;
    let img;
    for(const plant of cart){
        total=total+plant.price;
         name=plant.name;
         img=plant.img;
    }
    const shipping=total>0?15:0;
    const tax=(total+shipping)*0.10;
    const grandTotal=total+tax+shipping;
    return (
        <div className='cart'>
            <h3>Ordererd Plants: {cart.length}</h3>

            <p>Total:{total} tk</p>
            <p>shipping cost:{shipping} tk</p>
            <p>tax;{tax} tk</p>
            <h4>GrandTotal:{grandTotal} tk</h4>
            

           
           <div className='cart-plant'>
           <p>Now you add {name}</p>
           
            <img src={img} alt=''></img>
            
           </div>
           <p>Give Your location and phone no</p>
           <input type='text' placeholder='Location'></input>
           <input type='number' placeholder='phone no'></input>
           <button className='btn-regular'>confirm</button>

            
            
        </div>
    );
};

export default Cart;