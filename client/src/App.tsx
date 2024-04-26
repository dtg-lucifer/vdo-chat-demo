import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Call from "./pages/call/call";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call">
            <Route index element={<Call />} />
            <Route path=":id" element={<Call />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
