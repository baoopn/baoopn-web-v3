import React, { ButtonHTMLAttributes } from "react";
import Button from "./Button";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  primary?: boolean;
  className?: string;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  primary = false,
  className = "",
  children,
  ...rest
}) => {
  return (
    <Button onClick={onClick} primary={primary} className={className} {...rest}>
      {children}
    </Button>
  );
};

export default ActionButton;
