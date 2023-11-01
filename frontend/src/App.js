import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Homes from "./pages/Homes";
import Login from "./pages/Login";
import Sighnup from "./pages/Sighnup";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Homes /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Sighnup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
