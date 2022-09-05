import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "../../axios";

const Product = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const [active, setActive] = useState(false)
    console.log(product)

    useEffect(() => {
        axios.get(`/product/${params.id}`)
            .then(({data}) => {
                setProduct(data)
            })
    }, [])

    if (product.creator === undefined) {
        return '..loading'
    }


    return (
        <div className='product'>
            <div className='container'>

                <div className='product__crumbs'>
                    <Link className='product__crumbs-link' to='/'>Home</Link> - <p className='product__crumbs-product'>Product</p>
                </div>

                <div className='product__content'>
                    <div className='product__content-left'>
                        <img className='product__content-img' src={product.image} alt={product.title}/>
                    </div>
                    <div className='product__content-right'>
                        <p className='product__content-price'>{product.price} $</p>
                        <div className='product__content-user'>
                            <img className='product__content-userImg' src={product.creator.avatar} alt=""/>
                            <p className='product__content-userName'>{product.creator.name }</p>
                        </div>
                        <p className='product__delivery'>{product.creator.email }</p>
                        <p className='product__delivery'>{product.delivery}</p>
                        <ul className='product__content-right-list'>
                            {
                               product.comment && product.comment.map(comment => (
                                    <li className='product__content-right-item'><span className='product__content-right-email'>{comment.email}</span> -{ comment.message}</li>
                                ))
                            }
                        </ul>
                        {
                            active ? <textarea className='product__textarea' name="" id="" cols="30" rows="10"></textarea> : ''
                        }
                        <button onClick={() => setActive(true)} className='product__content-right-btn' type={"button"}>Добавить комментарий</button>
                        <h4 className='product__content-right-phone'>+996500326320</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;