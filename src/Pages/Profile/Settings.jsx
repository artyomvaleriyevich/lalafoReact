import React, {useContext} from 'react';
import {IoTrashOutline} from "react-icons/io5";
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import axios from "../../axios";
import {useNavigate} from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate()
    const {user,setUser, product} = useContext(CustomContext)

    const {
        handleSubmit,
        reset,
        register
    } = useForm()

    const updateUser = (data) => {
        axios.patch(`/users/${user.id}`, {
            name: data.name.length ? data.name : user.name,
            phone: data.phone.length ? data.phone : user.phone,
            aboutMe: data.aboutMe.length ? data.aboutMe : user.aboutMe,
            avatar: data.avatar.length ? data.avatar : user.avatar

        }).then((res) => {
            axios(`/product?creator.id=${res.data.id}`)
                .then((json) => {
                    if (!json.data.length) {
                        setUser(res.data)
                        localStorage.setItem('user', JSON.stringify(res.data))
                    }
                    json.data.forEach(item => {
                        axios.patch(`/product/${item.id}`, {
                            creator: res.data
                        })
                            .then(() => {
                                setUser(res.data)
                                localStorage.setItem('user', JSON.stringify(res.data))
                            })
                     })


                })


        })

    }
    return (
        <div>
            <h2 className='profile__title'>Фото профиля</h2>
            <form onSubmit={handleSubmit(updateUser)} action="">
                <div className='profile__content'>
                    <div className='profile__user'>
                        <img className='profile__img' src={user.avatar ? user.avatar : 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} alt=""/>
                        <input {...register('avatar')} className='profile__input' defaultValue={user.avatar}  type="text" placeholder='Ссылка на картинку'/>
                        <p className='profile__icon'><IoTrashOutline/></p>
                    </div>
                    <div className='profile__cash'>
                        <div className='profile__cash__content'>
                            <p className='profile__money'>Баланс кошелька:</p>
                            <p className='profile__money'>1000 Р</p>
                        </div>
                        <button onClick={() => navigate('/profile/wallet')} className='profile__btn'>Пополнить</button>
                    </div>
                </div>
                <p className='profile__info'>Максимальный размер фото 5 МБ</p>
                <h3 className='profile__title'>Личная информация</h3>
                <p className='profile__title'>Мое имя*</p>

                <input {...register('name')} defaultValue={user.name} className='profile__input' placeholder='Введите имя' type="text"/>
                <p className='profile__title'>Email</p>
                <input readOnly defaultValue={user.email} className='profile__input' placeholder='Введите email' type="text"/>
                <p className='profile__title'>Обо мне</p>
                <input {...register('aboutMe')} className='profile__input2' defaultValue={user.aboutMe} placeholder='Расскажите что-нибудь о себе' type="text"/>
                <p className='profile__title'>Введите номер телефона</p>
                <input {...register('phone')} defaultValue={user.phone} className='profile__input' placeholder='Введите номер телефона' type="tel"/>
                <button className='profile__btn2'>Сохранить</button>
            </form>
            <h3 className='profile__title'>Изменение пароля</h3>
            <p className='profile__title'>Текущий пароль</p>
            <input className='profile__input' placeholder='Текущий пароль' type="password"/>
            <p className='profile__title'>Новый пароль</p>
            <input className='profile__input' placeholder='Пароль' type="password"/>
            <p className='profile__title'>Подтвердите пароль</p>
            <input className='profile__input' placeholder='Пароль' type="password"/>
            <button className='profile__btn2'>Сохранить</button>
            <h3 className='profile__title'>Удалить профиль</h3>
            <p className='profile__remove'><span className='profile__remove-icon'><IoTrashOutline/></span> Удалить профиль</p>
        </div>
    );
};

export default Settings;