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
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

//User Pages
import Profile from "./pages/user/Profile";
import EditProfilePage from "./pages/user/EditProfilePage";
import FollowersPage from "./pages/user/FollowersPage";
import FollowingPage from "./pages/user/FollowingPage";
import Messages from "./pages/user/Messages";
import MyEventsPage from "./pages/user/MyEventsPage";

//Search and Details Pages
import SearchUsersPage from "./pages/search/SearchUsersPage";
import UserDetailsPage from "./pages/search/UserDetailsPage";
import SearchEventsPage from "./pages/search/SearchEventsPage";
import EventDetailsPage from "./pages/search/EventDetailsPage";

//Event Pages
import CreateEvent from "./pages/eventspages/CreateEvent";
import EditEvent from "./pages/eventspages/EditEvent";

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
        <Route
          path="/edit-profile/:id"
          element={
            <IsPrivate>
              <EditProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/profile/:id/followers"
          element={
            <IsPrivate>
              <FollowersPage />
            </IsPrivate>
          }
        />
        <Route
          path="/profile/:id/following"
          element={
            <IsPrivate>
              <FollowingPage />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/:id/messages"
          element={
            <IsPrivate>
              <Messages />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/:id/events"
          element={
            <IsPrivate>
              <MyEventsPage />
            </IsPrivate>
          }
        />

        <Route
          path="/search-users"
          element={
            <IsPrivate>
              <SearchUsersPage />
            </IsPrivate>
          }
        />

        <Route
          path="/user-details/:id"
          element={
            <IsPrivate>
              <UserDetailsPage />
            </IsPrivate>
          }
        />

        <Route
          path="/search-events"
          element={
            <IsPrivate>
              <SearchEventsPage />
            </IsPrivate>
          }
        />

        <Route
          path="/event-details/:id"
          element={
            <IsPrivate>
              <EventDetailsPage />
            </IsPrivate>
          }
        />

        <Route
          path="/create-event"
          element={
            <IsPrivate>
              <CreateEvent />
            </IsPrivate>
          }
        />

        <Route
          path="/edit-event/:id"
          element={
            <IsPrivate>
              <EditEvent />
            </IsPrivate>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
