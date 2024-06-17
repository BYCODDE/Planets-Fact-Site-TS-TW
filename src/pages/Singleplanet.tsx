import Header from "../components/Header";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { BurgerProps } from "../components/Menu";
import bgPattern from "/assets/background-stars.svg";

const Singleplanet: React.FC<BurgerProps> = ({
  Burger,
  setBurger,
  burger_svg,
}) => {
  const { name } = useParams();
  const currentPlanet = data.find(
    (planet) => planet.name.toLowerCase() === name?.toLowerCase()
  );

  const planetImagePath = currentPlanet?.images.planet;
  const wikipediaLink = currentPlanet?.geology.source;
  console.log(currentPlanet);

  return (
    <>
      <div
        className="flex flex-col p-[24px] h-full   bg-cover"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Header Burger={Burger} setBurger={setBurger} burger_svg={burger_svg} />
        <div className="flex  font-bold text-[9px]  tracking-[1.929px] font-spartan mt-[40px] justify-between">
          <h3 className="cursor-pointer">OVERVIEW</h3>
          <h3 className="cursor-pointer">Structure</h3>
          <h3 className="cursor-pointer">Surface</h3>
        </div>
        <hr className="h-[1px] w-full opacity-10 mt-[20px] absolute top-[121px] right-0 left-0  " />
        <div className="flex justify-center mt-[95px] mb-[98px]">
          <img
            src={planetImagePath}
            className="w-[111px] h-[111px] "
            alt="planet_img"
          />
        </div>
        <div className="text-[#FFFFFF] text-center">
          <h2 className=" text-[40px]">{currentPlanet?.name}</h2>
          <p className="font-spartan  text-[11px] leading-[22px]  normal-case font-normal opacity-80 mt-[16px]  mb-[32px]">
            {currentPlanet?.overview.content}
          </p>
        </div>

        <div className="flex justify-center items-center">
          <a
            className="normal-case text-[#FFFFFF] opacity-50 text-[12px] font-spartan font-[300] leading-[25px]   tracking-[1.5px] mb-[28px] "
            href={wikipediaLink}
          >
            Source : <span className="underline font-bold">Wikipedia</span>
            <img
              src="/assets/icon-source.svg"
              alt="icon-source"
              className="inline-block ml-[5px] font-bold"
            />
          </a>
        </div>
        <div className="flex justify-center flex-col gap-[10px] pb-[30px] text-[#FFFFFF] font-[500]">
          <div className="border border-solid border-white border-opacity-20 p-[16px] flex justify-between items-center">
            <h3 className=" tracking-[1.5px] opacity-50 font-spartan leading-[16px]  text-[13px] text-[#FFF]">
              ROTATION TIME
            </h3>
            <p className="text-[25px] font-normal tracking-[-0.75px]  leading-normal">
              {currentPlanet?.rotation}
            </p>
          </div>
          <div className="border border-solid border-white border-opacity-20  p-[20px]  flex justify-between items-center">
            <h3 className=" tracking-[1.5px] opacity-50 font-spartan leading-[16px]  text-[13px] text-[#FFF]">
              REVOLUTION TIME
            </h3>
            <p className="text-[25px] font-normal tracking-[-0.75px]  leading-normal">
              {currentPlanet?.revolution}
            </p>
          </div>
          <div className="border border-solid border-white border-opacity-20  p-[16px]  flex justify-between items-center">
            <h3 className=" tracking-[1.5px] opacity-50 font-spartan leading-[16px]  text-[13px] text-[#FFF]">
              radius
            </h3>
            <p className="text-[25px] font-normal tracking-[-0.75px]  leading-normal">
              {currentPlanet?.radius}
            </p>
          </div>
          <div className="border border-solid border-white border-opacity-20  p-[16px]  flex justify-between items-center">
            <h3 className=" tracking-[1.5px] opacity-50 font-spartan leading-[16px]  text-[13px] text-[#FFF]">
              AVERAGE TEMP.
            </h3>
            <p className="text-[25px] font-normal tracking-[-0.75px]  leading-normal">
              {currentPlanet?.temperature}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleplanet;
