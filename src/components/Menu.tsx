import { Link } from "react-router-dom";
import Header from "./Header";
type BurgerProps = {
  Burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<BurgerProps> = ({ Burger, setBurger }) => {
  return (
    <div className="flex flex-col p-[24px]">
      <Header />
      <hr className="h-[1px] w-full opacity-10 mt-[20px] absolute top-[61px] right-0 left-0" />
      <nav
        className={`navigation-menu ${
          Burger ? "hidden" : "block"
        } font-spartan font-bold leading-[25px] tracking-[1.364px] mt-[44px] text-[19px]`}
      >
        <ul className="flex flex-col gap-[20px]">
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#DEF4FC] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link onClick={() => setBurger(!Burger)} to="/planet/mercury">
                Mercury
              </Link>
            </div>
            <img src="src/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#F7CC7F] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link onClick={() => setBurger(!Burger)} to="/planet/venus">
                Venus
              </Link>
            </div>
            <img src="src/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#545BFE] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link onClick={() => setBurger(!Burger)} to="/planet/earth">
                Earth
              </Link>
            </div>
            <img src="src/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#FF6A45] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link onClick={() => setBurger(!Burger)} to="/planet/mars">
                Mars
              </Link>
            </div>
            <img src="src/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#ECAD7A] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link onClick={() => setBurger(!Burger)} to="/planet/jupiter">
                Jupiter
              </Link>
            </div>
            <img src="src/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#FCCB6B] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link onClick={() => setBurger(!Burger)} to="/planet/saturn">
                Saturn
              </Link>
            </div>
            <img src="src/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#65F0D5] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link onClick={() => setBurger(!Burger)} to="/planet/uranus">
                Uranus
              </Link>
            </div>
            <img src="src/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#497EFA] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link onClick={() => setBurger(!Burger)} to="/planet/neptune">
                Neptune
              </Link>
            </div>
            <img src="src/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
