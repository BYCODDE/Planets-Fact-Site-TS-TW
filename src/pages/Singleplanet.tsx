import data from "../data.json";
import { useParams } from "react-router-dom";
export default function Singleplanet() {
  const { name } = useParams();
  console.log(name);
  const currentPlanet = data.find(
    (planet) => planet.name.toLowerCase() === name?.toLowerCase()
  );

  console.log(currentPlanet);

  return (
    <>
      <div className="flex flex-col p-[24px]">yjrotyrpoyjtryjo</div>
    </>
  );
}
