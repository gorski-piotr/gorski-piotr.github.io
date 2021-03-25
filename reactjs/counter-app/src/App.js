import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App in ReactJS</h1>
      </header>
      <Counter initValue={0} />
      <Counter initValue={108} />
    </div>
  );
}

export default App;
