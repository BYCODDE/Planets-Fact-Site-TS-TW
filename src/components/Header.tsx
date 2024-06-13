
// import { BurgerProps } from "../App";

const Header: React.FC<any> = ({ Burger }) => {
  return (
    <header className="flex justify-between items-center relative">
      <h1 className="font-normal text-[28px] tracking-[-1.05px] leading-normal">
        the planets
      </h1>
      <img
        src="src/assets/icon-hamburger.svg"
        alt="Hamburger Icon"
        className={Burger ? "filter-custom-filter" : ""}
      />
    </header>
  );
};

export default Header;
