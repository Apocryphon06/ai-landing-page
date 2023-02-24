import React from "react";

interface Props {
  label?: any;
  onClick?: any;
  width?: any;
}

export const Button: React.FC<Props> = ({ label, width, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={`${
        width ? width : "w-[172px] h-[62px] rounded-tl-lg rounded-br-lg"
      } bg-retroPink text-white font-poppinsBold`}
    >
      {label}
    </button>
  );
};

export default Button;
