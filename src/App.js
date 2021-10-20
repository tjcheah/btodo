import Categories from "./Categories";
import Sport from "./Sport";
import Recommendation from "./Recommendation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <p className="Title"> BTodo App </p>
        </Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sport" component={Sport} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <div className="Weather-col">
      <div>Hey There, Let's discover</div>
      <div className="Weather">Weather</div>
    </div>
    <div className="Categories">
      <Categories />
    </div>
    <div className="Recommendation">
      <Recommendation />
    </div>
  </div>
);
export default App;
