import ActiveBasket from "./ActiveBasket/ActiveBasket";
import Report from "./Report.js/Report";
import { useCallback, useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

export default function Main() {
  const [reports, setReports] = useState([]);
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState([]);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

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

  const refreshData = useCallback(() => {
    setInterval(async () => {
      const resReports = await getReports(userData.store_id, token.token);
      setReports(resReports);
    }, 5000);
    setInterval(async () => {
      const resBasket = await getBasket(userData.store_id, token.token);
      setBasket(resBasket);
    }, 1000);
  }, [userData, token]);

  

  useEffect(() => {
    const getData = async () => {
      debugger
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
      }, 200);
    }
    getData().then();
  }, []);

  useEffect(() => {
    if (!loading && token) {
      setTimeout(() => {
        refreshData();
      }, 1000);
    }
  }, [loading, refreshData, token]);

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
