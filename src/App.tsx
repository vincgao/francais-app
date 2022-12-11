import { ConfigProvider } from "antd";
import "./App.css";
import { WordGroup } from "./components/WordGroup";
import { words } from "./data";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 20,
        },
      }}
    >
      <div className="App">
        <WordGroup words={words} />
      </div>
    </ConfigProvider>
  );
}

export default App;
