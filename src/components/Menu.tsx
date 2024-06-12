import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className=" flex flex-col p-[24px]">
      <header className="flex justify-between items-center	">
        <h1 className="font-normal text-[28px] tracking-[-1.05px] leading-normal">
          the planets
        </h1>
        <img src="src\assets\icon-hamburger.svg" alt="" />
      </header>
      <nav className="navigation-menu font-spartan  font-bold leading-[25px] tracking-[1.364px] mt-[44px] text-[19px]">
        <ul className="flex flex-col gap-[20px]">
          <li className="flex items-center justify-between  	">
            <div className="flex gap-[25px]">
              <div className="bg-[#DEF4FC] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link className="" to="/planet/mercury">
                Mercury
              </Link>
            </div>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#F7CC7F] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link className="" to="/planet/venus">
                Venus
              </Link>
            </div>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />

          <li className="flex items-center justify-between">
            <div className="flex gap-[25px]">
              <div className="bg-[#545BFE] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link className="" to="/planet/earth">
                Earth
              </Link>
            </div>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />

          <li className="flex items-center  justify-between ">
            <div className="flex gap-[25px]">
              <div className="bg-[#FF6A45] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link className="" to="/planet/mars">
                Mars
              </Link>
            </div>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />

          <li className="flex items-center  justify-between ">
            <div className="flex gap-[25px]">
              <div className="bg-[#ECAD7A] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link className="" to="/planet/jupiter">
                Jupiter
              </Link>
            </div>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />

          <li className="flex items-center  justify-between ">
            <div className="flex gap-[25px]">
              <div className="bg-[#FCCB6B] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link className="" to="/planet/saturn">
                Saturn
              </Link>
            </div>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />

          <li className="flex items-center  justify-between ">
            <div className="flex gap-[25px]">
              <div className="bg-[#65F0D5] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link className="" to="/planet/uranus">
                Uranus
              </Link>
            </div>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
          <hr className="h-[1px] w-full opacity-10" />

          <li className="flex items-center  justify-between ">
            <div className="flex gap-[25px]">
              <div className="bg-[#497EFA] w-[20px] h-[20px] rounded-[50%]"></div>
              <Link className="" to="/planet/neptune">
                Neptune
              </Link>
            </div>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
