import React, {useContext, useEffect} from 'react';
import {CustomContext} from "../../Context";
import {useParams} from "react-router-dom";
import Card from "../Home/Card";

const AnotherAccount = () => {
    const params = useParams()
    const {product, getProductsById} = useContext(CustomContext)
    useEffect(() => {
        getProductsById(params.id)
    }, [])
    if (!product.length ) {
        return `...loading`
    }
    console.log(product)

    return (
        <div className='another'>
            <div className="container">
                <div className='another__user'>
                    <img className='another__img' src={product[0].creator.avatar ? product[0].creator.avatar : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt=""/>
                    <div className='another__info'>
                        <h2 className='another__title'>{product[0].creator.name}</h2>
                        <p className='another__text'>{product[0].creator.phone}</p>
                        <p className='another__text'>{product[0].creator.email}</p>
                    </div>
                </div>
                <div className='home__content'>

                    {
                        product.map(item => (
                            <Card item={item}/>
                        ))
                    }
                </div>


            </div>
        </div>
    );
};

export default AnotherAccount;