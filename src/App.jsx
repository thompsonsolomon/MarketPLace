import { Route, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import CheckOutPage from "./Pages/CheckOutPage.jsx";
import ProductDetailsPage from "./Pages/ProductDetailsPage.jsx";
import VendorProfilePage from "./Pages/VendorProfilePage.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  return (
    
    <Routes>
      <Route element={
        <HeroPage />
      } path="/home" />
      <Route element={
        <ProductPage />
      } path="/" />
         <Route element={
        <Cart />
      } path="/cart" />
      <Route element={
        <CheckOutPage />
      } path="/checkout" />
      <Route element={
        <ProductDetailsPage />
      } path="/product/:id" />
      <Route element={
        <VendorProfilePage />
      } path="/vendor/:id" />
    </Routes>

  );
};

export default App;
