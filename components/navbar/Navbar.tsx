import NavbarAuth from "./NavbarAuth";
import SidebarButton from "./SidebarButton";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between h-18 p-2.5 sticky">
      <div className="text-white">
        <SidebarButton />
      </div>
      <div className="">
        <h1 className="text-2xl md:text-3xl  text-text-primary font-bold">
          chat<span className="text-button-primary text-5xl">.</span>ai
        </h1>
      </div>
      <div className="flex items-center justify-center text-white">
        <NavbarAuth />
      </div>
    </nav>
  );
};

export default Navbar;
