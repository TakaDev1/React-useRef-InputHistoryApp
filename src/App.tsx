import "./App.css";
import HandleInputBox from "./components/HandleInputBox";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1>React-useRef-InputHistoryApp</h1>
        <HandleInputBox />
      </div>
    </>
  );
}

export default App;
