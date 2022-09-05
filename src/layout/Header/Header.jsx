import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import {BsSearch} from 'react-icons/bs'
import {arrItem} from "../../list";
import {CustomContext} from "../../Context";

import MenuCatalog from "../../components/MenuCatalog";


const Header = () => {
    const {user, setUser} = useContext(CustomContext)
    const [popup, setPopup] = useState(false)
    const logOutUser = () => {
        localStorage.removeItem('user')
        setUser({})
    }



    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className='header__left'>
                        <h1 className='header__title'><Link className='header__title-link' to='/'>LALAFO</Link></h1>
                        <Link className='header__link' to='#'>Для бизнеса</Link>
                    </div>
                    <div className='header__right'>
                        {
                            user.email ?
                                    <div className='header__user'>
                                        <Link to='/profile/wallet' style={{marginRight: '10px'}} className='header__user-name'>Кошелек : {user.balance} Р.</Link>
                                        <img className='home__info-img' src={user.avatar} alt=""/>
                                        <p className='header__user-name'><Link to='/profile/post'>{user.name}</Link></p>
                                        <button className='header__user-btn' onClick={() => logOutUser()} type={"button"}>Выйти</button>
                                    </div>
                               :
                                <p onClick={() => setPopup(true)} className='header__login'>Войти - Регистрация</p>
                        }
                        <button type={"button"} className='header__btn'><Link style={{color: 'white'}} to='/addpost'>Подать объявление</Link></button>
                    </div>
                </nav>

            </div>

            {
                popup && <Popup setPopup={setPopup} popup={popup}/>
            }
            <div className='header__bottom'>
                <div className="container">
                    <div className='header__bottom-search'>
                        <input placeholder='Я ищу...' className='header__bottom-input' type="search"/>
                        <button className='header__bottom-icon'><BsSearch/></button>
                    </div>
                    <ul className='header__bottom-list'>
                        {
                            arrItem.map(item => (
                                   <MenuCatalog key={item.id} {...item}/>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </header>
    );
};

export default Header;