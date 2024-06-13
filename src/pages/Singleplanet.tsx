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
      <div className="flex flex-col p-[24px]">
        {/* <header className="flex justify-between items-center relative	">
          <h1 className="font-normal text-[28px] tracking-[-1.05px] leading-normal">
            the planets
          </h1>
          <img src="src\assets\icon-hamburger.svg" alt="" />
        </header>
        <hr className="h-[1px] w-full opacity-10 mt-[20px]  absolute top-[61px] right-0 left-0" /> */}
      </div>
    </>
  );


}
