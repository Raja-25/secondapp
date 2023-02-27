import "./App.css";
import { Routes, Route } from "react-router-dom";
import Idcard from "./components/Idcard";
import Navbar from "./components/Navbar";

import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="id" element={<Idcard />} />
          <Route path="calculator" element={<Calculator />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
