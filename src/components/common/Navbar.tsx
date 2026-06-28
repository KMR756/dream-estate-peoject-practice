import { Menu } from "lucide-react";
import Logo from "../../assets/Logo.png";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "../ui/separator";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-2 md:py-5 md:px-4">
      <div>
        <img className="w-40" src={Logo} alt="" />
      </div>
      {/* desktop nav */}
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
      {/* mobile menu */}
      <div>
        <Sheet>
          <SheetTrigger>
            <button className="md:hidden ">
              <Menu size={40} color="white" />
            </button>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8 font-bold text-2xl pt-10">
              <button>Home</button>
              <button>About Us</button>
              <button>Properties</button>
              <button>Services</button>
              <Separator className="!w-3/4 mx-auto bg-gray-500" />
              <button className="text-black bg-white w-1/2 mx-auto rounded-xl py-2">
                Contact Us
              </button>
              <button className="text-black bg-white w-1/2 mx-auto rounded-xl py-2">
                Sign Up
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* desktop btn */}
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
