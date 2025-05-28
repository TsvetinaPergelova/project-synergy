
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
// import { usePathname } from "next/navigation";

interface HeaderProps {
  rightButtonTextKey: string;
  rightButtonLink: string;
}

const Header: React.FC<HeaderProps> = ({
  rightButtonTextKey,
  rightButtonLink,
}) => {
  const { t, i18n } = useTranslation();
  // const pathname = usePathname();
  const currentLocale = i18n.language; // Get the current language from i18n

  const switchToLocale = currentLocale === "bg" ? "en" : "bg"; // Toggle between 'bg' and 'en'
  const langSwitchButtonText =
    currentLocale === "bg"
      ? t("common.english", "English")
      : t("common.bulgarian", "Български"); // Text for the language switch button
  const handleLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale).then(() => {
      // The language is changed, and i18next will trigger re-renders.
      // You generally don't need to force a router.push here for language change itself.
      // The useEffect in your page components listening to i18n.language
      // will update the <html> lang attribute.
      console.log("Language changed to:", newLocale);
    });
  };
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
        {/* <Link
          href={pathname}
          locale={switchToLocale}
          className="text-gray-600 hover:text-blue-500 text-sm"
        >
          {langSwitchButtonText}
        </Link> */}
        <button
          onClick={() => handleLanguageChange(switchToLocale)}
          className="text-gray-600 hover:text-blue-500 text-sm cursor-pointer"
          type="button" // Good practice for buttons not submitting forms
        >
          {langSwitchButtonText}
        </button>
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          {t("header.toSite", "Към сайта")}
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          <i className="fab fa-apple mr-1"></i>
          {t("header.mobileApp", "Мобилно приложение")}
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          {t("header.tariffChanges", "Промени в ОУ и тарифа")}
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
          {t("header.help", "Помощ")}
        </a>
      </div>

      {/* Right Section: Button */}
      {rightButtonTextKey && (
        <div>
          <Link
            href={rightButtonLink}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
          >
            {t(rightButtonTextKey)}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
