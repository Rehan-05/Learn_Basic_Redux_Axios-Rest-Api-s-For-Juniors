import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) =>state.allProducts.products);
 // const {id, title,category} = products[0];    //Just Dis-Structure the Object to get the id and title from the redux state object.
  
  const renderList = products.map((product)=>{
       const {id,title,category,price,image} = product;
        return (
          <div className='column four wide' key={id} >
            <Link to={`/product/${id}`}>
              <div className='ui link cards'>
                <div className='card'>
                  <div className='image'> 
                    <img src={image} alt={title}/>
                  </div> 
                  <div className='content'>
                    <div className='header'> {category}</div>
                    <div className='meta price'>{price}$</div>
                    <div className='header'>{title}</div>
                  </div>
                </div>
              </div>
              </Link>
        </div>
        );
  });
  return (
    <>
      {renderList};
    </>
  );
}

export default ProductComponent;