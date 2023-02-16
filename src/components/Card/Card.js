import styles from "./Card.module.css";

export default function Card({
  meta_data,
  color,
  identifier,
  status,
  count,
  showCount,
  session_count,
  session_duration,
}) {

  // const products = [
  //   {
  //     session_count: 1,
  //     item_name: "Lightning to Headphone Jack",
  //     upc: "190198001795",
  //     sku: "1168501",
  //     meta_data: {
  //       image_url:
  //         "https://bb-item-images.s3.eu-central-1.amazonaws.com/194252750872/APPLE-USB-C-Lightning-Şarj-Kablosu-1-m-Beyaz.webp",
  //     },
  //     session_duration: 1,
  //     identifier: "000B0243",
  //   },
  // ];

  return (
    <div className={styles.container}>
      {showCount && <div className={styles.count}>{count}</div>}
      <div className={styles.body}>
        <div className={styles.cardImage}>
          {meta_data?.image_url && <img src={meta_data.image_url} alt="product-jpg" />}
        </div>
        <span className={styles.productColor}>{color || "white"}</span>
        <span className={styles.productCode}>{identifier}</span>
        {status && <span className={styles.productStatus}>{status}</span>}
        {session_count && (
          <span className={styles.productInfo}>{`${Math.round(session_count)} Int`}</span>
        )}
        {session_duration && (
          <span className={styles.productInfo}>{`${Math.round(session_duration)} sc avg`}</span>
        )}
      </div>
    </div>
  );
}
