import Recommendation from "./Recommendation";
import Categories from "./Categories";
import "./App.css";
import Recreational from "./Recreational";

function App() {
  return (
    <div className="App">
      <p className="Title"> BTodo App </p>
      <div className="Weather-col">
        <div>Hey There, Let's discover</div>
        <div className="Weather">Weather</div>
      </div>
      <div className="Categories">
        <Categories />
      </div>
      <div className="Recommendation">
        <Recommendation />
        <Recreational />
      </div>
    </div>
  );
}

export default App;
