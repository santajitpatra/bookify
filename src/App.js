import { Route, Routes } from "react-router-dom";
// pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListingPage from "./pages/List";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Orders from "./pages/Orders";

// Component
import NavbarComponent from "./components/Navbar";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ViewOrderDetails from "./pages/ViewOrderDetails";

function App() {
  return (
    <div className="">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="/book/view/:bookId" element={<Details />} />
        <Route path="/book/orders" element={<Orders />} />
        <Route path="/book/orders/:bookId" element={<ViewOrderDetails />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
