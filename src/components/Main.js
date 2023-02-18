import ActiveBasket from "./ActiveBasket/ActiveBasket";
import Report from "./Report.js/Report";
import { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

export default function Main() {
  const [reports, setReports] = useState([]);
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState([]);

  const getData = async () => {
    setLoading(true);

    let sendData = {
      user_name: "ersel",
      password: "1234",
    };

    let res = await fetch(
      "https://api-legacy.buybuddy.co/api/v1/user/sign_in",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      }
    );
    const userData = await res.json();

    sendData = {
      passphrase: userData.passphrase,
    };

    res = await fetch(
      "https://api-legacy.buybuddy.co/api/v1/user/sign_in/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      }
    );
    const tokenData = await res.json();

    const [resReports, resBasket] = await Promise.all([
      fetch(
        `https://api-legacy.buybuddy.co/api/v1/merchant/store/${userData.store_id}/session_history`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData.token}`,
          },
        }
      ),
      fetch(
        `https://api-legacy.buybuddy.co/api/v1/merchant/store/${userData.store_id}/session_last_event`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData.token}`,
          },
        }
      ),
    ]);

    const reports = await resReports.json();
    const basket = await resBasket.json();

    setBasket(basket);
    setReports(reports);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main-container">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      {loading && (
        <div className="loader">
          <FallingLines
            color="#fff"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      )}
      <div className="content" style={{ display: loading ? "none" : "flex" }}>
        <ActiveBasket basket={basket} />
        <Report reports={reports} />
      </div>
    </div>
  );
}
