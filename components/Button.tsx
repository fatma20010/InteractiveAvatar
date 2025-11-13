import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  onClick, 
  variant = "primary", 
  ...props 
}) => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-secondary text-white hover:bg-secondary-light",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={`${variantClasses[variant]} text-sm px-6 py-2 rounded-lg disabled:opacity-50 h-fit transition-colors duration-200 ${className || ""}`}
      onClick={props.disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </button>
  );
};
