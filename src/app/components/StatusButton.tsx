import React from "react"
import Button from '@mui/material/Button'

type ButtonProps = {
    // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
};

export const StatusButton: React.FC<ButtonProps> = ({
//   onClick,
  children,
  disabled = false,
  className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
}) => {
  return (
    <Button
      type="button"
      //   onClick={onClick}
      disabled={disabled}
      className={className}
      variant="contained"
      sx = {{bgcolor: (children==="Active")? "#109CF1" : (children == "Inactive") ? "#AEBBE0" : "#ed9a7b"}}
      fullWidth
    >
      {children}
    </Button>
  )
}