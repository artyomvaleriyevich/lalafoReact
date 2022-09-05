import React from 'react';

const Select = ({title, list, formKey, register}) => {


    return (
        <div>
            <h3 className='post__select-title'>{title}</h3>
            <select {...register(`${formKey}`)} className='post__select-select'>
                <option value={''} selected disabled>
                    Выберите
                </option>
                {
                    list.map(item => (
                        <option value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default Select;