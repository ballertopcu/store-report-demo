import Products from '../Products/Products';

export default function Report({reports, loading}) {
  return (
    <div className="store-section">
       <h3 className="title">
        Report
      </h3>
      <Products products={reports} showCount={true}/>
    </div>
  )
}