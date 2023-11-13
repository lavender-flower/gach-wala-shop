import React, { useEffect, useState } from 'react';
import './ShopPlant.css';
import Plant from '../Plant/Plant';
import Cart from '../Cart/Cart';

const ShopPlant = () => {
    const[plants,setPlants]=useState([]);
    const[cart,setCart]=useState([]);
    const[displayplants,setDisplayplants]=useState([]);

    useEffect(()=>{

        fetch('./plants.JSON').then(res=>res.json())
        .then(data=>{setPlants(data);
        setDisplayplants(data)});

    },[])

    const handleAddtoordereditem=(plant)=>{
        console.log(plant)
        const newCart=[...cart,plant];
        setCart(newCart)

    }
    const handleSearch=event=>{
const searchText=event.target.value;
const matchedPlants=plants.filter(plant=>plant.name.toLowerCase().includes(searchText.toLowerCase()));
setDisplayplants(matchedPlants);
    }
    return (<>
<div className='search-container'>

<h3 className='h'>We Have {plants.length} types of Different Plants For You!!   <input 
onChange={handleSearch}
className='search-bar' type='text' placeholder='search-your-favourite-plant'></input></h3>
    
</div>
        <div className='main-container'>
            <div className='plant-container'>
                
                {
                    displayplants.map(plant=>
                        <div className='all-plants' >
                           <div> <Plant 
                           
                           plant={plant}
                           handleAddtoordereditem={handleAddtoordereditem}
                           ></Plant></div>
                        </div>
                    )
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                

            </div>
            
        </div></>
    );
};

export default ShopPlant;