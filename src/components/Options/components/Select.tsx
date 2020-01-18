import React, { useCallback } from 'react';

const Select: React.FC<{
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    options: string[],
    placeholder?: string,
}> = ({ value, setValue, options, placeholder }) => {
    const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    }, [ setValue ]);
    
    return (
        <select
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        >
            { options.map((option) => <option value={option} key={option}>{ option }</option>)}
        </select>
    );
}

export default Select;