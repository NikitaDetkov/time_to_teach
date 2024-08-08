import React, { useEffect, useState } from "react";
import './_UserInput.scss';

type Props = {
    placeholder: string | undefined | null;
    inputValue?: string | undefined | null;
};

const UserInput = ({ placeholder, inputValue }: Props) => {
    const startValue = inputValue ?? '';

    const [value, setValue] = useState(startValue);

    return (
        <div className="UserInput">
            <input 
                value={value} 
                type="text" 
                placeholder={placeholder ?? ''}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default UserInput;