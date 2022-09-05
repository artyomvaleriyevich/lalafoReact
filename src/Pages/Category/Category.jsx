import React, {useContext, useEffect, useState} from 'react';
import {RiArrowDownSLine} from 'react-icons/ri'
import {GrSearch} from 'react-icons/gr'
import {arrItem} from "../../list";
import ProductItem from "./ProductItem";
import {CustomContext} from "../../Context";
import debounce from 'lodash.debounce'

const Category = () => {
    const [active, setActive] = useState(false)
    const {filter, setFilter} = useContext(CustomContext)
    const [sort, setSort] = useState('')



    const searchProduct = (e) => {
        setFilter({...filter, title: e.target.value})
    }
    const debounceFunc = debounce(searchProduct, 400)

    return (
        <div className='category'>
            <div className="container">
               <div className='category__head'>
                   <div onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)} className='category__chose'>
                       <p className='category__title2'>Все категории</p>
                       <p className='category__icon1'><RiArrowDownSLine/></p>
                       <ul className={`category__list ${active ? 'category__list_active' : ''}`}>
                           {
                               arrItem.map(item => (
                                   <li onClick={() => setFilter({...filter, category: item.title}) } className='category__item'>{item.title}</li>
                               ))
                           }
                       </ul>
                   </div>


                   <div className='category__search'>
                       <input onChange={debounceFunc} placeholder='я ищу' className='category__input' type="text"/>
                       <p className='category__icon'><GrSearch/></p>
                   </div>
                   <select onChange={(e) => setFilter({...filter, city: e.target.value})} value={filter.city} className='category__select' name="" id="">
                       <option value="">Выберите город</option>
                       <option value="Бишкек">Бишкек</option>
                       <option value="Ош">Ош</option>
                       <option value="Кант">Кант</option>
                   </select>
               </div>
                <div className='category__content'>
                    <div className='category__price'>
                        <p className='category__title'>Цена</p>
                        <div className='category__inputs'>
                            <input onChange={(e) => setFilter({...filter, price: {...filter.price, from: +e.target.value}})}  placeholder='цена от' className='category__input2' type="number"/>
                            <input onChange={(e) => setFilter({...filter, price: {...filter.price, to: +e.target.value}})} placeholder='цена до' className='category__input2' type="number"/>
                        </div>
                    </div>
                    <div>
                        <p className='category__title'>Валюта</p>
                        <div className='category__money'>
                            <label className='category__label'>
                                <input defaultChecked value='' onChange={(e) => setFilter({...filter, cash: ''})} name='cash' type="radio"/>
                                <p>all</p>
                            </label>
                            <label className='category__label'>
                                <input value='kgs' onChange={(e) => setFilter({...filter, cash: e.target.value})} name='cash' type="radio"/>
                                <p>kgs</p>
                            </label>

                            <label className='category__label'>
                                <input onChange={(e) => setFilter({...filter, cash: e.target.value})} value='usd' name='cash' type="radio"/>
                                <p>usd</p>
                            </label>

                        </div>
                    </div>
                    <div className='category__sort'>
                        <p className='category__title'>Сортировать</p>
                        <select onChange={(e) => setSort(e.target.value)} className='category__select2' name="" id="">
                            <option value="">По умолчанию</option>
                            <option value="new">Сначала новые</option>
                            <option value="less">Сначала дешевле</option>
                            <option value="more" >Сначала дороже</option>
                        </select>
                        <button className='category__btn'>Показать</button>
                    </div>
                </div>
            </div>
            <ProductItem sort={sort}/>
        </div>
    );
};

export default Category;