import { useState } from "react";

export const useSwitch = (initialState = false) => {
    const [isSelected, setIsSelected] = useState(initialState);

    const handleSwitch = () => {
        setIsSelected((prevState) => !prevState);
    };

    return { isSelected, handleSwitch };
};
