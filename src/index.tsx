import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/_globals.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
