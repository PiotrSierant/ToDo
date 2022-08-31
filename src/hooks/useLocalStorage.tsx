import { useState } from "react";

export const useLocalStorage = (key: string, initValue: any) => {
    const [value, setValue] = useState( () => {
        try {
            const localStorageJson = localStorage.getItem(key);
            return localStorageJson ? JSON.parse(localStorageJson) : initValue;
        }
        catch (e) {
            return initValue;
        }
    })

    const updateValue = (value: any) => {
        setValue(value)
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [value, updateValue]
}