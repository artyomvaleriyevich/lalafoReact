import React, {useState} from 'react';
import {Link} from "react-router-dom";

const MenuCatalog = ({title, list, icon}) => {
    const [active, setActive] = useState(false)

    return (
        <li onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)} className='header__bottom-item'>
            <Link className='header__bottom-link' to='#'>
                <div className='header__bottom-circle'>
                    {
                        icon
                    }
                </div>
                <p className='header__bottom-title'>{title}</p>
            </Link>
            {
                active && <ul className='header__bottom-activeList'>
                    {
                        list.map(el => (
                            <li key={el.name} className='header__bottom-activeItem'><Link
                                className='header__bottom-activeItem' to={`/${el.path}`}>{el.name}</Link></li>
                        ))
                    }

                </ul>
            }
        </li>
    );
};

export default MenuCatalog;