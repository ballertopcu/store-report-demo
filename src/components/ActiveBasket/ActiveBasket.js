import Products from '../Products/Products';

export default function ActiveBasket() {
  const products = [
    // {
    //   id: useId(),
    //   imgName: 'white-tsirt',
    //   color: 'white',
    //   code: '01000B121231',
    //   status: 'Picked'
    // },
    // {
    //   id: useId(),
    //   imgName: 'black-tsirt',
    //   color: 'black',
    //   code: '01000B121231',
    //   status: 'Walking'
    // }
  ]

  return (
    <div className="store-section">
      <h3 className="title">
        Active Basket
      </h3>
      <Products products={products}/>
    </div>
  )
}