import React, {useState, useContext} from 'react';
import axios from "../../axios";
import { useForm } from 'react-hook-form';
import {CustomContext} from "../../Context";


const Popup = ({popup, setPopup, }) => {

    const {setUser} = useContext(CustomContext)
    const [status, setStatus] = useState('signIn')

    const {
        register,
        reset,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm()

    const popupCloseFunc = (e) => {
        if (e.target.classList.contains('overlay')) {
            setPopup(false)
        }
    }

    const signInHandler = (data) => {
        axios.post('/login', data).then((res) => {
            setPopup(false)
            setUser(res.data.user)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            reset()
        })

    }

    const signUpHandler = (data) => {

        axios.post('/users', {
           ...data,
            balance: 1000,
            avatar: '',
            products: [],
            aboutMe: ''
        }).then((res) => {
            setUser(res.data.user)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            setPopup(false)
           reset()
        }).catch(err => alert(err))
    }

    return (
        <div onClick={(e) => popupCloseFunc(e)} className={`overlay ${popup && 'overlay_active'}`}>
            <div className='popup'>
                <form onSubmit={status === 'signIn' ? handleSubmit( signInHandler) : handleSubmit(signUpHandler)} className='popup__form'>
                    <div className='popup__form-top'>
                        <h2 onClick={() => setStatus('signIn')} className={`popup__title ${status === 'signIn' && 'popup__title_active'}`}>Войти</h2>
                        <h2 onClick={() => setStatus("signUp")} className={`popup__title ${status === 'signUp' && 'popup__title_active'}`}>Регистрация</h2>
                    </div>
                    <input {...register('email')} placeholder='Введите Email' className='popup__input' type="email"/>
                    {
                        status === 'signUp' && <>
                            <input {...register('name')} placeholder='Введите Имя' className='popup__input' type="text"/>
                            <input {...register('phone')} placeholder='Введите номер телефона' className='popup__input' type="tel"/>
                        </>
                    }
                    <input {...register('password', {
                        pattern: {
                            value : /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                            message : 'Пароль должен содержать в себе минимум 8 символов, заглавную букву, число!'
                        }
                    })} placeholder='Введите пароль' className='popup__input' type="password"/>
                    <p style={{color: 'red', marginBottom: '20px', textAlign: 'center'}}>{errors?.password?.message}</p>
                    <button className='popup__btn' type='submit'>{status === 'signIn' ? 'Войти' : 'Регистрация'}</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;