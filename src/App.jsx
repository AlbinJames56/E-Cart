import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Pages/View";
import Wishlist from "./Pages/Wishlist";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
