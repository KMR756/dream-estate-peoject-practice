import AdminNavbar from "@/components/common/AdminNavbar";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
