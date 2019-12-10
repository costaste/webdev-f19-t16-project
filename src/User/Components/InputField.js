import React from 'react';

const InputField = ({id, currInput, label, onChange, password = false}) => {
    return (
        <div className='form-group row t16-left-align'>
            <label className='col-sm-2 col-form-label' htmlFor={id}>
                {label}
            </label>
            <input id={id}
                className='col-sm-9 form-control'
                type={password ? 'password' : 'text'}
                placeholder={label}
                value={currInput}
                onChange={onChange}
            />
        </div>
    )
};

export default InputField;
