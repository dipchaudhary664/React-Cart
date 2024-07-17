import logo from "./logo.svg";
import "./App.css";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useContext, useEffect } from "react";
import { ProductContext } from "./context/ProductContect";
import Footer from "./components/Footer";

function App() {
  const { filterProducts } = useContext(ProductContext);
  const { category } = useParams();
  useEffect(() => {
    filterProducts(category);
  }, [category]);
  return (
    <div className="min-h-screen h-auto bg-white">
      <Navbar />
      <Outlet />
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
