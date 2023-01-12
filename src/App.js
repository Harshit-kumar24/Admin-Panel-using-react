import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import "./app.css"
import { BrowserRouter, Route,Routes } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";
import Map from "./components/pages/map/Map";
import Profile from "./components/pages/profile/Profile";

function App() {
  return (
  <BrowserRouter>
      
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element = {<UserList/>}/>
        <Route path = "users/:userId" element = {<User/>}/>
        <Route path = "/newUser"  element = {<NewUser/>}/>
        <Route path = "/products" element = {<ProductList/>}/>
        <Route path = "/products/:productId" element = {<Product/>}/>
        <Route path = "/newProduct" element = {<NewProduct/>}/>
        <Route path = "/map" element = {<Map/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
