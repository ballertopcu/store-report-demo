import ActiveBasket from "./ActiveBasket/ActiveBasket";
import Report from "./Report.js/Report";
import { useEffect, useState } from "react";

export default function Main() {

  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    let sendData = {
      "user_name": "ersel",
      "password": "1234"
    }

    let res = await fetch('https://api-legacy.buybuddy.co/api/v1/user/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData) 
    })
    const userData = await res.json()

    sendData = {
      passphrase: userData.passphrase
    }

    res = await fetch('https://api-legacy.buybuddy.co/api/v1/user/sign_in/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendData) 
    })
    const tokenData = await res.json()

    res = await fetch(`https://api-legacy.buybuddy.co/api/v1/merchant/store/${userData.store_id}/session_history`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenData.token}`
      }
    })

    const report = await res.json()
    setReports(report)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="main-container">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="content">
        <ActiveBasket />
        <Report reports={reports} loading={loading}/>
      </div>
    </div>
  );
}
