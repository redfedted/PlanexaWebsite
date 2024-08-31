import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import InstallApp from "./pages/InstallApp.jsx";
import Home from "./pages/Home.jsx";
import Delete from "./pages/DeleteProfile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club/*" element={<InstallApp />} />
        <Route path="/event/*" element={<InstallApp />} />
                <Route path="/downloads/*" element={<InstallApp />} />

        <Route path="/deleteprofile/*" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
