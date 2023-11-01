import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Homes from "./pages/Homes";
import Login from "./pages/Login";
import Sighnup from "./pages/Sighnup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sighnup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
