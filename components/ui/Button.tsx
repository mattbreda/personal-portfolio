"use client";
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md border border-green-500  text-slate-100  hover:shadow-[4px_4px_0px_0px_rgba(34,177,94)] transition duration-200"
    >
      {label}
    </button>
  );
};
export default Button;
