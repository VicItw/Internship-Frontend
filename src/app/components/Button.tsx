import React from "react"

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
};

export const MyButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}