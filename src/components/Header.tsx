import React from "react";
import { BurgerProps } from "./Menu";
import { useMediaQuery } from "@uidotdev/usehooks";

const Header: React.FC<BurgerProps> = ({ Burger, setBurger, burger_svg }) => {
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px)"
  );
    console.log(isMediumDevice);

  return (
    <>
      <header
        className={`flex  items-center ${
          isMediumDevice ? "justify-center" : "justify-between"
        }`}
      >
        <h1 className="font-normal text-[28px] tracking-[-1.05px] leading-normal">
          the planets
        </h1>
        <img
          src={burger_svg}
          alt="Hamburger Icon"
          className={`${Burger ? "" : "filter-custom-filter "}${
            isMediumDevice ? "hidden" : ""
          } cursor-pointer`}
          onClick={() => setBurger(!Burger)}
        />
      </header>
      <hr
        className={`${
          isMediumDevice ? "hidden" : ""
        } h-[1px] w-full opacity-10 mt-[20px] absolute top-[61px] right-0 left-0`}
      />
    </>
  );
};

export default Header;
