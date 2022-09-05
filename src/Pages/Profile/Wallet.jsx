import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import axios from "../../axios";
import {CustomContext} from "../../Context";

const Wallet = () => {
    const {user,setUser} = useContext(CustomContext)

    const {
        register,
        handleSubmit,
        reset
    } = useForm()


    const cashFunc = (data) => {
        if (data.money !== null) {
            axios.patch(`/users/${user.id}`, {
                balance: +user.balance + +data.money
            }).then((res) => {
                setUser(res.data)
                localStorage.setItem('user', JSON.stringify(res.data))
                reset()
            })
        } else {
            alert('выберите сумму!!!')
        }

    }

    return (
        <div className='profile__wallet'>
           <div className="container">
               <h2 className='profile__wallet-title'>Кошелек</h2>

               <p className='profile__wallet-info'>Кошелек - ваш персональный баланс на lalafo. Пополняйте ваш Кошелек <br/>
                   любым удобным способом и платите за услуги, не выходя из дома!</p>
               <form onSubmit={handleSubmit(cashFunc)} className='profile__wallet-list'>
                   <label className='profile__wallet-label' htmlFor="">
                       <input value={3500} {...register('money')} className='profile__wallet-input' type="radio"/>
                       <span className='profile__wallet-money'>3500 KGS</span>
                   </label>
                   <label className='profile__wallet-label' htmlFor="">
                       <input value={1500} {...register('money')} className='profile__wallet-input' type="radio"/>
                       <span className='profile__wallet-money'>1500 KGS</span>
                   </label>
                   <label className='profile__wallet-label' htmlFor="">
                       <input value={1000} {...register('money')} className='profile__wallet-input' type="radio"/>
                       <span className='profile__wallet-money'>1000 KGS</span>
                   </label>
                   <label className='profile__wallet-label' htmlFor="">
                       <input value={500} {...register('money')} className='profile__wallet-input' type="radio"/>
                       <span className='profile__wallet-money'>500 KGS</span>
                   </label>
                   <label className='profile__wallet-label' htmlFor="">
                       <input value={200} {...register('money')} className='profile__wallet-input' type="radio"/>
                       <span className='profile__wallet-money'>200 KGS</span>
                   </label>
                   <label className='profile__wallet-label' htmlFor="">
                       <input value={100} {...register('money')} className='profile__wallet-input' type="radio"/>
                       <span className='profile__wallet-money'>100 KGS</span>
                   </label>
                   <button style={{margin: '0 auto'}} className='profile__btn2' type={"submit"}>Пополнить баланс</button>



               </form>
           </div>
        </div>
    );
};

export default Wallet;