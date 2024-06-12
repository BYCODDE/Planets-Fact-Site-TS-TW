import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navigation-menu font-spartan  font-bold leading-[25px] tracking-[1.364px]">
      <ul>
        <li>
          <Link className="text-[#FFF]  hover:text-[#FFF]" to="/mercury">
            Mercury
          </Link>
        </li>
        <li>
          <Link className="text-[#FFF]  hover:text-[#FFF]" to="/venus">
            Venus
          </Link>
        </li>
        <li>
          <Link className="text-[#FFF]  hover:text-[#FFF]" to="/earth">
            Earth
          </Link>
        </li>
        <li>
          <Link className="text-[#FFF]  hover:text-[#FFF]" to="/mars">
            Mars
          </Link>
        </li>
        <li>
          <Link className="text-[#FFF]  hover:text-[#FFF]" to="/jupiter">
            Jupiter
          </Link>
        </li>
        <li>
          <Link className="text-[#FFF]  hover:text-[#FFF]" to="/saturn">
            Saturn
          </Link>
        </li>
        <li>
          <Link className="text-[#FFF]  hover:text-[#FFF]" to="/uranus">
            Uranus
          </Link>
        </li>
        <li>
          <Link className="text-[#FFF]  hover:text-[#FFF]" to="/neptune">
            Neptune
          </Link>
        </li>
      </ul>
    </nav>
  );
}
