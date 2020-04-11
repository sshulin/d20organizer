import React from 'react';

const PennedString = ({value, onChange}) => {

  return (
    <div className="penned-string">
      <label className="penned-string__wrapper">
        <input
          type="text"
          className="penned-string__input"
          value={value}
          onChange={onChange}
          />
        <div className="penned-string__text">
          {value}
          <i className="fa fa-pencil"></i>
        </div>
      </label>
    </div>
  )
}

export default PennedString;