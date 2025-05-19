"use client";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useState, useEffect } from "react"; // Import useState and useEffect

export default function Sidebar() {
  const [showSpravkiSubmenu, setShowSpravkiSubmenu] = useState(false);
  const [showPaymentsSubmenu, setShowPaymentsSubmenu] = useState(false);
  const [showStatementsSubmenu, setShowStatementsSubmenu] = useState(false); // New state for Statements submenu
  const [showServicesSubmenu, setShowServicesSubmenu] = useState(false); // New state for Services submenu
  const [showUtilitiesSubmenu, setShowUtilitiesSubmenu] = useState(false); // New state for Utilities submenu
  const [showDeclarationsSubmenu, setShowDeclarationsSubmenu] = useState(false); // New state for Declarations submenu
  const [currentDate, setCurrentDate] = useState("");

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

  return (
    <aside className="w-64 bg-white shadow-xl flex flex-col min-h-screen">
      {/* User Info and New Transfer Button */}
      <div className="p-4 border-b border-gray-200">
        <div className="text-sm text-gray-400 mb-2">
          Счетоводна дата: {currentDate}
        </div>{" "}
        {/* Date Display */}
        <div className="flex items-center gap-3">
          {" "}
          {/* Avatar and User Name aligned */}
          <Image
            src="/user-avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            {" "}
            {/* Container for User Name */}
            <div className="text-xs text-gray-400">Потребител:</div>
            <div className="font-semibold text-sm">Филип Филипов</div>
          </div>
        </div>
        {/* Client Info indented below User Name */}
        <div className="ml-[calc(40px+0.75rem)] mt-1">
          {" "}
          {/* 40px for image width + 0.75rem for gap-3 */}
          <div className="text-xs text-gray-400">Клиент:</div>
          <div className="font-semibold text-sm">УИЗ ЕООД</div>
        </div>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded flex items-center justify-center gap-2 mt-4">
          <Image
            src="/CoinIcon.png"
            alt="New Transfer Icon"
            width={20} // Adjust width as needed
            height={20} // Adjust height as needed
            className="mr-4" // Add some margin to the right of the icon
          />
          НОВ ПРЕВОД
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          <Image
            src="/HomeIcon.png"
            alt="Home Icon"
            width={20} // Adjust width as needed, similar to CoinIcon
            height={20} // Adjust height as needed, similar to CoinIcon
            // className="mr-2" // Optional: if spacing is needed like CoinIcon
          />
          Начало
        </Link>

        {/* Справки Section with Flyout Menu */}
        <div className="relative">
          {" "}
          {/* Container for positioning the flyout menu */}
          <button
            onClick={() => setShowSpravkiSubmenu(!showSpravkiSubmenu)}
            className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium" // Matched blue text from image
          >
            <div className="flex items-center gap-3">
              <Image
                src="/file.svg" // Placeholder for Spravki icon (e.g., three horizontal lines)
                alt="Справки"
                width={20}
                height={20}
              />
              <span>Справки</span>
            </div>
            <Image
              src="/arrow-down-3101.png"
              alt="Toggle submenu"
              width={16}
              height={16}
              className={`transform transition-transform duration-200 ${
                showSpravkiSubmenu ? "rotate-0" : "-rotate-90"
              }`}
            />
          </button>
          {showSpravkiSubmenu && (
            <div
              className="absolute left-full top-0 w-64 bg-white shadow-xl border border-gray-200 rounded-md py-1 z-20"
              style={{ marginLeft: "0.5rem" }}
            >
              {" "}
              {/* Added small margin for separation */}
              {[
                "ПОС транзакции - по групи",
                "ПОС транзакции за период",
                "Салда по всички сметки SSO",
                "Дневен отчет за бюдж. разпоредител",
                "Извършени услуги за клиент",
                "Изпратени SMS нотификации",
                "Дължими суми от такси",
                "Преводи по SWIFT",
                "Сесии",
              ].map((item) => (
                <div // Using div, can be Link or button if navigation/action is needed
                  key={item}
                  onClick={() => {
                    // Handle item click, e.g., navigation or closing submenu
                    console.log("Clicked:", item);
                    setShowSpravkiSubmenu(false); // Close submenu on item click
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Existing content below Справки */}
        <div className="flex flex-col gap-1 pt-2">
          {" "}
          {/* Added pt-2 for spacing */}
          {/* Payments Section with Flyout Menu */}
          <div className="relative">
            {" "}
            {/* Container for positioning the flyout menu */}
            <button
              onClick={() => setShowPaymentsSubmenu(!showPaymentsSubmenu)}
              className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
            >
              <div className="flex items-center gap-3">
                {/* Placeholder for Payments icon - you might want to add one */}
                {/* <Image src="/payments-icon.svg" alt="Плащания" width={20} height={20} /> */}
                <span>Плащания</span>
              </div>
              <Image
                src="/arrow-down-3101.png" // Assuming same arrow icon
                alt="Toggle submenu"
                width={16}
                height={16}
                className={`transform transition-transform duration-200 ${
                  showPaymentsSubmenu ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {showPaymentsSubmenu && (
              <div
                className="absolute left-full top-0 w-64 bg-white shadow-xl border border-gray-200 rounded-md py-1 z-20"
                style={{ marginLeft: "0.5rem" }}
              >
                {/* ПРЕВОДИ Section */}
                <div className="px-4 py-2 text-xs text-gray-500 font-semibold">
                  ПРЕВОДИ
                </div>
                {[
                  "Нов кредитен превод",
                  "Плащане от/към бюджета",
                  "Директен дебит",
                  "Масов превод",
                  "Преводи от файл",
                  "Нов периодичен превод",
                  "Плащания към СЕБРА",
                  "Кредитен превод СУ",
                  "Вътрешноклонов превод СУ",
                ].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      console.log("Clicked:", item);
                      setShowPaymentsSubmenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
                {/* ПОКУПКА/ПРОДАЖБА НА ВАЛУТА Section */}
                <div className="border-t border-gray-200 my-1"></div>
                <div className="px-4 py-2 text-xs text-gray-500 font-semibold">
                  ПОКУПКА/ПРОДАЖБА НА ВАЛУТА
                </div>
                {["Покупка/продажба на валута", "Договаряне на курс"].map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() => {
                        console.log("Clicked:", item);
                        setShowPaymentsSubmenu(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                    >
                      {item}
                    </div>
                  )
                )}
                {/* РЕГИСТРИ Section */}
                <div className="border-t border-gray-200 my-1"></div>
                <div className="px-4 py-2 text-xs text-gray-500 font-semibold">
                  РЕГИСТРИ
                </div>
                {["Регистър на пер. преводи", "Получатели за преводи"].map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() => {
                        console.log("Clicked:", item);
                        setShowPaymentsSubmenu(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          {/* Statements Section with Flyout Menu */}
          <div className="relative">
            <button
              onClick={() => setShowStatementsSubmenu(!showStatementsSubmenu)}
              className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
            >
              <div className="flex items-center gap-3">
                {/* Placeholder for Statements icon - you might want to add one */}
                {/* <Image src="/statements-icon.svg" alt="Извлечения" width={20} height={20} /> */}
                <span>Извлечения</span>
              </div>
              <Image
                src="/arrow-down-3101.png" // Assuming same arrow icon
                alt="Toggle submenu"
                width={16}
                height={16}
                className={`transform transition-transform duration-200 ${
                  showStatementsSubmenu ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {showStatementsSubmenu && (
              <div
                className="absolute left-full top-0 w-64 bg-white shadow-xl border border-gray-200 rounded-md py-1 z-20"
                style={{ marginLeft: "0.5rem" }}
              >
                {["Извлечение по сметка", "Извлечение по кредитна карта"].map(
                  (item) => (
                    <div
                      key={item}
                      onClick={() => {
                        console.log("Clicked:", item);
                        setShowStatementsSubmenu(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
          <Link
            href="/dashboard/accounts"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            Сметки
          </Link>
          <Link
            href="/dashboard/deposits"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            Депозити
          </Link>
          <Link
            href="/dashboard/cards"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            Карти
          </Link>
          <Link
            href="/dashboard/signature-transfers"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium relative"
          >
            Преводи за подпис
            <span className="ml-auto bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              3
            </span>
          </Link>
          <Link
            href="/dashboard/ordered-documents"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            Наредени документи
          </Link>
          {/* Services Section with Flyout Menu */}
          <div className="relative">
            <button
              onClick={() => setShowServicesSubmenu(!showServicesSubmenu)}
              className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
            >
              <div className="flex items-center gap-3">
                {/* Placeholder for Services icon - you might want to add one */}
                {/* <Image src="/services-icon.svg" alt="Услуги" width={20} height={20} /> */}
                <span>Услуги</span>
              </div>
              <Image
                src="/arrow-down-3101.png" // Assuming same arrow icon
                alt="Toggle submenu"
                width={16}
                height={16}
                className={`transform transition-transform duration-200 ${
                  showServicesSubmenu ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {showServicesSubmenu && (
              <div
                className="absolute left-full top-0 w-64 bg-white shadow-xl border border-gray-200 rounded-md py-1 z-20"
                style={{ marginLeft: "0.5rem" }}
              >
                {[
                  "Отчети по e-mail за сметки",
                  "Извлечения по e-mail за карти",
                  "Картови авторизации по e-mail",
                  "Преводи по SWIFT по e-mail",
                ].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      console.log("Clicked:", item);
                      setShowServicesSubmenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Utilities Section with Flyout Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUtilitiesSubmenu(!showUtilitiesSubmenu)}
              className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
            >
              <div className="flex items-center gap-3">
                {/* Placeholder for Utilities icon - you might want to add one */}
                {/* <Image src="/utilities-icon.svg" alt="Комунални услуги" width={20} height={20} /> */}
                <span>Комунални услуги</span>
              </div>
              <Image
                src="/arrow-down-3101.png" // Assuming same arrow icon
                alt="Toggle submenu"
                width={16}
                height={16}
                className={`transform transition-transform duration-200 ${
                  showUtilitiesSubmenu ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {showUtilitiesSubmenu && (
              <div
                className="absolute left-full top-0 w-64 bg-white shadow-xl border border-gray-200 rounded-md py-1 z-20"
                style={{ marginLeft: "0.5rem" }}
              >
                {/* ПЛАЩАНЕ НА ЗАДЪЛЖЕНИЯ Section */}
                <div className="px-4 py-2 text-xs text-gray-500 font-semibold">
                  ПЛАЩАНЕ НА ЗАДЪЛЖЕНИЯ
                </div>
                {[
                  "Задължения очакващи плащане",
                  "Плащане на задължения",
                  "Плащане на общински данъци и такси",
                  "Еднократно плащане",
                ].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      console.log("Clicked:", item);
                      setShowUtilitiesSubmenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
                {/* АБОНАТНИ СМЕТКИ Section */}
                <div className="border-t border-gray-200 my-1"></div>
                <div className="px-4 py-2 text-xs text-gray-500 font-semibold">
                  АБОНАТНИ СМЕТКИ
                </div>
                {[
                  "Добавяне на абонатна сметка",
                  "Регистрирани абонатни сметки",
                ].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      console.log("Clicked:", item);
                      setShowUtilitiesSubmenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
                {/* ДРУГИ Section */}
                <div className="border-t border-gray-200 my-1"></div>
                <div className="px-4 py-2 text-xs text-gray-500 font-semibold">
                  ДРУГИ
                </div>
                {["Известия по e-mail", "История на плащанията"].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      console.log("Clicked:", item);
                      setShowUtilitiesSubmenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Declarations Section with Flyout Menu */}
          <div className="relative">
            <button
              onClick={() =>
                setShowDeclarationsSubmenu(!showDeclarationsSubmenu)
              }
              className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
            >
              <div className="flex items-center gap-3">
                {/* Placeholder for Declarations icon - you might want to add one */}
                {/* <Image src="/declarations-icon.svg" alt="Декларации" width={20} height={20} /> */}
                <span>Декларации</span>
              </div>
              <Image
                src="/arrow-down-3101.png" // Assuming same arrow icon
                alt="Toggle submenu"
                width={16}
                height={16}
                className={`transform transition-transform duration-200 ${
                  showDeclarationsSubmenu ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            {showDeclarationsSubmenu && (
              <div
                className="absolute left-full top-0 w-64 bg-white shadow-xl border border-gray-200 rounded-md py-1 z-20"
                style={{ marginLeft: "0.5rem" }}
              >
                {[
                  "Декларация НОИ",
                  "Статистическа форма 100 000 лв.",
                  "Декларация за произход на средствата",
                  "Декларация за презгранични преводи",
                ].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      console.log("Clicked:", item);
                      setShowDeclarationsSubmenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="border-b border-gray-300 my-2" />
        {/* Информация за FIBANK Section */}
        <div className="mb-1 text-xs text-gray-500 font-semibold">
          ИНФОРМАЦИЯ ЗА FIBANK
        </div>
        <Link
          href="/dashboard/branches"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          Клонове
        </Link>
        <Link
          href="/dashboard/atms"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          Банкомати
        </Link>
        <Link
          href="/dashboard/currency"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          Валутни курсове
        </Link>
        <Link
          href="/dashboard/news"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          Новини
        </Link>
        <Link
          href="/dashboard/promotions"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          Промоции
        </Link>
        <div className="border-b border-gray-300 my-2" />
        {/* Допълнително Section */}
        <div className="mb-1 text-xs text-gray-500 font-semibold">
          ДОПЪЛНИТЕЛНО
        </div>
        <Link
          href="/dashboard/help"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          Помощ
        </Link>
        <Link
          href="https://www.fibank.bg"
          target="_blank"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          Към сайта
        </Link>
        <Link
          href="/dashboard/mobile-app"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          Мобилно приложение
        </Link>
        <div className="border-b border-gray-300 my-2" />
        <div className="mb-1 text-xs text-gray-500 font-semibold  ">
          <div className="pb-6">Имате въпроси и нужда от помощ?</div>
          <div className="flex items-start">
            {" "}
            {/* Flex container for side-by-side layout */}
            <div className="flex-1">
              {" "}
              {/* Container for text and icons */}
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
              {" "}
              {/* Container for the CallWoman image */}
              <Image
                src="/CallWoman.png"
                alt="Call Woman Icon"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
                className="" // Optional: if you want a circular image
              />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
