"use client";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useEffect, useState } from "react"; // Import useState and useEffect
import FlyoutMenu, { MenuItem } from "./FlyoutMenu"; // Import the new FlyoutMenu component
import "../locales/i18n"; // Ensure i18n is initialized
import { useTranslation } from "react-i18next"; // Import useTranslation for translations

export default function Sidebar() {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const [currentDate, setCurrentDate] = useState("");
  const [isFibankInfoOpen, setIsFibankInfoOpen] = useState(false); // New state for this dropdown
  const [isDopulnitelnoOpen, setIsDopulnitelnoOpen] = useState(false); // New state for Допълнително

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
      t("sidebar.months.jan", "Януари"),
      t("sidebar.months.feb", "Февруари"),
      t("sidebar.months.mar", "Март"),
      t("sidebar.months.apr", "Април"),
      t("sidebar.months.may", "Май"),
      t("sidebar.months.jun", "Юни"),
      t("sidebar.months.jul", "Юли"),
      t("sidebar.months.aug", "Август"),
      t("sidebar.months.sep", "Септември"),
      t("sidebar.months.oct", "Октомври"),
      t("sidebar.months.nov", "Ноември"),
      t("sidebar.months.dec", "Декември"),
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, [i18n.language, t]);

  const spravkiMenuItems: MenuItem[] = [
    {
      type: "item",
      label: t(
        "sidebar.flyout.reports.posTransactionsGroups",
        "ПОС транзакции - по групи"
      ),
      onClick: () => console.log("Clicked: ПОС транзакции - по групи"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.reports.posTransactionsPeriod",
        "ПОС транзакции за период"
      ),
      onClick: () => console.log("Clicked: ПОС транзакции за период"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.reports.ssoBalances",
        "Салда по всички сметки SSO"
      ),
      onClick: () => console.log("Clicked: Салда по всички сметки SSO"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.reports.dailyBudgetReport",
        "Дневен отчет за бюдж. разпоредител"
      ),
      onClick: () => console.log("Clicked: Дневен отчет за бюдж. разпоредител"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.reports.clientServicesPerformed",
        "Извършени услуги за клиент"
      ),
      onClick: () => console.log("Clicked: Извършени услуги за клиент"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.reports.sentSmsNotifications",
        "Изпратени SMS нотификации"
      ),
      onClick: () => console.log("Clicked: Изпратени SMS нотификации"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.reports.dueFees", "Дължими суми от такси"),
      onClick: () => console.log("Clicked: Дължими суми от такси"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.reports.swiftTransfers", "Преводи по SWIFT"),
      onClick: () => console.log("Clicked: Преводи по SWIFT"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.reports.sessions", "Сесии"),
      onClick: () => console.log("Clicked: Сесии"),
    },
  ];

  const paymentsMenuItems: MenuItem[] = [
    {
      type: "header",
      label: t("sidebar.flyout.payments.headerTransfers", "ПРЕВОДИ"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.payments.newCreditTransfer",
        "Нов кредитен превод"
      ),
      onClick: () => console.log("Clicked: Нов кредитен превод"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.payments.budgetPayment",
        "Плащане от/към бюджета"
      ),
      onClick: () => console.log("Clicked: Плащане от/към бюджета"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.payments.directDebit", "Директен дебит"),
      onClick: () => console.log("Clicked: Директен дебит"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.payments.massTransfer", "Масов превод"),
      onClick: () => console.log("Clicked: Масов превод"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.payments.fileTransfers", "Преводи от файл"),
      onClick: () => console.log("Clicked: Преводи от файл"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.payments.newPeriodicTransfer",
        "Нов периодичен превод"
      ),
      onClick: () => console.log("Clicked: Нов периодичен превод"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.payments.sebraPayments", "Плащания към СЕБРА"),
      onClick: () => console.log("Clicked: Плащания към СЕБРА"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.payments.suCreditTransfer",
        "Кредитен превод СУ"
      ),
      onClick: () => console.log("Clicked: Кредитен превод СУ"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.payments.suInternalTransfer",
        "Вътрешноклонов превод СУ"
      ),
      onClick: () => console.log("Clicked: Вътрешноклонов превод СУ"),
    },
    { type: "separator" },
    {
      type: "header",
      label: t(
        "sidebar.flyout.payments.headerCurrencyExchange",
        "ПОКУПКА/ПРОДАЖБА НА ВАЛУТА"
      ),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.payments.currencyBuySell",
        "Покупка/продажба на валута"
      ),
      onClick: () => console.log("Clicked: Покупка/продажба на валута"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.payments.negotiateRate", "Договаряне на курс"),
      onClick: () => console.log("Clicked: Договаряне на курс"),
    },
    { type: "separator" },
    {
      type: "header",
      label: t("sidebar.flyout.payments.headerRegisters", "РЕГИСТРИ"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.payments.periodicTransfersRegister",
        "Регистър на пер. преводи"
      ),
      onClick: () => console.log("Clicked: Регистър на пер. преводи"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.payments.transferRecipients",
        "Получатели за преводи"
      ),
      onClick: () => console.log("Clicked: Получатели за преводи"),
    },
  ];

  const statementsMenuItems: MenuItem[] = [
    {
      type: "item",
      label: t(
        "sidebar.flyout.statements.accountStatement",
        "Извлечение по сметка"
      ),
      onClick: () => console.log("Clicked: Извлечение по сметка"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.statements.creditCardStatement",
        "Извлечение по кредитна карта"
      ),
      onClick: () => console.log("Clicked: Извлечение по кредитна карта"),
    },
  ];

  const servicesMenuItems: MenuItem[] = [
    {
      type: "item",
      label: t(
        "sidebar.flyout.services.emailAccountReports",
        "Отчети по e-mail за сметки"
      ),
      onClick: () => console.log("Clicked: Отчети по e-mail за сметки"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.services.emailCardStatements",
        "Извлечения по e-mail за карти"
      ),
      onClick: () => console.log("Clicked: Извлечения по e-mail за карти"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.services.emailCardAuthorizations",
        "Картови авторизации по e-mail"
      ),
      onClick: () => console.log("Clicked: Картови авторизации по e-mail"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.services.emailSwiftTransfers",
        "Преводи по SWIFT по e-mail"
      ),
      onClick: () => console.log("Clicked: Преводи по SWIFT по e-mail"),
    },
  ];

  const utilitiesMenuItems: MenuItem[] = [
    {
      type: "header",
      label: t(
        "sidebar.flyout.utilities.headerDebtPayments",
        "ПЛАЩАНЕ НА ЗАДЪЛЖЕНИЯ"
      ),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.utilities.pendingDebts",
        "Задължения очакващи плащане"
      ),
      onClick: () => {
        window.location.hash = "задължения-очакващи-плащане";
      },
    },
    {
      type: "item",
      label: t("sidebar.flyout.utilities.payDebts", "Плащане на задължения"),
      onClick: () => console.log("Clicked: Плащане на задължения"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.utilities.payMunicipalTaxes",
        "Плащане на общински данъци и такси"
      ),
      onClick: () => console.log("Clicked: Плащане на общински данъци и такси"),
    },
    {
      type: "item",
      label: t("sidebar.flyout.utilities.oneTimePayment", "Еднократно плащане"),
      onClick: () => console.log("Clicked: Еднократно плащане"),
    },
    { type: "separator" },
    {
      type: "header",
      label: t(
        "sidebar.flyout.utilities.headerSubscriptionAccounts",
        "АБОНАТНИ СМЕТКИ"
      ),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.utilities.addSubscriptionAccount",
        "Добавяне на абонатна сметка"
      ),
      onClick: () => console.log("Clicked: Добавяне на абонатна сметка"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.utilities.registeredSubscriptionAccounts",
        "Регистрирани абонатни сметки"
      ),
      onClick: () => console.log("Clicked: Регистрирани абонатни сметки"),
    },
    { type: "separator" },
    {
      type: "header",
      label: t("sidebar.flyout.utilities.headerOther", "ДРУГИ"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.utilities.emailNotifications",
        "Известия по e-mail"
      ),
      onClick: () => console.log("Clicked: Известия по e-mail"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.utilities.paymentHistory",
        "История на плащанията"
      ),
      onClick: () => console.log("Clicked: История на плащанията"),
    },
  ];

  const declarationsMenuItems: MenuItem[] = [
    {
      type: "item",
      label: t("sidebar.flyout.declarations.noiDeclaration", "Декларация НОИ"),
      onClick: () => console.log("Clicked: Декларация НОИ"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.declarations.statForm100k",
        "Статистическа форма 100 000 лв."
      ),
      onClick: () => console.log("Clicked: Статистическа форма 100 000 лв."),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.declarations.originOfFunds",
        "Декларация за произход на средствата"
      ),
      onClick: () =>
        console.log("Clicked: Декларация за произход на средствата"),
    },
    {
      type: "item",
      label: t(
        "sidebar.flyout.declarations.crossBorderTransfers",
        "Декларация за презгранични преводи"
      ),
      onClick: () => console.log("Clicked: Декларация за презгранични преводи"),
    },
  ];

  const fibankInfoItems = [
    {
      labelKey: "sidebar.fibankInfo.branches",
      defaultText: "Клонове",
      href: "/dashboard/branches",
      icon: "/bank-svgrepo-com.svg",
      altKey: "sidebar.fibankInfo.branchesIconAlt",
    },
    {
      labelKey: "sidebar.fibankInfo.atms",
      defaultText: "Банкомати",
      href: "/dashboard/atms",
      icon: "/cash-money-by-bank-machine-svgrepo-com.svg",
      altKey: "sidebar.fibankInfo.atmsIconAlt",
    },
    {
      labelKey: "sidebar.fibankInfo.currencyRates",
      defaultText: "Валутни курсове",
      href: "/dashboard/currency",
      icon: "/dollar-and-euro-exchange-svgrepo-com.svg",
      altKey: "sidebar.fibankInfo.currencyRatesIconAlt",
    },
    {
      labelKey: "sidebar.fibankInfo.news",
      defaultText: "Новини",
      href: "/dashboard/news",
      icon: "/news-publishing-svgrepo-com.svg",
      altKey: "sidebar.fibankInfo.newsIconAlt",
    },
    {
      labelKey: "sidebar.fibankInfo.promotions",
      defaultText: "Промоции",
      href: "/dashboard/promotions",
      icon: "/promotions-promotion-svgrepo-com.svg",
      altKey: "sidebar.fibankInfo.promotionsIconAlt",
    },
  ];

  const dopulnitelnoItems = [
    {
      labelKey: "sidebar.additional.help",
      defaultText: "Помощ",
      href: "/dashboard/help",
      icon: "/information-4-svgrepo-com.svg",
      altKey: "sidebar.additional.helpIconAlt",
    },
    {
      labelKey: "sidebar.additional.toSite",
      defaultText: "Към сайта",
      href: "https://www.fibank.bg",
      target: "_blank",
      icon: "/computer-svgrepo-com.svg",
      altKey: "sidebar.additional.toSiteIconAlt",
    },
    {
      labelKey: "sidebar.additional.mobileApp",
      defaultText: "Мобилно приложение",
      href: "/dashboard/mobile-app",
      icon: "/mobile-app-developing-svgrepo-com.svg",
      altKey: "sidebar.additional.mobileAppIconAlt",
    },
  ];

  return (
    <aside className="w-64 bg-white shadow-xl flex flex-col min-h-screen">
      {/* User Info and New Transfer Button */}
      <div className="p-4 border-b border-gray-200">
        <div className="text-sm text-gray-400 mb-2">
          {t("sidebar.accountingDate", "Счетоводна дата")}: {currentDate}
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/user-avatar.png"
            alt={t("sidebar.userAvatarAlt", "User Avatar")}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="text-xs text-gray-400">
              {t("common.user", "Потребител")}:
            </div>
            <div className="font-semibold text-sm">Филип Филипов</div>
          </div>
        </div>
        <div className="ml-[calc(40px+0.75rem)] mt-1">
          <div className="text-xs text-gray-400">
            {t("sidebar.client", "Клиент")}:
          </div>
          <div className="font-semibold text-sm">УИЗ ЕООД</div>
        </div>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded flex items-center justify-center gap-2 mt-4">
          <Image
            src="/CoinIcon.png"
            alt={t("sidebar.newTransferIconAlt", "New Transfer Icon")}
            width={20}
            height={20}
            className="mr-4"
          />
          {t("sidebar.newTransferButton", "НОВ ПРЕВОД")}
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-4">
        <a // Changed from Link to a
          href="#начало" // Changed to anchor link
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
        >
          <Image
            src="/home-svgrepo-com.svg"
            alt={t("sidebar.homeIconAlt", "Home Icon")}
            width={20}
            height={20}
          />
          {t("sidebar.nav.home", "Начало")}
        </a>

        {/* Справки Section with Flyout Menu */}
        <FlyoutMenu
          buttonLabel={t("sidebar.flyout.reports.title", "Справки")}
          buttonIconSrc="/document-svgrepo-com.svg"
          menuItems={spravkiMenuItems}
          // buttonIconAlt={t("sidebar.flyout.reports.iconAlt", "Reports Icon")}
        />

        <div className="flex flex-col gap-1 pt-2">
          {/* Payments Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel={t("sidebar.flyout.payments.title", "Плащания")}
            buttonIconSrc="/payments.svg"
            menuItems={paymentsMenuItems}
          />
          {/* Statements Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel={t("sidebar.flyout.statements.title", "Извлечения")}
            buttonIconSrc="/statements.svg"
            menuItems={statementsMenuItems}
          />
          <a // Changed from Link to a
            href="#сметки" // Changed to anchor link
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <Image
              src="/bill-svgrepo-com.svg"
              alt={t("sidebar.nav.accountsIconAlt", "Accounts Icon")}
              width={20}
              height={20}
            />
            {t("sidebar.nav.accounts", "Сметки")}
          </a>
          <Link
            href="/dashboard/deposits"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <Image
              src="/deposit-svgrepo-com.svg"
              alt={t("sidebar.nav.depositsIconAlt", "Сметки Icon")}
              width={20}
              height={20}
            />
            {t("sidebar.nav.deposits", "Депозити")}
          </Link>
          <a // Changed from Link to a
            href="#карти" // Changed to anchor link
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
          >
            <Image
              src="/credit-card-svgrepo-com.svg"
              alt={t("sidebar.nav.cardsIconAlt", "Cards Icon")} // Changed alt text
              width={20}
              height={20}
            />
            {t("sidebar.nav.cards", "Карти")}
          </a>
          <a // Changed from Link to a
            href="#преводи-за-подпис" // Changed to anchor link
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium relative"
          >
            <Image
              src="/pen-svgrepo-com.svg"
              alt={t(
                "sidebar.nav.transfersForSigningIconAlt",
                "Transfers for Signing Icon"
              )}
              width={20}
              height={20}
            />
            {t("sidebar.nav.transfersForSigning", "Преводи за подпис")}
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
              alt={t(
                "sidebar.nav.orderedDocumentsIconAlt",
                "Order Documents Icon"
              )}
              width={20}
              height={20}
            />
            <span
              dangerouslySetInnerHTML={{
                __html: t(
                  "sidebar.nav.orderedDocuments",
                  "Наредени <br />документи"
                ),
              }}
            />
          </Link>
          {/* Services Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel={t("sidebar.flyout.services.title", "Услуги")}
            buttonIconSrc="/services-svgrepo-com.svg"
            menuItems={servicesMenuItems}
          />
          {/* Utilities Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel={t(
              "sidebar.flyout.utilities.title",
              "Комунални услуги"
            )}
            buttonIconSrc="/wallet-send-svgrepo-com.svg"
            menuItems={utilitiesMenuItems}
          />
          {/* Declarations Section with Flyout Menu */}
          <FlyoutMenu
            buttonLabel={t("sidebar.flyout.declarations.title", "Декларации")}
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
              {t("sidebar.fibankInfo.title", "ИНФОРМАЦИЯ ЗА FIBANK")}
            </span>
            <Image
              src="/arrow-down-3101.png"
              alt={t("sidebar.fibankInfo.toggleAlt", "Toggle Fibank Info")}
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
                  key={item.labelKey}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-1.5 rounded hover:bg-gray-100 text-gray-700 text-sm"
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={t(item.altKey, "")}
                      width={16}
                      height={16}
                    />
                  )}
                  {t(item.labelKey, item.defaultText)}
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
              {t("sidebar.additional.title", "ДОПЪЛНИТЕЛНО")}
            </span>
            <Image
              src="/arrow-down-3101.png"
              alt={t("sidebar.additional.toggleAlt", "Toggle Additional Info")}
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
                  key={item.labelKey}
                  href={item.href}
                  target={item.target}
                  className="flex items-center gap-3 px-4 py-1.5 rounded hover:bg-gray-100 text-gray-700 text-sm"
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={t(item.altKey, "")}
                      width={16}
                      height={16}
                    />
                  )}
                  {t(item.labelKey, item.defaultText)}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="border-b border-gray-300 my-2" />
        <div className="mb-1 text-xs text-gray-500 font-semibold">
          <div className="pb-6">
            {t("sidebar.contact.questions", "Имате въпроси и нужда от помощ?")}
          </div>
          <div className="flex items-start">
            <div className="flex-1">
              <div>
                <Image
                  src="/Phone.png"
                  alt={t("sidebar.contact.phoneIconAlt", "Phone Icon")}
                  width={16}
                  height={16}
                  className="inline-block ml-1"
                />
                <span className="text-xs text-gray-400">+359 700 10 20</span>
              </div>
              <div className="mt-4">
                <Image
                  src="/Email.png"
                  alt={t("sidebar.contact.emailIconAlt", "Email Icon")}
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
                    alt={t("sidebar.contact.chatIconAlt", "Online Chat Icon")}
                    width={16}
                    height={16}
                  />
                  {t("sidebar.contact.onlineChat", "Онлайн чат")}
                </Link>
              </div>
            </div>
            <div className="ml-2">
              <Image
                src="/CallWoman.png"
                alt={t("sidebar.contact.callWomanIconAlt", "Call Woman Icon")}
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
