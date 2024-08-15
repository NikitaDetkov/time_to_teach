import React, { useState } from "react";
import './_UserInput.scss';

type Props = {
    placeholder?: string | undefined | null;
    value: string;
    onChange: Function,
};

const UserInput = ({ value, placeholder, onChange }: Props) => {
    return (
        <div className="UserInput">
            <input 
                value={value}
                placeholder={placeholder || ''} 
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    );
};

export default UserInput;