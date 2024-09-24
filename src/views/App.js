import logo from "./logo.svg";
import "./App.scss";
import { Link } from "react-router-dom";

import Header from "./component/Header/Header";
const App = () => {
  return (

    <div className="app-container">
      <Header />
      <div>
        test Link
        <div>
          <button>
            <Link to="/Users">goto usser page</Link>
          </button>
          <button>
            <Link to="/Admins">goto Admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
