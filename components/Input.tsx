import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  wrapperClassName?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  register,
  error,
  placeholder,
  className,
  wrapperClassName,
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
      <input
        type={type}
        id={id}
        {...register}
        className={`h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid ${error ? "border-red-500" : ""} ${className || ""}`}
        placeholder={placeholder}
        {...rest}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 mb-3">{error.message}</p>
      )}
    </div>
  );
};

export default Input;
