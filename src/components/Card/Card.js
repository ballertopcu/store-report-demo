import styles from "./Card.module.css";

export default function Card({
  meta_data,
  identifier,
  count,
  showCount,
  session_count,
  session_duration,
  event,
  device_identifier
}) {

//   {
//     "id": 20683424,
//     "inserted_at": "2023-02-17T13:31:04Z",
//     "updated_at": "2023-02-17T13:33:47Z",
//     "device_id": 20056,
//     "item_id": 2335,
//     "store_id": 8,
//     "duration": 163,
//     "add_to_basket": false,
//     "zone_changed": true,
//     "state_id": 1,
//     "event_id": 1,
//     "event": "Picked Up",
//     "upc": "194252157008",
//     "item_name": "APPLE 20W USB C HIZLI SARJ ADAPTORU",
//     "meta_data": {
//         "image_url": "https://bb-item-images.s3.eu-central-1.amazonaws.com/1213050/1213050.jpg"
//     },
//     "device_identifier": "000B20C0"
// }

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
        <span className={styles.productColor}>{meta_data?.color || 'white'}</span>
        <span className={styles.productCode}>{identifier || device_identifier}</span>
        {(event || event === '') && <span className={styles.productStatus}>{event}</span>}
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
