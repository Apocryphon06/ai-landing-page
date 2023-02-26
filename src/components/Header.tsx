import React from "react";
import Button from "./common/Button";
import menu from '../assets/icons/menu.svg'

function Header() {
  return (
    <div className="flex lg:flex-row justify-between items-center lg:py-[38px] py-10 lg:px-[76px] px-5 gap-5">
      <p className="text-white font-poppinsBold lg:text-4xl text-3xl ">
        Team Militech
      </p>

      <div className=" flex-row gap-[38px] hidden lg:flex">
        <Button label="About" />
        <Button label="Products" />
        <Button label="Contact" />
      </div>

      <img src={menu} alt={menu} className="w-[32xp] h-[32px] lg:hidden cursor-pointer"/>


    </div>
  );
}

export default Header;
