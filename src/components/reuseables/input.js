import React from 'react';
const CustomInput = ({
                         field,
                         label,
                         type,
                         placeHolder,
                         id,
                         icon,
                         inputBodyClassName,
                         labelStyle,
                         inputStyle,
                         hasIcon = false,
                         togglePassword,

                         form: { touched, errors },
                     }) => {
    return (
        <div className={inputBodyClassName}>
            <label htmlFor={id} className={labelStyle}>
                <p>{label}</p>
                <div className="input-icon" >
                    <input
                        className={inputStyle}
                        type={type}
                        {...field}
                        placeholder={placeHolder}
                    />

                    {hasIcon && <img src={icon} alt="icon" width={10} onClick={togglePassword} style={{
                        backgroundColor: "grey",
                        padding: ".3rem",


                    }} />}

                </div>

                {touched[field.name] && errors[field.name] && (
                    <p style={{color: "red"}}>{errors[field.name]}</p>
                )}
            </label>
        </div>
    );
};

export default CustomInput;
