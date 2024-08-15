import React, { MouseEventHandler } from "react";
import './_UserButton.scss';

type Props = {
    children: string,
    styleButton?: string,
    onClick: MouseEventHandler
};

export default function UserButton({ onClick, styleButton, children }: Props) {
    return (
        <button 
            className={ 'UserButton ' + (styleButton ?? '')} 
            onClick={onClick}
        >
            { children }
        </button>
    );
}