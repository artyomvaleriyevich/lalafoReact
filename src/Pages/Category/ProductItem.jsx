import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../Context";
import axios from "../../axios";
import {MdOutlineMail, MdFavorite} from 'react-icons/md'
import {Link} from "react-router-dom";

const ProductItem = ({sort}) => {


    const {getAllProduct, product, filter} = useContext(CustomContext)

    useEffect(() => {
       getAllProduct()
    }, [])

    return (
        <div className='product-items'>
            <div className="container">
                {
                    product.sort((a, b) => sort === 'more' ? b.price - a.price : sort === 'less' ? a.price - b.price : sort === 'new' ?  b.id - a.id : '').filter((el) => el.price >= +filter?.price?.from && el.price <= +filter?.price?.to ).filter(el => el.description.toLowerCase().includes(filter?.title?.toLowerCase())).map(item => (
                        <div className='product-item'>
                            <Link className='product-item__link' to={`/product/${item.id}`}>
                                <img className='product-item__img' src={item.image} alt=''/>
                            </Link>
                            <div className='product-item__left'>
                                <p className='product-item__descr'>{item.description}</p>
                                <div className='product-item__info'>
                                    <p className='product-item__text'>{item.chose}</p>
                                    <p className='product-item__text'>{item.model}</p>
                                    <p className='product-item__text'>{item.volume}</p>
                                    <p className='product-item__text'>{item.year}</p>
                                    <p className='product-item__text'>{item.body}</p>
                                </div>
                                <div className='product-item__content'>
                                    <p className='product-item__about'>{item.price} $</p>
                                    <p className='product-item__about'>{item.city}</p>
                                </div>
                            </div>
                            <div className='product-item__right'>
                                <div className='product-item__icons'>
                                    <p className='product-item__icon'><MdOutlineMail/></p>
                                    <p className='product-item__icon'><MdFavorite/></p>
                                </div>
                                <p className='product-item__phone'>{item.creator.phone}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductItem;