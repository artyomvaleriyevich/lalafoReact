import React, {useEffect} from 'react';
import Card from "../Home/Card";
import {useContext} from "react";
import {CustomContext} from "../../Context";

const Post = () => {
    const {product, user, getProductsById} = useContext(CustomContext)
    useEffect(() => {
        getProductsById(user.id)
    },[])
    return (
        <div className='home__content'>
            {
                product.map(item => (
                    <Card item={item}/>
                ))
            }
        </div>
    );
};

export default Post;