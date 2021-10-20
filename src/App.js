import "./App.css";
import data_array from "./obj.js";

function App() {
  var filtered = data_array.filter((data) => data.type === "charity");
  const mapping = (
    <div>
      {filtered.map((list) => {
        return (
          <div id="card" key={list.id}>
            <p>Activity: {list.activity}</p>
            <p>No. of participants: {list.participants}</p>
            <p>Type: {list.type}</p>
          </div>
        );
      })}
    </div>
  );
  return (
    <div id="bored-container">
      <h1>Bored?</h1>
      {mapping}
    </div>
  );
}

export default App;
