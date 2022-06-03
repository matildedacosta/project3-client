import "./App.css";
import { Routes, Route } from "react-router-dom";

//Auth components
import IsAnon from "./components/auth/IsAnon";
import IsPrivate from "./components/auth/IsPrivate";

//Auth and Global pages
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
