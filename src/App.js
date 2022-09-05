import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyAccount from "./Pages/MyAccount/MyAccount";
import BuisinessAccount from "./Pages/BuisinessAccount/BuisinessAccount";
import AnotherAccount from "./Pages/AnotherAccount/AnotherAccount";
import AddPost from "./Pages/AddPost/AddPost";
import Product from "./Pages/Product/Product";
import './scss/style.scss'
import Header from "./layout/Header/Header";
import {useEffect, useContext} from "react";
import {CustomContext} from "./Context";
import Profile from "./Pages/Profile/Profile";
import Category from "./Pages/Category/Category";

function App() {

    const {getUserFromLS, getAllProduct} = useContext(CustomContext)

    useEffect(() => {
       getUserFromLS()
    }, [])



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/myaccount' element={<MyAccount/>}/>
        <Route path='/businessaccount' element={<BuisinessAccount/>}/>
        <Route path='/anotheraccount/:id' element={<AnotherAccount/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/addpost' element={<AddPost/>}/>
        <Route path='/product/:id' element={<Product />}/>
          <Route path='/profile/*' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
