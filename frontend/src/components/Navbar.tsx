import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCompanyProfile } from "../services/api";
const MEDIA_BASE_URL = import.meta.env.VITE_MEDIA_URL;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyName, setCompanyName] = useState("XYZENTRIX");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    async function loadCompany() {
      try {
        const company = await getCompanyProfile();
        setCompanyName(company.company_name);
        setLogo(company.logo || "");
      } catch (error) {
        console.error("Failed to load company profile:", error);
      }
    }

    loadCompany();
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          {logo ? (
            <img
              src={`${MEDIA_BASE_URL}${logo}`}
              alt={companyName}
              className="h-10 w-10 rounded-lg object-contain"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#39FF14] text-lg font-bold text-black">
              X
            </div>
          )}

          <span className="text-2xl font-bold tracking-wider text-[#39FF14]">
            {companyName}
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-[#39FF14]"
                    : "text-white hover:text-[#39FF14]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="border-t border-gray-800 bg-black md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 transition-colors ${
                  isActive
                    ? "bg-[#39FF14]/10 text-[#39FF14]"
                    : "text-white hover:bg-white/5 hover:text-[#39FF14]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;