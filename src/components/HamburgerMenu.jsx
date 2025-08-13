import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function HamburgerMenu({ isOpen, onClose }) {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed py-[16px] px-[20px] top-0 right-0 z-50 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute right-4 text-text"
        aria-label="Close menu"
      >
        <AiOutlineClose className="w-[30px] h-[30px]" aria-hidden="true" />
      </button>

      <nav>
        <ul className="space-y-[36px]">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="block text-text hover:bg-gray-100 font-semibold"
                onClick={onClose}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
