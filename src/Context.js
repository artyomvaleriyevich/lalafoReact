import {createContext, useEffect, useState} from "react";
import axios from "./axios";

export const CustomContext = createContext()

export const Context = (props) => {
    const [user, setUser] = useState({})
    const [product, setProduct] = useState([])
    const [filter, setFilter] = useState({
        city: '',
        category: '',
        cash: '',
        year: '',
        volume: '',
        body: '',
        price: {from: 0, to: 1000000},
        type: '',
        chose: '',
        title: ''
    })


    useEffect(() => {
        getAllProduct(filter)
    }, [filter])

    const getAllProduct = (filter) => {
        if (JSON.parse(localStorage.getItem('user' )) === null)  {
            axios.get(`/product?${filter?.city?.length ? `city=${filter.city}` : '' }${filter?.cash?.length ? `&cash=${filter.cash}` : ''}${filter?.category.length ? `&category=${filter?.category}`: ''}`)
                .then(({data}) => {
                    setProduct(data)
                })
        } else {
            axios.get(`/product?creator.id_ne=${JSON.parse(localStorage.getItem('user')).id}&${filter?.city?.length ? `city=${filter.city}` : '' }${filter?.cash?.length ? `&cash=${filter.cash}` : ''}${filter?.category.length ? `&category=${filter?.category}`: ''}`)
                .then(({data}) => {
                    setProduct(data)
                })
        }

    }
    const getProductsById = (id) => {
        axios(`/product?creator.id=${id}`)
            .then(({data}) => {
                setProduct(data)
            })
    }

    const getUserFromLS = () => {
        if (JSON.parse(localStorage.getItem('user' ))!== null)  {
            setUser(JSON.parse(localStorage.getItem('user' )))
        }
    }

    const value = {
        user,
        setUser,
        getAllProduct,
        product,
        getUserFromLS,
        getProductsById,
        filter,
        setFilter
    }
    return <CustomContext.Provider value={value}>
        {
            props.children
        }
    </CustomContext.Provider>
}

