import Card from "../Card/Card";

export default function Products({ products, showCount }) {
  return (
    <div className="products">
      {products.map((item, index) => (
        <Card key={item.id} {...item} count={index + 1} showCount={showCount} />
      ))}
    </div>
  );
}
