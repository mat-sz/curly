import React, { useCallback } from 'react';

const Input: React.FC<{
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    placeholder?: string,
}> = ({ value, setValue, placeholder }) => {
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, [ setValue ]);
    
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;