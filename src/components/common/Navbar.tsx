import Logo from "../../assets/Logo.png";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 px-10">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <div className="text-white flex gap-4 text-2xl font-bold">
          <button className="px-4 py-2 bg-transparent hover:bg-[#000000] rounded-xl transition-all duration-300 ease-in-out">
            Home
          </button>
          <button className="px-4 py-2 bg-transparent hover:bg-[#000000] rounded-xl transition-all duration-300 ease-in-out">
            About Us
          </button>
          <button className="px-4 py-2 bg-transparent hover:bg-[#000000] rounded-xl transition-all duration-300 ease-in-out">
            Properties
          </button>
          <button className="px-4 py-2 bg-transparent hover:bg-[#000000] rounded-xl transition-all duration-300 ease-in-out">
            Services
          </button>
        </div>
      </div>
      <div className="flex gap-3 text-2xl font-bold">
        <Button className="px-5 py-7 text-white bg-[#000000] transition-all duration-300 ease-in-out hover:bg-white hover:text-black ">
          Contact Us
        </Button>
        <Button className="px-5 py-7 text-white bg-[#000000] transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
