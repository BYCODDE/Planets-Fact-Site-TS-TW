import Header from "../components/Header";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { BurgerProps } from "../components/Menu";
import bgPattern from "../assets/background-stars.svg";

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
          <p className="font-spartan  text-[11px] leading-[22px]  normal-case font-normal opacity-70 mt-[16px]  mb-[32px]">
            {currentPlanet?.overview.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Singleplanet;
