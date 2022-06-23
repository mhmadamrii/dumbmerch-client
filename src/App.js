// bootstrap & react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import DetailProduct from "./pages/DetailProduct";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Complain from "./pages/Complain";
import FAQ from "./pages/FAQ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/FAQ" element={<FAQ />} />
        {/* unidentified routing */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;