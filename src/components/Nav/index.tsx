import { Menu } from "../Menu";
import logo from "./logo.png";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";

function Nav() {
  return (
    <nav className="flex justify-between items-center mt-10 font-black text-lg">
      <Menu />
      <img src={logo} alt="" className="h-20 w-20" />
      <button className="lg:hidden">
        <MenuIcon className="h-8 w-8" />
      </button>
      <div className="hidden lg:block lg:flex-1">
        <button className="ml-auto block">
          <SearchIcon className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

export { Nav };
