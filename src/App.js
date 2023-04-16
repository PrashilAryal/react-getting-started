import "./App.css";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Main title="First label" counter={50} />
      <Main title="Second label" counterTitle="Counter" counter={100} />
    </div>
  );
}

export default App;
