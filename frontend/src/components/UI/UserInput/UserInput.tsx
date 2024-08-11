import React, { useState } from "react";
import './_UserInput.scss';

type Props = {
    placeholder: string | undefined | null;
    value: string;
    setValue: Function
};

const UserInput = ({ placeholder, value, setValue }: Props) => {
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