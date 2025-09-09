import HomePage from "./pages/HomePage";
import Product from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetailPage from "./components/ProductDetail";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter ,Routes,Route} from 'react-router-dom';

import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CustomPage from "./pages/CustomPage";
function App() {
  return (
    // <>
    //   {/* <HomePage /> */}
    //   {/* <Product /> */}
    //   <ProductDetailPage/>
    // </>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/custom" element={<CustomPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
