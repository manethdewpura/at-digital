import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu.jsx";
import { FiMenu } from "react-icons/fi";

function TopNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-primary h-[100px]">
      <div className="mx-auto py-[26px] lg:px-[80px] sm:px-[40px] px-[20px] flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-[28px]"
          aria-label="Go to homepage"
        >
          <img
            src="/logoFull.svg"
            alt="AT Digital"
            className="h-[50px] w-[226px]"
          />
        </Link>

        <nav className="hidden md:flex items-center lg:gap-8 gap-6 text-white lg:text-[20px] text-[16px] font-semibold">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-text-subtle transition-colors duration-200 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden rounded-md text-white hover:bg-analogous-1"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu className="w-[31px] h-[24px]" aria-hidden="true" />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default TopNavigation;
