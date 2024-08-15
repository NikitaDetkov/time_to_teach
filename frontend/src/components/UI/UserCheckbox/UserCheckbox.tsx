import React, { useState } from "react";
import './_UserCheckbox.scss';

type Props = {
    value: boolean;
    onChange: Function;
};

const UserCheckbox = ({ value, onChange }: Props) => {
    return (
        <div className="UserCheckbox">
            <input 
                type="checkbox" 
                checked={value} 
                onChange={(e) => onChange(e.target.checked)}
            />
            <label></label>
        </div>
    );
};

export default UserCheckbox;