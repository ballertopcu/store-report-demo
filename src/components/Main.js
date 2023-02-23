import ActiveBasket from "./ActiveBasket/ActiveBasket";
import Report from "./Report.js/Report";
import { useCallback, useEffect, useRef, useState } from "react";
import { FallingLines } from "react-loader-spinner";

export default function Main() {
  const [reports, setReports] = useState([]);
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState([]);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const flag = useRef(false);

  const getBasket = async (storeId, pToken) => {
    const resBasket = await fetch(
      `https://api-legacy.buybuddy.co/api/v1/merchant/store/${storeId}/session_last_event`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${pToken}`,
        },
      }
    );

    return resBasket.json();
  };

  const getReports = async (storeId, pToken) => {
    const resReports = await fetch(
      `https://api-legacy.buybuddy.co/api/v1/merchant/store/${storeId}/session_history`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${pToken}`,
        },
      }
    );

    return resReports.json();
  };

  useEffect(() => {
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
      const userDataRes = await res.json();
      setUserData(userDataRes);

      sendData = {
        passphrase: userDataRes.passphrase,
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
      setToken(tokenData);

      const [resReports, resBasket] = await Promise.all([
        getReports(userDataRes.store_id, tokenData.token),
        getBasket(userDataRes.store_id, tokenData.token),
      ]);

      setBasket(resBasket);
      setReports(resReports);

      setTimeout(() => {
        setLoading(false);
        flag.current = true;
      }, 200);
    };
    getData().then();
  }, []);

  const handleReport = useCallback(async () => {
    const resReports = await getReports(userData.store_id, token.token);
    setReports(resReports);
    setTimeout(handleReport, 5000);
  }, [userData, token]);

  const handleBasket = useCallback(async () => {
    const resBasket = await getBasket(userData.store_id, token.token);
    setBasket(resBasket);
    console.log(resBasket)
    setTimeout(handleBasket, 1000);
  }, [userData, token]);

  useEffect(() => {
    let interval1, interval2;

    if (!loading && token && flag.current && userData) {
      setTimeout(() => {
        handleReport();
        handleBasket();
      }, 1000);
      flag.current = false;
    }

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [loading, token, userData, handleBasket, handleReport]);

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
