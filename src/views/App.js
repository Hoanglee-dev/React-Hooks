import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/myComponent";
import MyProfile from "./example/myAvatar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world with React.js</p>

        <MyComponent></MyComponent>
      </header>
    </div>
  );
}
export default App;
