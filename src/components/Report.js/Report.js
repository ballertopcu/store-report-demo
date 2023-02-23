import { useEffect, useState } from 'react';
import Products from '../Products/Products';

export default function Report({reports}) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    if(reports.length > 0) {
      setProducts(reports.reverse())
    }
  }, [reports])

  return (
    <div className="store-section">
       <h3 className="title">
        Report
      </h3>
      <Products products={products} showCount={true}/>
    </div>
  )
}