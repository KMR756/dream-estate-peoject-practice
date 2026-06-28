import ComboBox from "@/components/common/ComboBox";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <ComboBox />
      <div className="xl:max-w-[70%] mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
