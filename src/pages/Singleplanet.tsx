import Header from "../components/Header";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { BurgerProps } from "../components/Menu";

const Singleplanet: React.FC<BurgerProps> = ({ Burger, setBurger, burger_svg }) => {
  const { name } = useParams();
  console.log(name);
  const currentPlanet = data.find(
    (planet) => planet.name.toLowerCase() === name?.toLowerCase()
  );

  console.log(currentPlanet);

  return (
    <>
      <div className="flex flex-col p-[24px]">
        <Header Burger={Burger} setBurger={setBurger} burger_svg={burger_svg}  />
      </div>
    </>
  );
};
export default Singleplanet;
