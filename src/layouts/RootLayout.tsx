import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
