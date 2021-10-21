import data_array from "../obj.js";

function Recreational() {
  var filtered = data_array.filter((data) => data.type === "recreational");

  const mappingFil = (
    <div className="category">
      {filtered.map((list) => {
        return (
          <div id="card" key={list.id}>
            <div className="card">
              <p>Activity: {list.activity}</p>
              <p>No. of participants: {list.participants}</p>
              <p>Type: {list.type}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div id="bored-container">
      <h2>Category: Recreational</h2>
      {mappingFil}
    </div>
  );
}

export default Recreational;
