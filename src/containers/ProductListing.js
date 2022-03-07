import React , {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';


const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products); 
  //useSelector is a hook that is used to get the state from the redux store.
  //console.log(products);
  
  const dispatch = useDispatch();


  const fetchProducts = async() => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((err)=> { console.log('error in the api',err);
   });
   //console.log(response.data);
   dispatch(setProducts(response.data));
   //(1). After dispatching the action, we dispatch the action to the reducer.
  };

  useEffect(() => {
    fetchProducts();
  }, []);
 
  console.log("Products",products);
  
  return (
    <div className='ui grid container ' style={{marginTop:'10px'}}>
        <ProductComponent />
    </div>
  );
}

export default ProductListing;