
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} /> 
          <Route path="home" element={<Home />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
