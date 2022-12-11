import "./App.css";
import { WordGroup } from "./components/WordGroup";
import { words } from "./data";

function App() {
  return (
    <div className="App">
      <WordGroup words={words} />
    </div>
  );
}

export default App;
