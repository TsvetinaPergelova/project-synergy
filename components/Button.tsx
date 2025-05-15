import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`btn w-full bg-blue-500 text-white py-3 px-4 rounded-xl font-bold uppercase mt-6 hover:bg-blue-600 transition-all duration-300 ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
