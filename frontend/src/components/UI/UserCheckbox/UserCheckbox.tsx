import React, { useState } from "react";
import './_UserCheckbox.scss';

type Props = {
    value: boolean;
    setValue: Function;
};

const UserCheckbox = ({ value, setValue }: Props) => {
    return (
        <div className="UserCheckbox">
            <input 
                type="checkbox" 
                checked={value} 
                onChange={(e) => setValue(e.target.checked)}
            />
            <label></label>
        </div>
    );
};

export default UserCheckbox;