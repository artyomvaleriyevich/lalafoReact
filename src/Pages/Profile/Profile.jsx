import React from 'react';
import {Link, NavLink, Routes, Route, useLocation} from "react-router-dom";
import Settings from "./Settings";
import Post from "./Post";
import Message from "./Message";
import Wallet from "./Wallet";

const Profile = () => {

    const location = useLocation()

    return (
        <div className='profile'>
            <div className='container'>

                <ul className='profile__tabs '>
                    <li className='profile__link'><NavLink className='profile__link' to='/profile/post'>Мои объявления</NavLink></li>
                    <li className='profile__link'><NavLink className='profile__link' to='/profile/messages'>Сообщения</NavLink></li>
                    <li className='profile__link'><NavLink className='profile__link' to='/profile/wallet'>Кошелек</NavLink></li>
                    <li className='profile__link'><NavLink className='profile__link' to='/profile/settings'>Настройки профиля</NavLink></li>
                </ul>


                <div className='product__crumbs'>
                    <Link to='/'>Главная</Link> - <p>Профиль</p> - <p>
                    {location.pathname.includes('settings') ? 'Настройки профиля' :
                        location.pathname.includes('wallet') ? 'Кошелек' :
                            location.pathname.includes('messages') ? 'Сообщения' :
                                location.pathname.includes('post') ? 'Мои объявления' : ''


                    }
                </p>
                </div>
                <>
                   <Routes>
                       <Route path='/settings' element={<Settings/>}/>
                       <Route path='/post' element={<Post/>}/>
                       <Route path='/messages' element={<Message/>}/>
                       <Route path='/wallet' element={<Wallet/>}/>
                   </Routes>
                </>
            </div>
        </div>
    );
};

export default Profile;