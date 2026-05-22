import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid" | "icon";
  children: React.ReactNode;
}

export default function Button({
  variant = "outline",
  children,
  className = "",
  ...props
}: ButtonProps) {
  let baseStyles = "duration-200 font-medium transition-colors flex items-center justify-center gap-x-2 w-fit ";

  if (variant === "outline") {
    baseStyles += "border border-primary hover:bg-primary hover:text-black px-7 py-2 rounded-3xl ";
  } else if (variant === "solid") {
    baseStyles += "bg-primary text-black p-4 cursor-pointer ";
  } else if (variant === "icon") {
    baseStyles += "border border-primary group-hover:bg-primary group-hover:text-black p-2 rounded-full ";
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
