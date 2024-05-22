import React from 'react';

const ProductList = ({product, addToCart}) => {
  return (
    <div className='flex'>
        {product.map((productitem, productindex) => {
            return (
                <div key={productindex} style={{width:'50%'}}>
                   <div className='product-item'>
                       <img src={productitem.url} width='50%' alt={productitem.name} />
                       <p>{productitem.name} | {productitem.category}</p>
                       <p>{productitem.seller}</p>
                       <p>RS.{productitem.price}/-</p>
                       <button onClick={() => addToCart(productitem)}>Add-Cart</button>
                   </div> 
                </div>
            )
        })} 
    </div>
  )
}

export default ProductList;
