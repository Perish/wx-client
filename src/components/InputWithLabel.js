import React from 'react';

const InputWithLabel = ({type, name, labelName, error, placeholder, helpmsg, onChange}) => {
  return (
    <div className="form-group">
      {labelName && <label htmlFor={name}>{labelName}</label>}
      <input 
        type={type} 
        name={name}
        onChange={onChange}
        className={["form-control", error ? "is-invalid" : null].join(' ')}
        id={name}
        placeholder={placeholder}
        style={{...styles.input}}
      />
      <div className="invalid-feedback" style={{paddingLeft: "15px"}}>
        {error}
      </div>
      { helpmsg && <small id="emailHelp" className="form-text text-muted">{helpmsg}</small>}
    </div>
  )
}

const styles = {};

styles.input = {
  borderRadius: "3rem",
  border: "1px solid rgba(206,216,218, 0.4)",
  height: "50px",
}


export default InputWithLabel;