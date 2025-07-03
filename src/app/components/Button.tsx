import React from "react";

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'primary',
    disabled = false,
    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
}) => {
    return (
        <button
            type = "button"
            onClick = {onClick}
            disabled = {disabled}
            className = {className}
        >
            {children}
        </button>
    )
}