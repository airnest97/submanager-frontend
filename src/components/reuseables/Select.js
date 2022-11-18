import React from 'react'
import Select from 'react-select'




const SelectComoponent = ({ field,
    options, customStyles, selectedOption, setSelectedOption,
      

    form: { touched, errors },}) => {
  return (
    <Select
    defaultValue={selectedOption}
    options={options}
    className={customStyles}
    onChange={setSelectedOption}
    name={field.name}
    value={options ? options.find(option => option.value === field.value) : ''}

    {...touched[field.name] && errors[field.name] && (
        <p style={{color: "red"}}>{errors[field.name]}</p>
    )}
  />

  )
}

export default SelectComoponent