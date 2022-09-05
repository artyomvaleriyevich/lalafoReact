import Card from "./Card";
import {Link, useLocation} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import {CustomContext} from "../../Context";


const Home = () => {

    const {product, user, getAllProduct} = useContext(CustomContext)
    useEffect(() => {
        getAllProduct()
    }, [])

    return (
        <div className='home'>
           <div className="container">
               <div className='home__content'>
                   {
                       product.map((item) => (
                           <Card item={item}/>
                       ))
                   }
               </div>

           </div>
        </div>
    );
};

export default Home;