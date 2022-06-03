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
import ErrorPage from "./pages/ErrorPage";

//User Pages
import Profile from "./pages/user/Profile";

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
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
