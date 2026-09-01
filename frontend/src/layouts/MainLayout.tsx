import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "XYZENTRIX",
      "/about": "About | XYZENTRIX",
      "/services": "Services | XYZENTRIX",
      "/portfolio": "Portfolio | XYZENTRIX",
      "/contact": "Contact | XYZENTRIX",
    };

    document.title = titles[location.pathname] || "XYZENTRIX";
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;