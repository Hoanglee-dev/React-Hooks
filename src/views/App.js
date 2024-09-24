import logo from "./logo.svg";
import "./App.scss";
import { Outlet, Link } from "react-router-dom";

import Header from "./component/Header/Header";
const App = () => {
  return (

    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container">
        </div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>

      {/* <div>
        test Link
        <div>
          <button>
            <Link to="/Users">goto usser page</Link>
          </button>
          <button>
            <Link to="/Admins">goto Admin page</Link>
          </button>
        </div>
      </div> */}
    </div>
  );
}
export default App;
