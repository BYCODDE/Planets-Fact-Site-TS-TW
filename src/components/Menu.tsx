import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <header className="flex justify-between align-center">
        <h1 className="font-normal text-[28px] tracking-[-1.05px] leading-normal">
          the planets
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </header>
      <nav className="navigation-menu font-spartan  font-bold leading-[25px] tracking-[1.364px]">
        <ul>
          <li>
            <Link className="  " to="/mercury">
              Mercury
            </Link>
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
