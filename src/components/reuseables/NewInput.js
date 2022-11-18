import React from 'react'

const NewInput = ({text, handleChange, placeHolder, className, icon, label, inputLabel, fieldError}) => {
    return (
        <div>
            <div className="input-container">
                <div className="label-container">
                    <label>{label}</label>
                </div>
                <div className="input-class">
                        <input name={inputLabel} className={className} type={text} onChange={handleChange} placeholder = {placeHolder} />

                </div>
            </div>
            <div className="input-error-container">
                <p className={fieldError[inputLabel].error ? "fieldError" : "noFieldError"}>
                    {fieldError[inputLabel].message}
                </p>
            </div>

        </div>
    );
}

export default NewInput