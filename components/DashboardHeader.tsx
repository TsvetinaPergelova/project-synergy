"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DashboardHeaderProps {
  showMenuButton?: boolean;
  onMenuClick?: () => void;
}

export default function DashboardHeader({
  showMenuButton,
  onMenuClick,
}: DashboardHeaderProps) {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] =
    useState(false); // New state for notifications dropdown

  const settingsMenuItems = [
    { name: "Лични данни", href: "#" },
    { name: "Общи настройки", href: "#" },
    { name: "Настройки на сметка", href: "#" },
    { name: "Настройки на депозит", href: "#" },
    { name: "Настройки на карта", href: "#", highlighted: true },
    { name: "3D сигурност на карти", href: "#" },
    { name: "Промяна на парола", href: "#" },
    { name: "Регистриране на сертификат", href: "#" },
    { name: "Регистриране на КЕП", href: "#" },
    { name: "Деблокиране на Token", href: "#", highlighted: true },
    { name: "Промяна ПИН Token", href: "#" },
    { name: "E-mail и SMS известяване", href: "#" },
    { name: "SMS известяване за карти", href: "#" },
    { name: "Мобилно приложение Fibank", href: "#" },
  ];

  const notificationItems = [
    {
      id: 1,
      icon: "/CoinIcon.png", // Placeholder for failed transaction icon
      iconBg: "bg-blue-600", // Icon background color
      title: "Неуспешен превод",
      description: "Превод с получател НОИ не беше извършен...",
      timestamp: "20/01/2015 16:00",
      isRead: true, // Mark as read
    },
    {
      id: 2,
      icon: "/file.svg", // Placeholder for card icon
      iconBg: "bg-blue-600",
      title: "Нова картова авторизация",
      description: "От карта 401820***2251 бяха изтеглени 100 лв.",
      timestamp: "20/01/2015 14:00",
      actionType: "menu",
      highlighted: true, // This item has a different background in the image
    },
    {
      id: 3,
      icon: "/TokenIcon.png", // Placeholder for token icon (assuming TokenIcon.png exists or is similar to settings/key)
      iconBg: "bg-gray-500",
      title: "Успешно активирано Token устройство.",
      description: "Вече можете да ползвате Token устройството си за...",
      timestamp: "16/01/2015 15:30",
    },
    {
      id: 4,
      icon: "/CoinIcon.png", // Placeholder for loan/payment icon
      iconBg: "bg-gray-500",
      title: "Погасяване на кредит",
      description: "Остават 5 дена, за плащане на вноска по кредит...",
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
            aria-label="Toggle menu"
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
            <span className="font-medium">МЕНЮ</span>
          </button>
        )}
        {/* Logo */}
        <div className="flex items-center pl-12">
          <Image
            src="/logo-fibank-signature.svg"
            alt="Fibank Logo"
            width={150}
            height={32}
            className="h-8 w-auto"
          />
        </div>
        {/* Right Side Nav */}
        <div className="flex items-center gap-8 ml-auto">
          <button className="text-gray-700 text-sm font-medium hover:text-blue-700">
            ENGLISH
          </button>
          <div className="relative flex items-center text-gray-700 text-sm font-medium hover:text-blue-700 cursor-pointer">
            <Image
              src="/MessageIcon.png"
              alt="User"
              width={32}
              height={32}
              className=" border pr-3"
            />
            <span className="material-icons mr-1">СЪОБЩЕНИЯ</span>
            <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full px-1.5">
              2
            </span>
          </div>

          {/* Notifications Dropdown (replaces static Notifications display) */}
          <div className="relative">
            <button
              onClick={() =>
                setShowNotificationsDropdown(!showNotificationsDropdown)
              }
              className="flex items-center text-gray-700 text-sm font-medium hover:text-blue-700 cursor-pointer"
              aria-label="Toggle notifications menu"
            >
              <Image
                src="/NotificationIcon.png"
                alt="Notifications"
                width={32}
                height={32}
                className="border pr-3"
              />
              <span className="material-icons mr-1">ИЗВЕСТИЯ</span>
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full px-1.5">
                3
              </span>
              <Image
                src="/arrow-down-3101.png"
                alt="Toggle submenu"
                width={16}
                height={16}
                className={`ml-1 transform transition-transform duration-200 ${
                  showNotificationsDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {showNotificationsDropdown && (
              <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-3">
                    Имате 3 нови известия
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
                            <p className="text-sm font-semibold text-gray-900 truncate">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 truncate">
                              {item.description}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
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
                    >
                      Вижте всички известия &gt;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Settings Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
              className="flex items-center text-gray-700 text-sm font-medium hover:text-blue-700 cursor-pointer"
              aria-label="Toggle settings menu"
            >
              <Image
                src="/SettingsIcon.png"
                alt="Settings"
                width={32}
                height={32}
                className="border pr-3"
              />
              <span className="material-icons mr-1">НАСТРОЙКИ</span>
              <Image
                src="/arrow-down-3101.png"
                alt="Toggle submenu"
                width={16}
                height={16}
                className={`ml-1 transform transition-transform duration-200 ${
                  showSettingsDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {showSettingsDropdown && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
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
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="flex items-center cursor-pointer"
              aria-label="Toggle profile menu"
            >
              <Image
                src="/user-avatar.png"
                alt="User"
                width={32}
                height={32}
                className="rounded-full border"
              />
              <Image
                src="/arrow-down-3101.png"
                alt="Toggle submenu"
                width={16}
                height={16}
                className={`ml-2 transform transition-transform duration-200 ${
                  showProfileDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/user-avatar.png"
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="text-xs text-gray-500">Потребител:</div>
                      <div className="font-semibold text-sm text-gray-800">
                        Филип Филипов
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white border-2 border-red-500"></div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Клиент:</div>
                      <div className="font-semibold text-sm text-gray-800">
                        УИЗ ЕООД
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-2">
                    Изберете друг клиент:
                  </div>
                  <ul>
                    {[
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
                          <div className="flex items-center gap-3">
                            <Image
                              src={client.avatar}
                              alt={client.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <span>{client.name}</span>
                          </div>
                          <span className="text-gray-400">&gt;</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/logout"
            className="flex items-center text-gray-700 hover:text-blue-700"
          >
            <Image
              src="/LogoutIcon.png"
              alt="Logout"
              width={32}
              height={32}
              className="border pr-3"
            />
            <span className="material-icons mr-1">ИЗХОД</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
