import React from 'react';

export const TextInput = ({name, value, onChange}) => {
  return (
      <input
          type="text"
          name={name}
          value={value}
          onChange={e => onChange(e.target.value)}
      />
  )
};