import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  className = "",
  disabled = false,
  children,
  ...props
}) => {
  const baseStyles =
    "px-8 py-2 rounded-full shadow-md transition-colors duration-300 flex items-center justify-center";

  const primaryStyles = disabled
    ? "bg-opacity-60 bg-[var(--gray-pink)]/60 cursor-not-allowed text-[var(--text-color-white)]"
    : "bg-[var(--less-dark-pink)] hover:bg-[var(--dark-pink)] text-white";

  const secondaryStyles = disabled
    ? "bg-opacity-60 bg-[var(--background-lighter)] cursor-not-allowed text-[var(--text-color)]/60"
    : "bg-[var(--background-lighter)] hover:bg-[var(--slider-background)] text-[var(--text-color)]";

  return (
    <button
      className={`${baseStyles} ${primary ? primaryStyles : secondaryStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
