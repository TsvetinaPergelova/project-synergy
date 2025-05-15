import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  rightButtonText: string;
  rightButtonLink: string;
}

const Header: React.FC<HeaderProps> = ({
  rightButtonText,
  rightButtonLink,
}) => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <Image
          src="/logo-fibank-signature.svg"
          alt="Fibank Logo"
          width={150}
          height={32} // Consistent height (h-8 equivalent)
          className="h-8 w-auto"
        />
      </div>

      {/* Center Section: Links */}
      <div className="flex items-center space-x-8 justify-center flex-grow">
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          English
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          Към сайта
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          <i className="fab fa-apple"></i> Мобилно приложение
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          Промени в ОУ и тарифа
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          Помощ
        </a>
      </div>

      {/* Right Section: Button */}
      <div>
        <Link href={rightButtonLink}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
            {rightButtonText}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
