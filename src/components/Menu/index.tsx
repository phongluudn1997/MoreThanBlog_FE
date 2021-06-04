import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { NavLink } from "components/NavLink";

const Menu = () => {
  return (
    <ul className="hidden lg:flex gap-10 lg:flex-1">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <DotsHorizontalIcon className="h-8 w-8" />
      </li>
    </ul>
  );
};
export { Menu };
