import styles from "./Card.module.css";

export default function Card({
  meta_data,
  identifier,
  count,
  showCount,
  session_count,
  session_duration,
  event,
  device_identifier,
  item_name
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

//   [
//     {
//         "id": 20847516,
//         "inserted_at": "2023-02-23T17:23:04Z",
//         "updated_at": "2023-02-23T17:28:44Z",
//         "device_id": 22120,
//         "item_id": 2348,
//         "store_id": 5,
//         "duration": 340,
//         "add_to_basket": true,
//         "zone_changed": true,
//         "state_id": 3,
//         "event_id": 2,
//         "event": "Walking",
//         "upc": "194252192429",
//         "item_name": "APPLE MAGSAFE CHARGER",
//         "meta_data": {
//             "image_url": "https://bb-item-images.s3.eu-central-1.amazonaws.com/1213049/1213049.jpg"
//         },
//         "device_identifier": "000B30C7"
//     },
//     {
//         "id": 20831698,
//         "inserted_at": "2023-02-23T11:28:09Z",
//         "updated_at": "2023-02-23T11:28:09Z",
//         "device_id": 28746,
//         "item_id": 25988,
//         "store_id": 5,
//         "duration": 0,
//         "add_to_basket": false,
//         "zone_changed": false,
//         "state_id": 5,
//         "event_id": 0,
//         "event": "",
//         "upc": "194253416869",
//         "item_name": "IPHONE 14 PRO MAX  MAGSAFE  SILIKON KILIF-SUKULENT",
//         "meta_data": null,
//         "device_identifier": "000B5D3B"
//     }
// ]

  return (
    <div className={styles.container}>
      {showCount && <div className={styles.count}>{count}</div>}
      <div className={styles.body}>
        <div className={styles.cardImage}>
          {meta_data?.image_url && <img src={meta_data.image_url} alt="product-jpg" />}
        </div>
        <span className={styles.productColor}>{item_name}</span>
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
