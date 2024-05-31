import React from 'react';


//Este componente será un campo de entrada reutilizable para el formulario.

const InputField = ({ label, type, value, onChange }) => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;