"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeaderDropdown from "./HeaderDropdown"; // Import the new component
import { useTranslation } from "react-i18next";
// import { usePathname } from "next/navigation";

interface DashboardHeaderProps {
  showMenuButton?: boolean;
  onMenuClick?: () => void;
}

export default function DashboardHeader({
  showMenuButton,
  onMenuClick,
}: DashboardHeaderProps) {
  const { t, i18n } = useTranslation();
  // const pathname = usePathname();
  const currentLocale = i18n.language; // Get the current language from i18n
  const switchToLocale = currentLocale === "bg" ? "en" : "bg"; // Toggle between 'bg' and 'en'
  const langSwitchButtonText =
    currentLocale === "bg"
      ? t("common.english", "English")
      : t("common.bulgarian", "Български"); // Text for the language switch button
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] =
    useState(false);

  useEffect(() => {
    console.log("DashboardHeader - Current i18n.language:", i18n.language);
    if (document.documentElement) {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  const handleLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale).then(() => {
      // This callback is optional, but useful for logging or other side effects.
      console.log("DashboardHeader: Language changed to:", newLocale);
      // The page content using t() will automatically re-render.
    });
  };

  const settingsMenuItems = [
    {
      name: t("dashboardHeader.settingsMenuItems.personalData", "Лични данни"),
      href: "#",
      icon: "/user-avatar.png",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.generalSettings",
        "Общи настройки"
      ),
      href: "#",
      icon: "/SettingsIcon.png",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.accountSettings",
        "Настройки на сметка"
      ),
      href: "#",
      icon: "/bill-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.depositSettings",
        "Настройки на депозит"
      ),
      href: "#",
      icon: "/deposit-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.cardSettings",
        "Настройки на карта"
      ),
      href: "#",
      icon: "/credit-card-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.security3D",
        "3D сигурност на карти"
      ),
      href: "#",
      icon: "/security-card-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.changePassword",
        "Промяна на парола"
      ),
      href: "#",
      icon: "/padlock-locked-simple-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.regosterCertificate",
        "Регистриране на сертификат"
      ),
      href: "#",
      icon: "/sertificate-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.registerKEP",
        "Регистриране на КЕП"
      ),
      href: "#",
      icon: "/pen-nib-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.unblockToken",
        "Деблокиране на Token"
      ),
      href: "#",
      highlighted: true,
      icon: "/token-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.changePINToken",
        "Промяна ПИН Token"
      ),
      href: "#",
      icon: "/token-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.emailSMSNotifications",
        "E-mail и SMS известяване"
      ),
      href: "#",
      icon: "/bell-alt-1-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.smsCardNotifications",
        "SMS известяване за карти"
      ),
      href: "#",
      icon: "/sms-organizer-svgrepo-com.svg",
    },
    {
      name: t(
        "dashboardHeader.settingsMenuItems.mobileAppFibank",
        "Мобилно приложение Fibank"
      ),
      href: "#",
      icon: "/mobile-phone-svgrepo-com.svg",
    },
  ];

  const notificationItems = [
    {
      id: 1,
      icon: "/CoinIcon.png",
      iconBg: "bg-blue-600",
      title: t(
        "dashboardHeader.notificationItems.failedTransferTitle",
        "Неуспешен превод"
      ),
      description: t(
        "dashboardHeader.notificationItems.failedTransferDesc",
        "Превод с получател НОИ не беше извършен..."
      ),
      timestamp: "20/01/2015 16:00",
      isRead: true,
    },
    {
      id: 2,
      icon: "/file.svg",
      iconBg: "bg-blue-600",
      title: t(
        "dashboardHeader.notificationItems.newCardAuthTitle",
        "Нова картова авторизация"
      ),
      description: t(
        "dashboardHeader.notificationItems.newCardAuthDesc",
        "От карта 401820***2251 бяха изтеглени 100 лв."
      ),
      timestamp: "20/01/2015 14:00",
      actionType: "menu",
      highlighted: true,
    },
    {
      id: 3,
      icon: "/TokenIcon.png",
      iconBg: "bg-gray-500",
      title: t(
        "dashboardHeader.notificationItems.tokenActivatedTitle",
        "Успешно активирано Token устройство."
      ),
      description: t(
        "dashboardHeader.notificationItems.tokenActivatedDesc",
        "Вече можете да ползвате Token устройството си за..."
      ),
      timestamp: "16/01/2015 15:30",
    },
    {
      id: 4,
      icon: "/CoinIcon.png",
      iconBg: "bg-gray-500",
      title: t(
        "dashboarsHeader.noficationItems.creditRepaymentTitle",
        "Погасяване на кредит"
      ),
      description: t(
        "dashboardHeader.notificationItems.creditRepaymentDesc",
        "Остават 5 дена, за плащане на вноска по кредит..."
      ),
      timestamp: "15/01/2015 19:00",
    },
  ];

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <nav className="bg-white flex items-center px-6 py-2 w-full">
        {showMenuButton && (
          <button
            onClick={onMenuClick}
            className="flex items-center text-gray-700 hover:text-blue-700 mr-4 p-2 rounded hover:bg-gray-100"
            aria-label={t("dashboardHeader.toggleMenuAriaLabel", "Toggle menu")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span className="font-medium">
              {t("dashboardHeader.menu", "МЕНЮ")}
            </span>
          </button>
        )}
        {/* Logo */}
        <div className="flex items-center pl-12">
          <Image
            src="/logo-fibank-signature.svg"
            alt={t("header.logoAlt", "Fibank Logo")}
            width={150}
            height={32}
            className="h-8 w-auto"
          />
        </div>
        {/* Right Side Nav */}
        <div className="flex items-center gap-8 ml-auto">
          <button
            onClick={() => handleLanguageChange(switchToLocale)}
            className="text-gray-700 text-sm font-medium hover:text-blue-700 cursor-pointer"
            type="button"
          >
            {langSwitchButtonText}
          </button>
          <div className="relative flex items-center text-gray-700 text-sm font-medium hover:text-blue-700 cursor-pointer">
            <Image
              src="/MessageIcon.png"
              alt={t("dashboardHeader.messagesAlt", "User Messages")}
              width={32}
              height={32}
              className=" border pr-3"
            />
            <span className="material-icons mr-1">
              {t("dashboardHeader.messages", "СЪОБЩЕНИЯ")}
            </span>
            <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full px-1.5">
              2
            </span>
          </div>

          {/* Notifications Dropdown */}
          <HeaderDropdown
            isOpen={showNotificationsDropdown}
            setIsOpen={setShowNotificationsDropdown}
            ariaLabel={t(
              "dashboardHeader.toggleNotificationsAriaLabel",
              "Toggle notifications menu"
            )}
            dropdownWidthClass="w-96"
            buttonContent={
              <>
                <Image
                  src="/NotificationIcon.png"
                  alt={t("dashboardHeader.notificationsAlt", "Notifications")}
                  width={32}
                  height={32}
                  className="border pr-3"
                />
                <span className="material-icons mr-1">
                  {t("dashboardHeader.notifications", "ИЗВЕСТИЯ")}
                </span>
                <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full px-1.5">
                  3
                </span>
                <Image
                  src="/arrow-down-3101.png"
                  alt={t("dashboardHeader.toggleSubmenuAlt", "Toggle submenu")}
                  width={16}
                  height={16}
                  className={`ml-1 transform transition-transform duration-200 ${
                    showNotificationsDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </>
            }
            dropdownContent={
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">
                  {t(
                    "dashboardHeader.notificationsDropdown.titleDynamic",
                    "Имате 3 нови известия"
                  )}
                </h3>
                <ul className="-mx-4">
                  {notificationItems.map((item) => (
                    <li
                      key={item.id}
                      className={`px-4 py-3 border-b border-gray-100 last:border-b-0 ${
                        item.highlighted ? "bg-gray-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${item.iconBg} p-1`}
                        >
                          <Image
                            src={item.icon}
                            alt=""
                            width={18}
                            height={18}
                            className="filter brightness-0 invert"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 truncate">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {item.description}
                          </p>
                          <p className="text-xs text-gray-400">
                            {item.timestamp}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center border-t border-gray-100 pt-3">
                  <Link
                    href="#"
                    className="text-sm text-blue-600 hover:underline font-medium"
                    onClick={() => setShowNotificationsDropdown(false)}
                  >
                    {t(
                      "dashboardHeader.notificationsDropdown.viewAll",
                      "Вижте всички известия"
                    )}{" "}
                    &gt;
                  </Link>
                </div>
              </div>
            }
          />

          {/* Settings Dropdown */}
          <HeaderDropdown
            isOpen={showSettingsDropdown}
            setIsOpen={setShowSettingsDropdown}
            ariaLabel={t(
              "dashboardHeader.toggleSettingsAriaLabel",
              "Toggle settings menu"
            )}
            dropdownWidthClass="w-72"
            buttonContent={
              <>
                <Image
                  src="/SettingsIcon.png"
                  alt={t("dashboarsHeader.settingsAlt", "Settings")}
                  width={32}
                  height={32}
                  className="border pr-3"
                />
                <span className="material-icons mr-1">
                  {t("dashboardHeader.settings", "НАСТРОЙКИ")}
                </span>
                <Image
                  src="/arrow-down-3101.png"
                  alt={t("dashboardHeader.toggleSubmenuAlt", "Toggle submenu")}
                  width={16}
                  height={16}
                  className={`ml-1 transform transition-transform duration-200 ${
                    showSettingsDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </>
            }
            dropdownContent={
              <ul>
                {settingsMenuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        item.highlighted ? "bg-gray-100 text-blue-700" : ""
                      }`}
                      onClick={() => setShowSettingsDropdown(false)}
                    >
                      {item.icon && (
                        <Image src={item.icon} alt="" width={16} height={16} />
                      )}
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            }
          />

          {/* Profile Dropdown */}
          <HeaderDropdown
            isOpen={showProfileDropdown}
            setIsOpen={setShowProfileDropdown}
            ariaLabel={t(
              "dashboardheader.toggleProfileAriaLabel",
              "Toggle profile menu"
            )}
            dropdownWidthClass="w-72"
            buttonContent={
              <>
                <Image
                  src="/user-avatar.png"
                  alt={t("dashboardHeader.userAvatarAlt", "User Avatar")}
                  width={32}
                  height={32}
                  className="rounded-full border"
                />
                <Image
                  src="/arrow-down-3101.png"
                  alt={t("dashboardHeader.toggleSubmenuAlt", "Toggle submenu")}
                  width={16}
                  height={16}
                  className={`ml-2 transform transition-transform duration-200 ${
                    showProfileDropdown ? "rotate-180" : "rotate-0"
                  }`}
                />
              </>
            }
            dropdownContent={
              <>
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/user-avatar.png"
                      alt={t("dashboardHeader.userAvatarAlt", "User Avatar")}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="text-xs text-gray-500">
                        {t(
                          "dashboardHeader.profileDropdown.userLabel",
                          "Потребител:"
                        )}
                      </div>
                      <div className="font-semibold text-sm text-gray-800">
                        Филип Филипов {/* Dynamic data - keep as is */}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white border-2 border-red-500"></div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">
                        {t(
                          "dashboardHeader.profileDropdown.clientLabel",
                          "Клиент:"
                        )}
                      </div>
                      <div className="font-semibold text-sm text-gray-800">
                        УИЗ ЕООД {/* Dynamic data - keep as is */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-2">
                    {t(
                      "dashboardHeader.profileDropdown.selectOtherClientLabel",
                      "Изберете друг клиент:"
                    )}
                  </div>
                  <ul>
                    {[
                      /* Dynamic data - keep as is */
                      { name: "Андрей Нончев", avatar: "/user-avatar.png" },
                      { name: "Борис ООД", avatar: "/user-avatar.png" },
                      { name: "Йордан Геновски", avatar: "/user-avatar.png" },
                    ].map((client) => (
                      <li key={client.name} className="mb-1">
                        <a
                          href="#"
                          className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 text-sm text-gray-700"
                          onClick={() => setShowProfileDropdown(false)}
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={client.avatar}
                              alt={client.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <span>{client.name}</span>
                          </div>
                          <span className="text-blue-600 text-xs">&gt;</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            }
          />
          <Link
            href="/logout"
            className="flex items-center text-gray-700 hover:text-blue-700"
          >
            <Image
              src="/LogoutIcon.png"
              alt={t("dashboardHeader.logoutAlt", "Logout")}
              width={32}
              height={32}
              className="border pr-3"
            />
            <span className="material-icons mr-1">
              {t("dashboardHeader.logout", "ИЗХОД")}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
