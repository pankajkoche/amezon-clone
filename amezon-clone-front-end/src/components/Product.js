import React from 'react';
import '../style/Product.css'
const Product = ({title,price,rating,image}) => {
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price' >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    <p> * * * * *</p>
                </div>
            </div>
            <img src={image}  alt=""/>

            <button>Add to Cart</button>
        </div>
    );
};

export default Product;