import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <header className="flex justify-between items-center	">
        <h1 className="font-normal text-[28px] tracking-[-1.05px] leading-normal">
          the planets
        </h1>
        <img src="src\assets\icon-hamburger.svg" alt="" />
      </header>
      <nav className="navigation-menu font-spartan  font-bold leading-[25px] tracking-[1.364px]">
        <ul>
          <li>
            <div></div>
            <Link className="  " to="/mercury">
              Mercury
            </Link>
            <img src="src\assets\icon-chevron.svg" alt="icon-chevron" />
          </li>
          <li>
            <Link className="" to="/venus">
              Venus
            </Link>
          </li>
          <li>
            <Link className="" to="/earth">
              Earth
            </Link>
          </li>
          <li>
            <Link className="" to="/mars">
              Mars
            </Link>
          </li>
          <li>
            <Link className="" to="/jupiter">
              Jupiter
            </Link>
          </li>
          <li>
            <Link className="" to="/saturn">
              Saturn
            </Link>
          </li>
          <li>
            <Link className="" to="/uranus">
              Uranus
            </Link>
          </li>
          <li>
            <Link className="" to="/neptune">
              Neptune
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
