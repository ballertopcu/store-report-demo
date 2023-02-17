import Products from '../Products/Products';

export default function ActiveBasket({basket}) {
  return (
    <div className="store-section">
      <h3 className="title">
        Active Basket
      </h3>
      <Products products={basket}/>
    </div>
  )
}