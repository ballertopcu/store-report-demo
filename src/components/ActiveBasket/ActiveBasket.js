import { useEffect, useState } from 'react';
import Products from '../Products/Products';

export default function ActiveBasket({basket}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if(basket.length > 0) {
      setProducts(basket.reverse())
    }
  }, [basket])
  
  return (
    <div className="store-section">
      <h3 className="title">
        Active Basket
      </h3>
      <Products products={products}/>
    </div>
  )
}