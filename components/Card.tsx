import React from "react";

interface CardProps {
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  titleClassName = "text-lg font-semibold text-gray-800 mb-2",
  children,
  className = "",
}) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
    <h3 className={titleClassName}>{title}</h3>
    {children}
  </div>
);

export default Card;
