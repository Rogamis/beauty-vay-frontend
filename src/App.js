import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";import AllProducts from "./pages/AllProducts";
import CosmeticFace from "./pages/CosmeticFace";
import CreamePage from "./pages/CreamePage";
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/allproducts" element= {<AllProducts />} />
        <Route path="/creame" element={<CreamePage />} />
        <Route path="/cosmetic" element={<CosmeticFace />} />
      </Routes>
    </Router>
  );
}

export default App;