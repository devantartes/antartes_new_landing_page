import { Outlet } from "react-router";
import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";

export default function _landing() {
  return (
    <div className="landing_page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
