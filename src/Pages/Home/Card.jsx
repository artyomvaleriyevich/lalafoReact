import React, {useContext, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import {CustomContext} from "../../Context";
import {MdFavorite, MdEmail} from 'react-icons/md'

const Card = ({item}) => {

    return (
            <div key={item.id} className='home__card'>
                <Link style={{color: 'black'}} to={`/product/${item.id}`}>
                    <img className='home__img' src={item.image} alt=""/>
                    <h2>{item.title}</h2>
                    <p>{item.price} $</p>
                    <span>{item.descr}</span>
                </Link>
                <div className='home__info'>
                    <Link className='home__info-link' to={`/anotheraccount/${item.creator.id}`}>
                        <img className='home__info-img' src={item.creator.avatar.length ? item.creator.avatar : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt=""/>
                    </Link>
                    <div className='home__info-icons'>
                        <Link className='home__info-icon' to='/'>
                            <MdEmail/>
                        </Link>
                        <Link className='home__info-icon' to='/'>
                            <MdFavorite/>
                        </Link>
                    </div>
                </div>
            </div>

    );
};

export default Card;