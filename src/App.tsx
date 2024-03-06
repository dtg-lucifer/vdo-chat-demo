import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Call from "./pages/call/call";
import { FirebaseContext, __app, __db } from "./lib/context/firebaseContext";

function App() {
  return (
    <FirebaseContext.Provider value={{ __app, __db }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call">
            <Route index element={<Call />} />
            <Route path=":id" element={<Call />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FirebaseContext.Provider>
  );
}

export default App;
