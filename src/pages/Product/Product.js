import React from 'react'
import "./Product.css"
import { useStateValue } from '../../store/StateProvider';


function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    console.log("this is the basket >>> ", basket)

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        }) 
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__rating">
                    <p>{"⭐".repeat(rating)}</p>
                </div>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
