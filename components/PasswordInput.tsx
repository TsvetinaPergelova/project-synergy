import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import React from "react";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  wrapperClassName?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  register,
  error,
  placeholder,
  className,
  wrapperClassName,
  ...rest
}) => {
  return (
    <div className={`mb-1 ${wrapperClassName || ""}`}>
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type="password"
        id={id}
        {...register}
        className={`h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid ${
          error ? "border-red-500" : ""
        } ${className || ""}`}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mb-3">{error.message}</p>}
    </div>
  );
};

export default PasswordInput;
