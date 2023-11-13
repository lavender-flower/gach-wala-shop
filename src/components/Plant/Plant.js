import React from 'react';
import './Plant.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'




const Plant = (props) => {
    const{name,img,category,price,ratings,size}=props.plant;

    return (
    
        
                    <div className='plants'>
                      <div className='plant'>
                      <img src={img} alt=""></img>
                        <h3>Name: {name}</h3>
                        <p>Category: {category}</p>
                        <p>Price:{price} tk</p>
                        
                        <p>Pot Size:{size}</p>
                        
                        <button
                        
                        onClick={()=>props.handleAddtoordereditem(props.plant)} 
                         className='btn-regular'><FontAwesomeIcon icon={faCartShopping} />
                          add to ordered list</button>

                     
                      </div>
                      
                    
        </div>
    );
};

export default Plant;