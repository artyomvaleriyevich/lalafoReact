import React, {useState, useContext} from 'react';
import {CustomContext} from "../../Context";
import {category} from "../../category";
import Select from "./Select";
import {useForm} from "react-hook-form";
import axios from "../../axios";
import {useNavigate} from 'react-router-dom'


const AddPost = () => {
    const [categoryActive, setCategoryActive] = useState(false)
    const [select, setSelect] = useState('')
    const [chose, setChose] = useState('')
    const [chose2, setChose2] = useState('')
    const { user, setUser } = useContext(CustomContext)
    const {
        handleSubmit,
        register,
        reset
    } = useForm()

    const navigate = useNavigate()

    const addPostHandler = (data) => {
       axios.post('/product', {
           ...data,
           creator: user,
           category: select,
           type: chose,
           comment: [],
           chose: chose2
       }).then((res) => {
           reset()
           setChose2('')
           setChose('')
           setSelect('')
           setCategoryActive(false)
           navigate('/')

       }).catch((err) => alert(err))


    }

    return (
        <div className='post'>
            <div className="container">
                <form onSubmit={handleSubmit(addPostHandler)} className='post__form' action="">
                    <h2 className='post__title'>Разместить БЕСПЛАТНОЕ объявление просто!</h2>
                    <h3 className='post__text'>Загрузите фото
                        (до 30 фото)</h3>
                    <input {...register('image')} placeholder='Добавьте фото' className='post__input' type="text"/>
                    <p className='post__descr'>Описание</p>
                    <textarea {...register('description')} placeholder='Добавьте описание' className='post__textarea' cols="30" rows="10"/>
                    <div className='post__category'>
                        <p className='post__category-title'>Категория*</p>
                        <button className='post__category-btn' type={"button"} onClick={() => {
                            setCategoryActive(true)
                            setSelect('')
                            setChose('')
                            setChose2('')
                        }}>Выбрать
                        </button>

                        <ul className='post__category-list' style={{display: categoryActive ? 'block' : 'none'}}>
                            {
                                category.filter(item => item.category.includes(select)).map(item => (
                                    <li className='post__category-item'>
                                        <span onClick={() => setSelect(item.category)}>{item.category}</span>
                                        <ul style={{display: select ? 'block' : "none"}}>
                                            {
                                                item.list.filter(el => el.category.includes(chose)).map(el => (
                                                    <li className='post__category-item' onClick={() => setChose(el.category)}>{el.category}
                                                        {
                                                            el.list &&
                                                            <ul className='post__category-list' style={{display: chose.length ? 'block' : 'none'}}>
                                                                {
                                                                    el.list.filter(list => list.name.includes(chose2)).map(list => (
                                                                        <li className='post__category-item' onClick={() => setChose2(list.name)}>{list.name}</li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        }

                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <Select register={register} formKey={'city'}  title='Город' list={['Бишкек', 'Ош', 'Кант']}/>
                    <div>
                        <h2 className='post__price'>Цена</h2>
                        <div>
                            <input {...register('price')} placeholder='Введите цену' className='post__input' type="number"/>
                            <div>
                                <label className='post__label' htmlFor="kgs">
                                    <input {...register('cash')} checked value='kgs' id='kgs' type="radio"/>
                                    <span className='post__cash'>KGS</span>
                                </label>
                                <label className='post__label' htmlFor="usd">
                                    <input {...register('cash')} value='usd' id='usd' type="radio"/>
                                    <span className='post__cash'>USD</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {
                        select === 'Транспорт' && <div className='dynamic__block-car'>
                            <Select register={register} formKey={'model'} title='Модель'
                                    list={chose2.length ? category.filter(item => item.category.includes(select))[0].list.filter(el => el.category.includes(chose))[0].list.filter(item => item.name.includes(chose2))[0].models : []}/>
                            <Select register={register} formKey={'year'}  title='Год' list={[1999, 2000, 2015]}/>
                            <Select register={register} formKey={'volume'} title='Объем двигателя' list={[1.8, 2.5, 4.4, 5.5]}/>
                            <Select register={register} formKey={'body'} title='Кузов' list={['Бус', 'Седан']}/>
                        </div>
                    }
                    {
                        select === 'Животные' && <div className='dynamic__block-animals'>
                            <Select register={register} formKey={'delivery'} title={'Доставка'} list={['Бесплатная доставка', 'Платная доставка']}/>
                        </div>
                    }
                    <button className='post__category-btn' type='submit'>Опубликовать</button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;