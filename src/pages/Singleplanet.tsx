import Header from "../components/Header";
import data from "../data.json";
import { useParams } from "react-router-dom";
import Menu, { BurgerProps } from "../components/Menu";
import bgPattern from "/assets/background-stars.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

const Singleplanet: React.FC<BurgerProps> = ({
  Burger,
  setBurger,
  burger_svg,
}) => {
  const { name, details } = useParams<{ name: string; details: string }>();
  const currentPlanet = data.find(
    (planet) => planet.name.toLowerCase() === name?.toLowerCase()
  );

  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");

  const getPlanetClass = (planetName: string | undefined) => {
    switch (planetName) {
      case "Venus":
        return isMediumDevice ? "w-[253px] h-[253px]" : "w-[154px] h-[154px]";
      case "Earth":
        return isMediumDevice ? "w-[285px] h-[285px]" : "w-[173px] h-[173px]";
      case "Mars":
        return isMediumDevice ? "w-[213px] h-[213px]" : "w-[129px] h-[129px]";
      case "Jupiter":
        return isMediumDevice ? "w-[369px] h-[369px]" : "w-[224px] h-[224px]";
      case "Saturn":
        return isMediumDevice ? "w-[340px] h-[340px]" : "w-[256px] h-[256px]";
      case "Uranus":
        return isMediumDevice ? "w-[290px] h-[290px]" : "w-[176px] h-[176px]";
      case "Neptune":
        return isMediumDevice ? "w-[285px] h-[285px]" : "w-[173px] h-[173px]";
      default:
        return isMediumDevice ? "w-[184px] h-[184px]" : "w-[111px] h-[111px]";
    }
  };

  const getPlanetStyles = (planetName: string | undefined) => {
    switch (planetName) {
      case "Venus":
        return "border-b-4 border-[#EDA249] pb-[17px]";
      case "Earth":
        return "border-b-4 border-[#6D2ED5] pb-[17px]";
      case "Mars":
        return "border-b-4 border-[#D14C32] pb-[17px]";
      case "Jupiter":
        return "border-b-4 border-[#D83A34] pb-[17px]";
      case "Saturn":
        return "border-b-4 border-[#CD5120] pb-[17px]";
      case "Uranus":
        return "border-b-4 border-[#1EC1A2] pb-[17px]";
      case "Neptune":
        return "border-b-4 border-[#2D68F0] pb-[17px]";
      default:
        return " border-b-4 border-[#419EBB] pb-[17px]";
    }
  };

  const planetClass = getPlanetClass(currentPlanet?.name);
  const planetStyles = getPlanetStyles(currentPlanet?.name);
  const planetImagePath = currentPlanet?.images.planet;
  const planetImagePath2 = currentPlanet?.images.internal;
  const planetImagePath3 = currentPlanet?.images.geology;

  const wikipediaLink = currentPlanet?.geology.source;

  return (
    <div
      className="flex flex-col p-[24px] h-full bg-cover "
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Header Burger={Burger} setBurger={setBurger} burger_svg={burger_svg} />
      {isMediumDevice ? null : (
        <Menu Burger={Burger} setBurger={setBurger} burger_svg={burger_svg} />
      )}

      {isMediumDevice ? (
        <div className="flex font-[400] text-[15px] tracking-[1.3px] font-spartan mt-[40px] justify-evenly text-[#fff] opacity-80 ">
          <Link to="/planet/mercury/overview">Mercury</Link>
          <Link to="/planet/venus/overview">Venus</Link>
          <Link to="/planet/earth/overview">Earth</Link>
          <Link to="/planet/mars/overview">Mars</Link>
          <Link to="/planet/jupiter/overview">Jupiter</Link>
          <Link to="/planet/saturn/overview">Saturn</Link>
          <Link to="/planet/uranus/overview">Uranus</Link>
          <Link to="/planet/neptune/overview">Neptune</Link>
        </div>
      ) : (
        <div className="flex font-bold text-[9px] tracking-[1.929px] font-spartan mt-[40px] justify-between">
          <Link
            className={`${
              details === "overview" ? planetStyles : "opacity-50"
            }`}
            to={`/planet/${currentPlanet?.name}/overview`}
          >
            OVERVIEW
          </Link>

          <Link
            className={`${
              details === "structure" ? planetStyles : "opacity-50"
            }`}
            to={`/planet/${currentPlanet?.name}/structure`}
          >
            Structure
          </Link>

          <Link
            className={`${details === "surface" ? planetStyles : "opacity-50"}`}
            to={`/planet/${currentPlanet?.name}/surface`}
          >
            Surface
          </Link>
        </div>
      )}

      <hr
        className={`${isMediumDevice ? "mt-[30px]" : "mt-[20px]"}
      "h-[1px] w-full opacity-10  absolute top-[121px] right-0 left-0"`}
      />

      <div className="flex justify-center mt-[95px] mb-[98px]">
        {details === "structure" ? (
          <img
            src={planetImagePath2}
            className={planetClass}
            alt="planet_structure"
          />
        ) : details === "surface" ? (
          <div className="relative">
            <img
              src={planetImagePath}
              className={planetClass}
              alt="planet_surface"
            />
            <img
              src={planetImagePath3}
              className="absolute w-[80%] h-[160px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt="planet_geology"
            />
          </div>
        ) : (
          <img
            src={planetImagePath}
            className={planetClass}
            alt="planet_default"
          />
        )}
      </div>
      {isMediumDevice ? (
        <div className="text-[#FFFFFF] flex justify-between items-center">
          <div className={`${isMediumDevice ? "max-w-[339px]" : ""}`}>
            {" "}
            <h2 className="text-[48px]">{currentPlanet?.name}</h2>
            {details === "structure" ? (
              <p className="font-spartan text-[11px] leading-[22px] normal-case font-normal opacity-80 mt-[16px] mb-[32px]">
                {currentPlanet?.structure.content}
              </p>
            ) : details === "surface" ? (
              <p className="font-spartan text-[15px] leading-[22px] normal-case font-normal opacity-80 mt-[16px] mb-[32px]">
                {currentPlanet?.geology.content}
              </p>
            ) : (
              <p className="font-spartan text-[11px] leading-[22px] normal-case font-normal opacity-80 mt-[16px] mb-[32px]">
                {currentPlanet?.overview.content}
              </p>
            )}
            <div className="flex  ">
              <a
                className="normal-case text-[#FFFFFF] opacity-50 text-[12px] font-spartan font-[300] leading-[25px] tracking-[1.5px] mb-[28px]"
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
          </div>
          <div>
            <div className="flex font-bold text-[15px] tracking-[2px] font-spartan mt-[40px] justify-center flex-col  leading-[25px] gap-[16px]">
              <Link
                className={`border border-[#fff] border-opacity-20 w-[340px] max-h-[40px] p-[24px] flex justify-left items-center gap-[17px]
                  font-[400]`}
                to={`/planet/${currentPlanet?.name}/overview`}
              >
                <span className="opacity-50">01</span>
                <p>OVERVIEW</p>
              </Link>

              <Link
                className={`border border-[#fff] border-opacity-20 max-w-[340px] max-h-[40px] p-[24px] flex justify-left items-center gap-[17px]  font-[400]`}
                to={`/planet/${currentPlanet?.name}/structure`}
              >
                <span className="opacity-50">02</span>
                <p>Internal Structure</p>
              </Link>

              <Link
                className={`border border-[#fff] border-opacity-20 max-w-[340px] max-h-[40px] p-[24px] flex justify-left items-center gap-[17px]  font-[400]`}
                to={`/planet/${currentPlanet?.name}/surface`}
              >
                <span className="opacity-50">03</span>
                <p>Surface Geology</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-[#FFFFFF] text-center">
            <h2 className="text-[40px]">{currentPlanet?.name}</h2>
            {details === "structure" ? (
              <p className="font-spartan text-[11px] leading-[22px] normal-case font-normal opacity-80 mt-[16px] mb-[32px]">
                {currentPlanet?.structure.content}
              </p>
            ) : details === "surface" ? (
              <p className="font-spartan text-[11px] leading-[22px] normal-case font-normal opacity-80 mt-[16px] mb-[32px]">
                {currentPlanet?.geology.content}
              </p>
            ) : (
              <p className="font-spartan text-[11px] leading-[22px] normal-case font-normal opacity-80 mt-[16px] mb-[32px]">
                {currentPlanet?.overview.content}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <a
              className="normal-case text-[#FFFFFF] opacity-50 text-[12px] font-spartan font-[300] leading-[25px] tracking-[1.5px] mb-[28px]"
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
        </>
      )}

      <div className="flex justify-center flex-col gap-[10px] pb-[30px] text-[#FFFFFF] font-[500]">
        <div className="border border-solid border-white border-opacity-20 p-[16px] flex justify-between items-center">
          <h3 className="tracking-[1.5px] opacity-50 font-spartan leading-[16px] text-[13px] text-[#FFF]">
            ROTATION TIME
          </h3>
          <p className="text-[25px] font-normal tracking-[-0.75px] leading-normal">
            {currentPlanet?.rotation}
          </p>
        </div>
        <div className="border border-solid border-white border-opacity-20 p-[20px] flex justify-between items-center">
          <h3 className="tracking-[1.5px] opacity-50 font-spartan leading-[16px] text-[13px] text-[#FFF]">
            REVOLUTION TIME
          </h3>
          <p className="text-[25px] font-normal tracking-[-0.75px] leading-normal">
            {currentPlanet?.revolution}
          </p>
        </div>
        <div className="border border-solid border-white border-opacity-20 p-[16px] flex justify-between items-center">
          <h3 className="tracking-[1.5px] opacity-50 font-spartan leading-[16px] text-[13px] text-[#FFF]">
            RADIUS
          </h3>
          <p className="text-[25px] font-normal tracking-[-0.75px] leading-normal">
            {currentPlanet?.radius}
          </p>
        </div>
        <div className="border border-solid border-white border-opacity-20 p-[16px] flex justify-between items-center">
          <h3 className="tracking-[1.5px] opacity-50 font-spartan leading-[16px] text-[13px] text-[#FFF]">
            AVERAGE TEMP.
          </h3>
          <p className="text-[25px] font-normal tracking-[-0.75px] leading-normal">
            {currentPlanet?.temperature}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singleplanet;
