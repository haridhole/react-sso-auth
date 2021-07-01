import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        <option value="" />
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.fisrtName}
            {option.lastName}
          </option>
        ))}
      </select>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Select;
