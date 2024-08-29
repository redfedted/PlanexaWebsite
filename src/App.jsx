import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import InstallApp from "./pages/InstallApp.jsx";
import Home from "./pages/Home.jsx";
import Delete from "./pages/DeleteProfile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home> </Home>} />
<<<<<<< HEAD
        <Route path="/downloads/*" element={<InstallApp />} />
        <Route path="/deleteprofile/*" element={<Delete />} />
=======
        <Route path="/club/*" element={<InstallApp />} />
        <Route path="/event/*" element={<InstallApp />} />

>>>>>>> 4c525c167f97e951a86ec9a6723c242b3da398dc
      </Routes>
    </BrowserRouter>
  );
}

export default App;
