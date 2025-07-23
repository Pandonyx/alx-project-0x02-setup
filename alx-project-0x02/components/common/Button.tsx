import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-5 py-2 text-base",
  large: "px-7 py-3 text-lg",
};

const shapeClasses: Record<NonNullable<ButtonProps["shape"]>, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  className = "",
  ...rest
}) => (
  <button
    className={`bg-amber-500 text-black hover:bg-amber-600 transition ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
