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
        width ? width : "lg:w-[172px] w-[150px] lg:h-[62px] h-[56px] "
      } bg-retroPink text-white font-poppinsBold lg:text-2xl text-xl rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg hover:shadow-lg`}
    >
      {label}
    </button>
  );
};

export default Button;
