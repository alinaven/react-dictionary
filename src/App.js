import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <span className="header"> Dictionary </span>
        <Dictionary defaultKeyword="forest" />
      </div>
    </div>
  );
}
