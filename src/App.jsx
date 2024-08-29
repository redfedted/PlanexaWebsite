import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import InstallApp from "./pages/InstallApp.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home> </Home>} />
        <Route path="/club/*" element={<InstallApp />} />
        <Route path="/event/*" element={<InstallApp />} />

      </Routes>
    </BrowserRouter>
  );
}



export default App;
