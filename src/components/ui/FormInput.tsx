import React, { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  touched?: boolean;
  onInputBlur?: () => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  error,
  touched,
  className = "",
  onInputBlur,
  ...props
}) => {
  const showError = touched && error;
  
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        className={`mt-0.5 block w-full px-3 py-2 border ${
          showError
            ? "border-red-500 focus:ring-red-500"
            : "focus:ring-[var(--text-color-lighter)]"
        } rounded-md shadow-sm focus:outline-none focus:ring-3 focus:border-transparent placeholder:text-sm ${className}`}
        onBlur={onInputBlur}
        {...props}
      />
      {showError && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput;