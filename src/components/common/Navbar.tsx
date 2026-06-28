import Logo from "../../assets/Logo.png";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-2 md:py-5 md:px-4">
      <div>
        <img className="w-40" src={Logo} alt="" />
      </div>

      <div className="hidden text-white md:flex md:gap-1 xl:gap-3 md:text-xl lg:text-2xl font-bold ">
        <button className="md:px-2 lg:px-4 md:py-2 lg:py-4 bg-transparent hover:bg-[#000000] rounded-xl transition-all duration-300 ease-in-out">
          Home
        </button>
        <button className="md:px-2 lg:px-4 md:py-2 lg:py-4 bg-transparent hover:bg-[#000000] rounded-xl transition-all duration-300 ease-in-out">
          About Us
        </button>
        <button className="md:px-2 lg:px-4 md:py-2 lg:py-4 bg-transparent hover:bg-[#000000] rounded-xl transition-all duration-300 ease-in-out">
          Properties
        </button>
        <button className="md:px-2 lg:px-4 md:py-2 lg:py-4 bg-transparent hover:bg-[#000000] rounded-xl transition-all duration-300 ease-in-out">
          Services
        </button>
      </div>

      <div className="hidden md:flex md:gap-2 xl:gap-4 md:text-xs lg:text-2xl font-bold">
        <Button className="md:px-2 lg:px-4 md:py-3 lg:py-5 xl:py-7  text-white bg-[#000000] transition-all duration-300 ease-in-out hover:bg-white hover:text-black ">
          Contact Us
        </Button>
        <Button className="md:px-2 lg:px-4  md:py-3 lg:py-5 xl:py-7 text-white bg-[#000000] transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
