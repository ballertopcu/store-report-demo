import styles from "./Card.module.css";

export default function Card({
  imgName,
  color,
  code,
  status,
  count,
  showCount,
  picked,
  walking,
}) {
  return (
    <div className={styles.container}>
      {showCount && <div className={styles.count}>{count}</div>}
      <div className={styles.body}>
        <div className={styles.cardImage}>
          <img src={`./images/${imgName}.jpg`} alt="product-jpg" />
        </div>
        <span className={styles.productColor}>{color}</span>
        <span className={styles.productCode}>{code}</span>
        {status && <span className={styles.productStatus}>{status}</span>}
        {picked && <span className={styles.productInfo}>{`${picked} Int`}</span>}
        {walking && <span className={styles.productInfo}>{`${walking} sc avg`}</span>}
      </div>
    </div>
  );
}
