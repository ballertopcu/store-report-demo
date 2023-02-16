import Card from "../Card/Card";

export default function Products({ products, showCount, loading }) {
  return (
    <div className="products">
      {products.length === 0 ? (
        loading ? (
          <span className="loading">Loading...</span>
        ) : (
          <></>
        )
      ) : (
        products.map((item, index) => (
          <Card key={index} {...item} count={index + 1} showCount={showCount} />
        ))
      )}
    </div>
  );
}
