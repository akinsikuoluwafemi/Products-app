import React from 'react';


function Products(props){
    return (
        <div>
            <p className="name"> {props.name}</p>
            <p>price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}</p>
            <p>description: {props.description}</p>
        </div>
    )
}


export default Products;