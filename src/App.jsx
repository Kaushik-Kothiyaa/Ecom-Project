import { Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Products } from "./components/Products"
import { ProductDetails } from "./components/ProductDetails"
import { Cart } from "./components/Cart"
import { Checkout } from "./components/CheckOut"
import { Login } from "./pages/Login"
import { Register } from "./pages/register"
import { Navbar } from "./components/Navbar"
import { Categories } from "./components/Categories"

const App = ()=>{

  return<>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  </>
}

export default App