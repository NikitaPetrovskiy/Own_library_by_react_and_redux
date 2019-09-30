import React from 'react';

export const NumericInput = ({name, value, onChange}) => {
  return (
      <input
          type="number"
          name={name}
          value={value}
          onChange={e => { onChange(e.target.value)}}
      />
  )
};