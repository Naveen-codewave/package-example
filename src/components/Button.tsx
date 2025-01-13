import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "outlined";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "primary",
  onClick,
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-5 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    outlined: "border border-gray-500 text-gray-500",
  };

  return (
    <button
      className={`rounded ${sizeClasses[size]} ${variantClasses[variant]} hover:opacity-80`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
