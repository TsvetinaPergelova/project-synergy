"use client";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useEffect, useState } from "react"; // Import useState and useEffect
import FlyoutMenu, { MenuItem } from "./FlyoutMenu"; // Import the new FlyoutMenu component

export default function Sidebar() {
  const [currentDate, setCurrentDate] = useState("");
  const [isFibankInfoOpen, setIsFibankInfoOpen] = useState(false); // New state for this dropdown
  const [isDopulnitelnoOpen, setIsDopulnitelnoOpen] = useState(false); // New state for Допълнително

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
      "Яну",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Юни",
      "Юли",
      "Авг",
      "Сеп",
      "Окт",
      "Ное",
      "Дек",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  const spravkiMenuItems: MenuItem[] = [
    {
      type: "item",
      label: "ПОС транзакции - по групи",
      onClick: () => console.log("Clicked: ПОС транзакции - по групи"),
    },
    {
      type: "item",
      label: "ПОС транзакции за период",
      onClick: () => console.log("Clicked: ПОС транзакции за период"),
    },
    {
      type: "item",
      label: "Салда по всички сметки SSO",
      onClick: () => console.log("Clicked: Салда по всички сметки SSO"),
    },
    {
      type: "item",
      label: "Дневен отчет за бюдж. разпоредител",
      onClick: () => console.log("Clicked: Дневен отчет за бюдж. разпоредител"),
    },
    {
      type: "item",
      label: "Извършени услуги за клиент",
      onClick: () => console.log("Clicked: Извършени услуги за клиент"),
    },
    {
      type: "item",
      label: "Изпратени SMS нотификации",
      onClick: () => console.log("Clicked: Изпратени SMS нотификации"),
    },
    {
      type: "item",
      label: "Дължими суми от такси",
      onClick: () => console.log("Clicked: Дължими суми от такси"),
    },
    {
      type: "item",
      label: "Преводи по SWIFT",
      onClick: () => console.log("Clicked: Преводи по SWIFT"),
    },
    {
      type: "item",
      label: "Сесии",
      onClick: () => console.log("Clicked: Сесии"),
    },
  ];

  const paymentsMenuItems: MenuItem[] = [
    { type: "header", label: "ПРЕВОДИ" },
    {
      type: "item",
      label: "Нов кредитен превод",
      onClick: () => console.log("Clicked: Нов кредитен превод"),
    },
    {
      type: "item",
      label: "Плащане от/към бюджета",
      onClick: () => console.log("Clicked: Плащане от/към бюджета"),
    },
    {
      type: "item",
      label: "Директен дебит",
      onClick: () => console.log("Clicked: Директен дебит"),
    },
    {
      type: "item",
      label: "Масов превод",
      onClick: () => console.log("Clicked: Масов превод"),
    },
    {
      type: "item",
      label: "Преводи от файл",
      onClick: () => console.log("Clicked: Преводи от файл"),
    },
    {
      type: "item",
      label: "Нов периодичен превод",
      onClick: () => console.log("Clicked: Нов периодичен превод"),
    },
    {
      type: "item",
      label: "Плащания към СЕБРА",
      onClick: () => console.log("Clicked: Плащания към СЕБРА"),
    },
    {
      type: "item",
      label: "Кредитен превод СУ",
      onClick: () => console.log("Clicked: Кредитен превод СУ"),
    },
    {
      type: "item",
      label: "Вътрешноклонов превод СУ",
      onClick: () => console.log("Clicked: Вътрешноклонов превод СУ"),
    },
    { type: "separator" },
    { type: "header", label: "ПОКУПКА/ПРОДАЖБА НА ВАЛУТА" },
    {
      type: "item",
      label: "Покупка/продажба на валута",
      onClick: () => console.log("Clicked: Покупка/продажба на валута"),
    },
    {
      type: "item",
      label: "Договаряне на курс",
      onClick: () => console.log("Clicked: Договаряне на курс"),
    },
    { type: "separator" },
    { type: "header", label: "РЕГИСТРИ" },
    {
      type: "item",
      label: "Регистър на пер. преводи",
      onClick: () => console.log("Clicked: Регистър на пер. преводи"),
    },
    {
      type: "item",
      label: "Получатели за преводи",
      onClick: () => console.log("Clicked: Получатели за преводи"),
    },
  ];

  const statementsMenuItems: MenuItem[] = [
    {
      type: "item",
      label: "Извлечение по сметка",
      onClick: () => console.log("Clicked: Извлечение по сметка"),
    },
    {
      type: "item",
      label: "Извлечение по кредитна карта",
      onClick: () => console.log("Clicked: Извлечение по кредитна карта"),
    },
  ];

  const servicesMenuItems: MenuItem[] = [
    {
      type: "item",
      label: "Отчети по e-mail за сметки",
      onClick: () => console.log("Clicked: Отчети по e-mail за сметки"),
    },
    {
      type: "item",
      label: "Извлечения по e-mail за карти",
      onClick: () => console.log("Clicked: Извлечения по e-mail за карти"),
    },
    {
      type: "item",
      label: "Картови авторизации по e-mail",
      onClick: () => console.log("Clicked: Картови авторизации по e-mail"),
    },
    {
      type: "item",
      label: "Преводи по SWIFT по e-mail",
      onClick: () => console.log("Clicked: Преводи по SWIFT по e-mail"),
    },
  ];

  const utilitiesMenuItems: MenuItem[] = [
    { type: "header", label: "ПЛАЩАНЕ НА ЗАДЪЛЖЕНИЯ" },
    {
      type: "item",
      label: "Задължения очакващи плащане",
      onClick: () => console.log("Clicked: Задължения очакващи плащане"),
    },
    {
      type: "item",
      label: "Плащане на задължения",
      onClick: () => console.log("Clicked: Плащане на задължения"),
    },
    {
      type: "item",
      label: "Плащане на общински данъци и такси",
      onClick: () => console.log("Clicked: Плащане на общински данъци и такси"),
    },
    {
      type: "item",
      label: "Еднократно плащане",
      onClick: () => console.log("Clicked: Еднократно плащане"),
    },
    { type: "separator" },
    { type: "header", label: "АБОНАТНИ СМЕТКИ" },
    {
      type: "item",
      label: "Добавяне на абонатна сметка",
      onClick: () => console.log("Clicked: Добавяне на абонатна сметка"),
    },
    {
      type: "item",
      label: "Регистрирани абонатни сметки",
      onClick: () => console.log("Clicked: Регистрирани абонатни сметки"),
    },
    { type: "separator" },
    { type: "header", label: "ДРУГИ" },
    {
      type: "item",
      label: "Известия по e-mail",
      onClick: () => console.log("Clicked: Известия по e-mail"),
    },
    {
      type: "item",
      label: "История на плащанията",
      onClick: () => console.log("Clicked: История на плащанията"),
    },
  ];

  const declarationsMenuItems: MenuItem[] = [
    {
      type: "item",
      label: "Декларация НОИ",
      onClick: () => console.log("Clicked: Декларация НОИ"),
    },
    {
      type: "item",
      label: "Статистическа форма 100 000 лв.",
      onClick: () => console.log("Clicked: Статистическа форма 100 000 лв."),
    },
    {
      type: "item",
      label: "Декларация за произход на средствата",
      onClick: () =>
        console.log("Clicked: Декларация за произход на средствата"),
    },
    {
      type: "item",
      label: "Декларация за презгранични преводи",
      onClick: () => console.log("Clicked: Декларация за презгранични преводи"),
    },
  ];

  const fibankInfoItems = [
    { label: "Клонове", href: "/dashboard/branches" },
    { label: "Банкомати", href: "/dashboard/atms" },
    { label: "Валутни курсове", href: "/dashboard/currency" },
    { label: "Новини", href: "/dashboard/news" },
    { label: "Промоции", href: "/dashboard/promotions" },
  ];

  const dopulnitelnoItems = [
    { label: "Помощ", href: "/dashboard/help" },
    { label: "Към сайта", href: "https://www.fibank.bg", target: "_blank" },
    { label: "Мобилно приложение", href: "/dashboard/mobile-app" },
  ];

  return (
    <aside className="w-64 bg-white shadow-xl flex flex-col min-h-screen">
      {/* User Info and New Transfer Button */}
      <div className="p-4 border-b border-gray-200">
        <div className="text-sm text-gray-400 mb-2">
          Счетоводна дата: {currentDate}
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/user-avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="text-xs text-gray-400">Потребител:</div>
            <div className="font-semibold text-sm">Филип Филипов</div>
          </div>
        </div>
        <div className="ml-[calc(40px+0.75rem)] mt-1">
          <div className="text-xs text-gray-400">Клиент:</div>
          <div className="font-semibold text-sm">УИЗ ЕООД</div>
        </div>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded flex items-center justify-center gap-2 mt-4">
          <Image
            src="/CoinIcon.png"
            alt="New Transfer Icon"
            width={20}
            height={20}
            className="mr-4"
          />
          НОВ ПРЕВОД
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-4">
        <a // Changed from Link to a
          href="#начало" // Changed to anchor link
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          <Image
            src="/home-svgrepo-com.svg"
            alt="Home Icon"
            width={20}
            height={20}
          />
          Начало
        </a>

        {/* Справки Section with Flyout Menu */}
        <FlyoutMenu
          buttonLabel="Справки"
          buttonIconSrc="/document-svgrepo-com.svg"
          menuItems={spravkiMenuItems}
        />

        <div className="flex flex-col gap-1 pt-2">
          {/* Payments Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel="Плащания"
            buttonIconSrc="/payments.svg"
            menuItems={paymentsMenuItems}
          />
          {/* Statements Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel="Извлечения"
            buttonIconSrc="/statements.svg"
            menuItems={statementsMenuItems}
          />
          <a // Changed from Link to a
            href="#сметки" // Changed to anchor link
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <Image
              src="/bill-svgrepo-com.svg"
              alt="Сметки Icon"
              width={20}
              height={20}
            />
            Сметки
          </a>
          <Link
            href="/dashboard/deposits"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <Image
              src="/deposit-svgrepo-com.svg"
              alt="Сметки Icon"
              width={20}
              height={20}
            />
            Депозити
          </Link>
          <Link
            href="/dashboard/cards"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <Image
              src="/credit-card-svgrepo-com.svg"
              alt="Сметки Icon"
              width={20}
              height={20}
            />
            Карти
          </Link>
          <a // Changed from Link to a
            href="#преводи-за-подпис" // Changed to anchor link
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium relative"
          >
            <Image
              src="/pen-svgrepo-com.svg"
              alt="Сметки Icon"
              width={20}
              height={20}
            />
            Преводи за подпис
            <span className="ml-auto bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              3
            </span>
          </a>
          <Link
            href="/dashboard/ordered-documents"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <Image
              src="/documents-electronics-svgrepo-com.svg"
              alt="Сметки Icon"
              width={20}
              height={20}
            />
            Наредени <br />
            документи
          </Link>
          {/* Services Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel="Услуги"
            buttonIconSrc="/services-svgrepo-com.svg"
            menuItems={servicesMenuItems}
          />
          {/* Utilities Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel="Комунални услуги"
            buttonIconSrc="/wallet-send-svgrepo-com.svg"
            menuItems={utilitiesMenuItems}
          />
          {/* Declarations Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel="Декларации"
            buttonIconSrc="/document-with-paper-clip-svgrepo-com.svg"
            menuItems={declarationsMenuItems}
          />
        </div>
        <div className="border-b border-gray-300 my-2" />
        {/* Информация за Fibank Dropdown */}
        <div>
          <button
            onClick={() => setIsFibankInfoOpen(!isFibankInfoOpen)}
            className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <span className="text-xs text-gray-500 font-semibold">
              ИНФОРМАЦИЯ ЗА FIBANK
            </span>
            <Image
              src="/arrow-down-3101.png"
              alt="Toggle Fibank Info"
              width={16}
              height={16}
              className={`transform transition-transform duration-200 ${
                isFibankInfoOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isFibankInfoOpen && (
            <div className="pl-4 pt-1 pb-2 flex flex-col gap-1">
              {fibankInfoItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-1.5 rounded hover:bg-gray-100 text-gray-700 text-sm"
                >
                  {item.label === "Клонове" && (
                    <Image
                      src="/bank-svgrepo-com.svg"
                      alt="Клонове Icon"
                      width={16}
                      height={16}
                    />
                  )}
                  {item.label === "Банкомати" && (
                    <Image
                      src="/cash-money-by-bank-machine-svgrepo-com.svg"
                      alt="Банкомати Icon"
                      width={16}
                      height={16}
                    />
                  )}
                  {item.label === "Валутни курсове" && (
                    <Image
                      src="/dollar-and-euro-exchange-svgrepo-com.svg"
                      alt="Валутни курсове Icon"
                      width={16}
                      height={16}
                    />
                  )}
                  {item.label === "Новини" && (
                    <Image
                      src="/news-publishing-svgrepo-com.svg"
                      alt="Новини Icon"
                      width={16}
                      height={16}
                    />
                  )}
                  {item.label === "Промоции" && (
                    <Image
                      src="/promotions-promotion-svgrepo-com.svg"
                      alt="Промоции Icon"
                      width={16}
                      height={16}
                    />
                  )}
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="border-b border-gray-300 my-2" />
        {/* Допълнително Dropdown */}
        <div>
          <button
            onClick={() => setIsDopulnitelnoOpen(!isDopulnitelnoOpen)}
            className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <span className="text-xs text-gray-500 font-semibold">
              ДОПЪЛНИТЕЛНО
            </span>
            <Image
              src="/arrow-down-3101.png"
              alt="Toggle Допълнително"
              width={16}
              height={16}
              className={`transform transition-transform duration-200 ${
                isDopulnitelnoOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isDopulnitelnoOpen && (
            <div className="pl-4 pt-1 pb-2 flex flex-col gap-1">
              {dopulnitelnoItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.target}
                  className="flex items-center gap-3 px-4 py-1.5 rounded hover:bg-gray-100 text-gray-700 text-sm"
                >
                  {item.label === "Помощ" && (
                    <Image
                      src="/information-4-svgrepo-com.svg"
                      alt="Помощ Icon"
                      width={16}
                      height={16}
                    />
                  )}
                  {item.label === "Към сайта" && (
                    <Image
                      src="computer-svgrepo-com.svg"
                      alt="Към сайта Icon"
                      width={16}
                      height={16}
                    />
                  )}
                  {item.label === "Мобилно приложение" && (
                    <Image
                      src="/mobile-app-developing-svgrepo-com.svg"
                      alt="Мобилно приложение Icon"
                      width={16}
                      height={16}
                    />
                  )}
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="border-b border-gray-300 my-2" />
        <div className="mb-1 text-xs text-gray-500 font-semibold">
          <div className="pb-6">Имате въпроси и нужда от помощ?</div>
          <div className="flex items-start">
            <div className="flex-1">
              <div>
                <Image
                  src="/Phone.png"
                  alt="Phone Icon"
                  width={16}
                  height={16}
                  className="inline-block ml-1"
                />
                <span className="text-xs text-gray-400">+359 700 10 20</span>
              </div>
              <div className="mt-4">
                <Image
                  src="/Email.png"
                  alt="Email Icon"
                  width={16}
                  height={16}
                  className="inline-block ml-1"
                />
                <span className="text-xs text-gray-400">e-bank@fibank.bg</span>
              </div>
              <div className="mt-4">
                <Link
                  href="/dashboard/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 mt-2 border border-gray-300 rounded-md text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Image
                    src="/Chat.png"
                    alt="Онлайн чат икона"
                    width={16}
                    height={16}
                  />
                  Онлайн чат
                </Link>
              </div>
            </div>
            <div className="ml-2">
              <Image
                src="/CallWoman.png"
                alt="Call Woman Icon"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
