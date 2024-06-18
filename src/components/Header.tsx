import React from "react";
import { BurgerProps } from "./Menu";

const Header: React.FC<BurgerProps> = ({ Burger, setBurger, burger_svg }) => {
  return (
    <>
      <header className="flex justify-between items-center relative">
        <h1 className="font-normal text-[28px] tracking-[-1.05px] leading-normal">
          the planets
        </h1>
        <img
          src={burger_svg}
          alt="Hamburger Icon"
          className={`${Burger ? "filter-custom-filter " : ""} cursor-pointer`}
          onClick={() => setBurger(!Burger)}
        />
      </header>
      <hr className="h-[1px] w-full opacity-10 mt-[20px] absolute top-[61px] right-0 left-0" />
    </>
  );
};

export default Header;
