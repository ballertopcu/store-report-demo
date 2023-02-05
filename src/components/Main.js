import ActiveBasket from "./ActiveBasket/ActiveBasket";
import Report from "./Report.js/Report";

export default function Main() {
  return (
    <div className="main-container">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="content">
        <ActiveBasket />
        <Report />
      </div>
    </div>
  );
}
