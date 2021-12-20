import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Dictionary </h1>
        <Dictionary />
        <footer>
          Codes by Alina Vennes, hosted on{" "}
          <a
            className="github-link"
            href="https://github.com/alinaven/react-dictionary"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
