import React, { TextareaHTMLAttributes } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
  touched?: boolean;
  onTextareaBlur?: () => void;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  id,
  error,
  touched,
  className = "",
  onTextareaBlur,
  ...props
}) => {
  const showError = touched && error;
  
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        className={`mt-0.5 block w-full px-3 py-2 border ${
          showError
            ? "border-red-500 focus:ring-red-500"
            : "focus:ring-[var(--text-color-lighter)]"
        } rounded-md shadow-sm focus:outline-none focus:ring-3 focus:border-transparent placeholder:text-sm resize-none ${className}`}
        onBlur={onTextareaBlur}
        {...props}
      />
      {showError && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormTextarea;