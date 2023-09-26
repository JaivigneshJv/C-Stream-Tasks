import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add List..." />
          <div class="add">Add</div>
        </div>
        <div class="list">
          <ToDo text="Hi" />
        </div>
      </div>
    </div>
  );
}

export default App;
