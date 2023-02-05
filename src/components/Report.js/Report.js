import { useId } from 'react';
import Products from '../Products/Products';

export default function Report() {
  const products = [
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'white-tsirt',
      color: 'white',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'black-tsirt',
      color: 'black',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'black-tsirt',
      color: 'black',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
    {
      id: useId(),
      imgName: 'black-tsirt',
      color: 'black',
      code: '01000B121231',
      picked: 25,
      walking: 120
    },
  ]

  return (
    <div className="store-section">
       <h3 className="title">
        Report
      </h3>
      <Products products={products} showCount={true}/>
    </div>
  )
}