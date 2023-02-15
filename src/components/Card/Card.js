import styles from "./Card.module.css";

export default function Card({
  imgName,
  color,
  identifier,
  status,
  count,
  showCount,
  session_count,
  session_duration,
}) {

  return (
    <div className={styles.container}>
      {showCount && <div className={styles.count}>{count}</div>}
      <div className={styles.body}>
        <div className={styles.cardImage}>
          {imgName && <img src={`./images/${imgName}.jpg`} alt="product-jpg" />}
        </div>
        <span className={styles.productColor}>{color || 'white'}</span>
        <span className={styles.productCode}>{identifier}</span>
        {status && <span className={styles.productStatus}>{status}</span>}
        {session_count && <span className={styles.productInfo}>{`${Math.round(session_count)} Int`}</span>}
        {session_duration && <span className={styles.productInfo}>{`${Math.round(session_duration)} sc avg`}</span>}
      </div>
    </div>
  );
}
