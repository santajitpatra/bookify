import { Route, Routes } from "react-router-dom";
// pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListingPage from "./pages/List";
// Component
import NavbarComponent from "./components/Navbar"
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
