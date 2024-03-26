"use client";

import { cn } from "@/utils/cn";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-md border border-green-500  text-slate-100  hover:shadow-[4px_4px_0px_0px_rgba(34,177,94)] transition duration-200 text-base flex flex-row items-center",
        className
      )}
    >
      {icon} {label}
    </button>
  );
};
export default Button;
