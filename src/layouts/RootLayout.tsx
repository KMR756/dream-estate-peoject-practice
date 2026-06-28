import ComboBox from "@/components/common/ComboBox";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <ComboBox />
      <div className="xl:max-w-[80%] mx-auto ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
