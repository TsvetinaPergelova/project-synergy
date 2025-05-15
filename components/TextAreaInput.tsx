
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import React from "react";

interface TextareaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  wrapperClassName?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  id,
  label,
  register,
  error,
  placeholder,
  className,
  wrapperClassName,
  rows = 3, // Default number of rows
  ...rest
}) => {
  return (
    <div className={`mb-4 ${wrapperClassName || ""}`}>
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        {...register}
        rows={rows}
        className={`w-full rounded-lg border-gray-300 p-2 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid ${error ? "border-red-500" : ""} ${className || ""}`}
        placeholder={placeholder}
        {...rest}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 mb-3">{error.message}</p>
      )}
    </div>
  );
};

export default TextareaInput;