import { Link } from "react-router-dom";
import Header from "./Header";


export type BurgerProps = {
  Burger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;

  burger_svg: string;
};

const Menu: React.FC<BurgerProps> = ({ Burger, setBurger, burger_svg }) => {
  console.log(Burger);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#070724] flex justify-center  p-[24px] flex-col ${
        Burger ? "block" : "hidden"
      }`}
    >
      <Header Burger={Burger} setBurger={setBurger} burger_svg={burger_svg} />
      <nav
        className={` font-spartan font-bold leading-[25px] tracking-[1.364px] mt-[44px] text-[19px] w-full h-full`}
      >
        <ul className="flex flex-col gap-[20px]">
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#DEF4FC] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link
                onClick={() => setBurger(!Burger)}
                to="/planet/mercury/overview"
              >
                Mercury
              </Link>
            </div>
            <img src="/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#F7CC7F] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link
                onClick={() => setBurger(!Burger)}
                to="/planet/venus/overview"
              >
                Venus
              </Link>
            </div>
            <img src="/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#545BFE] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link
                onClick={() => setBurger(!Burger)}
                to="/planet/earth/overview"
              >
                Earth
              </Link>
            </div>
            <img src="/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#FF6A45] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link
                onClick={() => setBurger(!Burger)}
                to="/planet/mars/overview"
              >
                Mars
              </Link>
            </div>
            <img src="/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#ECAD7A] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link
                onClick={() => setBurger(!Burger)}
                to="/planet/jupiter/overview"
              >
                Jupiter
              </Link>
            </div>
            <img src="/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#FCCB6B] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link
                onClick={() => setBurger(!Burger)}
                to="/planet/saturn/overview"
              >
                Saturn
              </Link>
            </div>
            <img src="/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#65F0D5] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link
                onClick={() => setBurger(!Burger)}
                to="/planet/uranus/overview"
              >
                Uranus
              </Link>
            </div>
            <img src="/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#497EFA] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link
                onClick={() => setBurger(!Burger)}
                to="/planet/neptune/overview"
              >
                Neptune
              </Link>
            </div>
            <img src="/assets/icon-chevron.svg" alt="icon-chevron" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
