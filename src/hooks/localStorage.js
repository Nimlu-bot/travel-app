import { useEffect, useState } from 'react';

export const useLocalStorage = (name, initialValue) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(name)) || initialValue);

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};
