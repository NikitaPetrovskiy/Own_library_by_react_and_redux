import React from 'react';

export const SelectInput = ({name, value, onChange, description}) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} >
            {description.options.map(option => (
                <option key={option[0]} value={option[0]}>
                    {option[1]}
                </option>
            ))}
        </select>
    )
};