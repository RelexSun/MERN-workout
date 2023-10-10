import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Homes from "./pages/Homes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Homes />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
