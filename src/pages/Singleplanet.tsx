import Header from "../components/Header";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { BurgerProps } from "../components/Menu";

const Singleplanet: React.FC<BurgerProps> = ({
  Burger,
  setBurger,
  burger_svg,
}) => {
  const { name } = useParams();
  console.log(name);
  const currentPlanet = data.find(
    (planet) => planet.name.toLowerCase() === name?.toLowerCase()
  );

  console.log(currentPlanet);

  return (
    <>
      <div className="flex flex-col p-[24px]">
        <Header Burger={Burger} setBurger={setBurger} burger_svg={burger_svg} />
        <div className="flex  font-bold text-[9px]  tracking-[1.929px] font-spartan mt-[40px] justify-between">
          <h3 className="cursor-pointer">OVERVIEW</h3>
          <h3 className="cursor-pointer">Structure</h3>
          <h3 className="cursor-pointer">Surface</h3>
        </div>
        <hr className="h-[1px] w-full opacity-10 mt-[20px] absolute top-[121px] right-0 left-0  " />
      </div>
    </>
  );
};
export default Singleplanet;
