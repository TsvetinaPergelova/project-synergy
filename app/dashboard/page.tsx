"use client";

// import Link from "next/link";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../locales/i18n"; // Import i18n for translation
import FooterRegister from "@/components/FooterRegister";
import InfoCard from "@/components/InfoCard";
import Image from "next/image"; // Added import for Image component
import DashboardSection from "@/components/DashboardSection"; // Added import for DashboardSection

// Define an interface for account data
interface AccountData {
  id: string;
  iconPath: string;
  typeKey: string;
  accountNumber: string;
  currency: string;
  availability: string;
  initialBalance: string;
  currentBalance: string;
  dueTaxes: string;
  actionIconPath: string;
  actionTooltipKey: string;
}

// Define an interface for transaction data
interface TransactionData {
  id: string;
  paymentTypeKey: string;
  paymentSubTypeKey: string;
  payerName: string;
  payerAccount: string;
  receiverName: string;
  receiverAccount: string;
  amount: string;
  currency: string;
  actions: {
    addIconPath: string;
    editIconPath: string;
    cancelIconPath: string;
  };
}

// Define an interface for card data
interface CardData {
  id: string;
  cardTypeKey: string; // e.g., "MasterCard Standard", "Visa Electron"
  cardNumberLast4: string;
  cardIconPath: string; // Path to MasterCard or Visa icon
  currency: string;
  availability: string;
  obligations: string;
  minContribution: string;
  dueDate: string; // Format "DD/MM/YYYY"
  dueProgress: number; // Percentage for the progress bar (0-100)
  security3DStatusKey: "Активна" | "Неактивирана"; // Activated or Not Activated
  security3DIconPath: string; // Path to 3D secure icon (green/red)
  checked?: boolean;
}

// Define an interface for pending payment data
interface PendingPaymentData {
  id: string;
  nameKey: string;
  iconPath: string;
  date: string; // "Към дата"
  autoPaymentKey: "Да" | "Не" | "N/a"; // "Автом. плащане"
  amount: string; // "Сума"
  currency: string;
  infoIconPath: string;
  checked?: boolean; // For the checkbox
}

// Interface for Last 5 Transfers
interface LastTransactionData {
  id: string;
  typeIconPath: string;
  date: string;
  documentNameKey: string;
  documentRef: string;
  recipientPayer: string;
  account: string;
  amountIconPath: string;
  amount: string;
  currency: string;
}

// Define an interface for credit data
interface CreditData {
  id: string;
  typeKey: string;
  size: string;
  currency: string;
  interestRate: string;
  monthlyPayment: string;
  paymentDate: string;
  dueDate: string;
  iconPath: string;
  progressColor: string;
  progressWidth: string;
}

// Define an interface for deposit data
interface DepositData {
  id: string;
  depositIconPath: string;
  nameKey: string;
  accountNumber: string;
  currency: string;
  availability: string;
  accruedInterest: string;
  maturityDate: string;
  maturityProgress: number;
  daysRemaining?: number;
  actionIcon1Path: string;
  actionIcon2Path: string;
  actionIcon3Path: string;
  actionIcon4Path: string;
}

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to open on dashboard
  const { t, i18n } = useTranslation(); // Initialize translation function

  useEffect(() => {
    if (document.documentElement) {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]); // Add i18n.language as a dependency

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data for the accounts table
  const accountsData: AccountData[] = [
    {
      id: "1",
      iconPath: "/bill-svgrepo-com.svg", // Using available icon
      typeKey: "Разпл. сметка физ. лица",
      accountNumber: "915010BGN0VWVT",
      currency: "BGN",
      availability: "50 150 000.00",
      initialBalance: "49 620 000.00",
      currentBalance: "50 150 000.00",
      dueTaxes: "2.33",
      actionIconPath: "/CoinIcon.png", // Using available icon
      actionTooltipKey: "Нов превод",
    },
    {
      id: "2",
      iconPath: "/bill-svgrepo-com.svg",
      typeKey: "Свободна разпл. сметка",
      accountNumber: "915010BGN0WQDF",
      currency: "BGN",
      availability: "25 000.00",
      initialBalance: "28 000.00",
      currentBalance: "25 000.00",
      dueTaxes: "3.50",
      actionIconPath: "/CoinIcon.png",
      actionTooltipKey: "Нов превод",
    },
    {
      id: "3",
      iconPath: "/bill-svgrepo-com.svg",
      typeKey: "Разпл. сметка физ. лица",
      accountNumber: "91501004592444",
      currency: "USD",
      availability: "0.01",
      initialBalance: "100.00",
      currentBalance: "0.01",
      dueTaxes: "2.74",
      actionIconPath: "/CoinIcon.png",
      actionTooltipKey: "Нов превод",
    },
  ];

  // Sample data for the transactions table
  const transactionsData: TransactionData[] = [
    {
      id: "t1",
      paymentTypeKey: "Преводно нареждане",
      paymentSubTypeKey: "Вътрешнобанков превод",
      payerName: "Филип Илиев Филипов",
      payerAccount: "BG14FINV915010BGN0VWVT",
      receiverName: "Бортис ООД",
      receiverAccount: "BG19FINV91501015849744",
      amount: "1 500.00",
      currency: "BGN",
      actions: {
        addIconPath: "/plus-large-svgrepo-com.svg",
        editIconPath: "/edit-2-svgrepo-com.svg",
        cancelIconPath: "/cancel-delete-cross-svgrepo-com.svg",
      },
    },
    {
      id: "t2",
      paymentTypeKey: "Преводно нареждане",
      paymentSubTypeKey: "Кредитен превод",
      payerName: "Филип Илиев Филипов",
      payerAccount: "BG14FINV915010BGN0VWVT",
      receiverName: "Нимбус ООД",
      receiverAccount: "BG23UNCR70001521769897",
      amount: "500.00",
      currency: "BGN",
      actions: {
        addIconPath: "/plus-large-svgrepo-com.svg",
        editIconPath: "/edit-2-svgrepo-com.svg",
        cancelIconPath: "/cancel-delete-cross-svgrepo-com.svg",
      },
    },
    {
      id: "t3",
      paymentTypeKey: "Преводно нареждане",
      paymentSubTypeKey: "Превод собствени сметки",
      payerName: "Филип Илиев Филипов",
      payerAccount: "BG57FINV915010BGN0WQDF",
      receiverName: "УИЗ ЕООД",
      receiverAccount: "BG44FINV91501004592444",
      amount: "200.00",
      currency: "USD",
      actions: {
        addIconPath: "/plus-large-svgrepo-com.svg",
        editIconPath: "/edit-2-svgrepo-com.svg",
        cancelIconPath: "/cancel-delete-cross-svgrepo-com.svg",
      },
    },
  ];

  // Sample data for the cards table
  const cardsData: CardData[] = [
    {
      id: "c1",
      cardTypeKey: "MasterCard Standard",
      cardNumberLast4: "2251",
      cardIconPath: "/Mastercard.png", // Updated path
      currency: "BGN",
      availability: "17 500.00",
      obligations: "12 000.00",
      minContribution: "2 000.00",
      dueDate: "05/08/2025",
      dueProgress: 30, // Example progress
      security3DStatusKey: "Активна",
      security3DIconPath: "/Active3DCard.png",
      checked: true,
    },
    {
      id: "c2",
      cardTypeKey: "Visa Electron",
      cardNumberLast4: "1482",
      cardIconPath: "/hd-visa-payment-logo-png-7017516947777256ndfrewd52.png", // Updated path
      currency: "EUR",
      availability: "3 000.00",
      obligations: "2 000.00",
      minContribution: "200.00",
      dueDate: "05/08/2025",
      dueProgress: 60, // Example progress
      security3DStatusKey: "Неактивирана",
      security3DIconPath: "/NotActivated3Dcard.png",
      checked: true,
    },
    {
      id: "c3",
      cardTypeKey: "MasterCard Standard",
      cardNumberLast4: "9640",
      cardIconPath: "/Mastercard.png", // Updated path
      currency: "USD",
      availability: "10.01",
      obligations: "20.00",
      minContribution: "2.50",
      dueDate: "05/08/2025",
      dueProgress: 10, // Example progress
      security3DStatusKey: "Неактивирана",
      security3DIconPath: "/NotActivated3Dcard.png",
    },
  ];

  // Sample data for the pending payments table
  const pendingPaymentsData: PendingPaymentData[] = [
    {
      id: "p1",
      nameKey: "Сметка за ток (офис)",
      iconPath: "/plug-plugin-svgrepo-com.svg",
      date: "20/01/2026",
      autoPaymentKey: "Не",
      amount: "25.00",
      currency: "BGN",
      infoIconPath: "/info-svgrepo-com.svg",
      checked: false,
    },
    {
      id: "p2",
      nameKey: "Сметка за парно (офис)",
      iconPath: "/health-medical-medicine-termometer-svgrepo-com.svg",
      date: "20/01/2026",
      autoPaymentKey: "Не",
      amount: "22 500.00",
      currency: "BGN",
      infoIconPath: "/info-svgrepo-com.svg",
      checked: true,
    },
    {
      id: "p3",
      nameKey: "Vivacom (Личен GSM)",
      iconPath: "/mobile-phone-svgrepo-com.svg",
      date: "18/09/2025",
      autoPaymentKey: "Да",
      amount: "70.00",
      currency: "BGN",
      infoIconPath: "/info-svgrepo-com.svg",
      checked: true,
    },
    {
      id: "p4",
      nameKey: "Такса смет",
      iconPath: "/credit-card-pay-svgrepo-com.svg",
      date: "31/12/2025",
      autoPaymentKey: "N/a",
      amount: "36.45",
      currency: "BGN",
      infoIconPath: "/info-svgrepo-com.svg",
      checked: true,
    },
  ];

  // Sample data for the Last 5 Transfers table
  const lastTransactionsData: LastTransactionData[] = [
    {
      id: "lt1",
      typeIconPath: "/GreenArrow.png",
      date: "18/05/2025",
      documentNameKey: "Получен превод в лева",
      documentRef: "HDOPIUB150752806",
      recipientPayer: "Йордан Йорданов Геновски",
      account: "BG57FINV915010BGN0WQDF",
      amountIconPath: "/GreenPlus.png",
      amount: "210 500.00",
      currency: "BGN",
    },
    {
      id: "lt2",
      typeIconPath: "/GreenArrow.png",
      date: "17/05/2025",
      documentNameKey: "Получен превод във валута",
      documentRef: "HDOPIUB143286034",
      recipientPayer: "UAB PARVUS FINANCE GROUP",
      account: "LT527300010136139978",
      amountIconPath: "/GreenPlus.png",
      amount: "1 000 300.00",
      currency: "USD",
    },
    {
      id: "lt3",
      typeIconPath: "/RedArrow.png",
      date: "15/05/2025",
      documentNameKey: "Кредитен превод",
      documentRef: "S24PWUB143250023",
      recipientPayer: "Филип Илиев Филипов",
      account: "BG14FINV915010BGN0VWVT",
      amountIconPath: "/RedMinus.png",
      amount: "2 300 750.00",
      currency: "BGN",
    },
    {
      id: "lt4",
      typeIconPath: "/GreenArrow.png",
      date: "13/05/2025",
      documentNameKey: "Получен превод в лева",
      documentRef: "HDOPIUB142458275",
      recipientPayer: "WHIZ EOOD",
      account: "BG57FINV915010BGN0WQDF",
      amountIconPath: "/GreenPlus.png",
      amount: "500.00",
      currency: "BGN",
    },
    {
      id: "lt5",
      typeIconPath: "/RedArrow.png",
      date: "12/05/2025",
      documentNameKey: "Вътрешнобанков превод",
      documentRef: "S18FTRQ143300001",
      recipientPayer: "Филип Илиев Филипов",
      account: "BG44FINV91501004592444",
      amountIconPath: "/RedMinus.png",
      amount: "100.00",
      currency: "USD",
    },
  ];

  // Sample data for the credits table
  const creditsData: CreditData[] = [
    {
      id: "1",
      typeKey: "Потребителски кредит",
      size: "10 000.00",
      currency: "BGN",
      interestRate: "7.70%",
      monthlyPayment: "200.00",
      paymentDate: "05/02/2025",
      dueDate: "05/12/2026",
      iconPath: "/credits-svgrepo-com.svg",
      progressColor: "bg-green-500",
      progressWidth: "w-3/4",
    },
    {
      id: "2",
      typeKey: 'Жилищен кредит "Право на избор"',
      size: "300 000.00",
      currency: "EUR",
      interestRate: "5.80%",
      monthlyPayment: "2 200.00",
      paymentDate: "25/01/2025",
      dueDate: "05/03/2030",
      iconPath: "/credits-svgrepo-com.svg",
      progressColor: "bg-red-500",
      progressWidth: "w-1/2",
    },
    {
      id: "3",
      typeKey: "Супер кредит",
      size: "150 000.00",
      currency: "USD",
      interestRate: "6.50%",
      monthlyPayment: "2 662.00",
      paymentDate: "30/01/2025",
      dueDate: "05/07/2026",
      iconPath: "/credits-svgrepo-com.svg",
      progressColor: "bg-yellow-500",
      progressWidth: "w-2/3",
    },
  ];

  // Sample data for the deposits table
  const depositsData: DepositData[] = [
    {
      id: "dep1",
      depositIconPath: "/deposit-svgrepo-com.svg",
      nameKey: "Свободен депозит - 12 м.",
      accountNumber: "91502016356335",
      currency: "USD",
      availability: "30 000 000.00", // As per OCR
      accruedInterest: "20 000.00", // As per OCR
      maturityDate: "31/07/2025",
      maturityProgress: 70, // Estimated from image
      actionIcon1Path: "/edit-2-svgrepo-com.svg", // Placeholder for first action icon
      actionIcon2Path: "/list-circle-svgrepo-com.svg", // List/details icon
      actionIcon3Path: "/CoinIcon.png", // "Нов превод" icon
      actionIcon4Path: "/MessageIcon.png", // Message/notification icon
    },
    {
      id: "dep2",
      depositIconPath: "/deposit-svgrepo-com.svg",
      nameKey: "Ср. депозит - физ. лица - 6 м.",
      accountNumber: "915010BGNOUCTZ",
      currency: "BGN",
      availability: "100 000.00",
      accruedInterest: "1 300.00",
      maturityDate: "03/03/2025",
      maturityProgress: 85, // Estimated from image
      daysRemaining: 145,
      actionIcon1Path: "/edit-2-svgrepo-com.svg",
      actionIcon2Path: "/list-circle-svgrepo-com.svg",
      actionIcon3Path: "/CoinIcon.png",
      actionIcon4Path: "/MessageIcon.png",
    },
    {
      id: "dep3",
      depositIconPath: "/deposit-svgrepo-com.svg",
      nameKey: 'Депозит "6 x 6"',
      accountNumber: "91501004592050",
      currency: "EUR",
      availability: "50 000.00",
      accruedInterest: "920.00",
      maturityDate: "05/10/2025", // Date partially obscured, using an example
      maturityProgress: 45, // Estimated from image
      actionIcon1Path: "/edit-2-svgrepo-com.svg",
      actionIcon2Path: "/list-circle-svgrepo-com.svg",
      actionIcon3Path: "/CoinIcon.png",
      actionIcon4Path: "/MessageIcon.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <DashboardHeader showMenuButton={true} onMenuClick={toggleSidebar} />
      </div>
      <div className="flex flex-1 overflow-hidden">
        {" "}
        {/* Ensures this section takes remaining height and handles overflow */}
        {isSidebarOpen && <Sidebar />}
        <main className="flex-1 p-4 overflow-y-auto transition-all duration-300">
          {/* Your main page content goes here */}
          <section id="начало" className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              {t("dashboardPage.homeTitle")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoCard
                title={t("dashboardPage.netAvailableBalance")}
                amount="50 203 000.03"
              />
              <InfoCard
                title={t("dashboardPage.totalCurrentBalance")}
                amount="75 000.00"
              />
              <InfoCard
                title={t("dashboardPage.totalNetCardAvailability")}
                amount="20 000.00"
              />
            </div>
          </section>
          {/* Further sections will be added here */}
          {/* Accounts Table Section */}
          <DashboardSection
            title={t("dashboardPage.accounts", "Сметки")}
            sectionId="сметки"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderAccount")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderCurrency")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderAvailability")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderInitialBalance")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderCurrentBalance")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderDueTaxes")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderActions")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {accountsData.map((account) => (
                  <tr key={account.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Image
                          src={account.iconPath}
                          alt={t("dashboardPage.altAccountType")}
                          width={20}
                          height={20}
                          className="mr-3 flex-shrink-0"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {t("account.typeKey")}
                          </div>
                          <div className="text-sm text-gray-500">
                            {account.accountNumber}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {account.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {account.availability}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {account.initialBalance}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {account.currentBalance}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer text-right">
                      {account.dueTaxes}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        title={t("account.actionTooltipKey")}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Image
                          src={account.actionIconPath}
                          alt={t("account.actionTooltipKey")}
                          width={20}
                          height={20}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DashboardSection>

          {/* Transactions for Signature Table Section */}
          <DashboardSection
            title={t("dashboardPage.forSigning")}
            sectionId="преводи-за-подпис"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                      aria-label={t("dashboardPage.selectAllForSigning")}
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderPaymentType")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderPayer")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderReceiver")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t(
                      "dashboardPage.tableHeaderAmountAndCurrency",
                      "Сума и валута"
                    )}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactionsData.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                        defaultChecked={
                          transaction.id === "t1" || transaction.id === "t3"
                        }
                        aria-label={t("dashboardPage.selectTransaction", {
                          id: transaction.id,
                        })}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {t("transaction.paymentTypeKey")}
                      </div>
                      <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                        {transaction.paymentSubTypeKey}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {t("transaction.payerName")}
                      </div>
                      <div className="text-sm text-gray-500">
                        {transaction.payerAccount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.receiverName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {transaction.receiverAccount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {transaction.amount} {transaction.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        title={t("dashboardPage.tooltipAdd")}
                        className="p-1 hover:bg-gray-100 rounded mr-1"
                      >
                        <Image
                          src={transaction.actions.addIconPath}
                          alt={t("dashboardPage.tooltipAdd")}
                          width={20}
                          height={20}
                        />
                      </button>
                      <button
                        title={t("dashboardPage.tooltipEdit")}
                        className="p-1 hover:bg-gray-100 rounded mr-1"
                      >
                        <Image
                          src={transaction.actions.editIconPath}
                          alt={t("dashboardPage.tooltipEdit")}
                          width={20}
                          height={20}
                        />
                      </button>
                      <button
                        title={t("dashboardPage.tooltipCancelAction")}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Image
                          src={transaction.actions.cancelIconPath}
                          alt={t("dashboardPage.tooltipCancelAction")}
                          width={20}
                          height={20}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan={6} className="px-6 py-3 text-left">
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center">
                        <Image
                          src="/pen-nib-svgrepo-com.svg"
                          alt="Подпишете"
                          width={16}
                          height={16}
                          className="mr-2"
                        />{" "}
                        {t("dashboardPage.buttonSignSelected")}
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center">
                        <Image
                          src="/token-svgrepo-com.svg"
                          alt="Token"
                          width={16}
                          height={16}
                          className="mr-2"
                        />{" "}
                        {t("dashboardPage.buttonToken")}
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 flex items-center">
                        <Image
                          src="/cancel-delete-cross-svgrepo-com.svg"
                          alt="Откажете"
                          width={16}
                          height={16}
                          className="mr-2"
                        />{" "}
                        {t("dashboardPage.buttonCancelSelected")}
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </DashboardSection>

          {/* Cards Table Section */}
          <DashboardSection title={t("dashboardPage.cards")} sectionId="карти">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                      defaultChecked
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderCard")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderCurrency")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderAvailability2")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderObligations")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderMinContribution")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderDueDate")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeader3DSecurity")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cardsData.map((card) => (
                  <tr key={card.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                        defaultChecked={card.checked}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Image
                          src={card.cardIconPath}
                          alt={card.cardTypeKey}
                          width={40}
                          height={25}
                          className="mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {card.cardTypeKey}
                          </div>
                          <div className="text-sm text-gray-500">
                            ****{card.cardNumberLast4}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {card.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {card.availability}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-right">
                      {card.obligations}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-right">
                      {card.minContribution}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {card.dueDate}
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className="bg-green-500 h-1.5 rounded-full"
                          style={{ width: `${card.dueProgress}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Image
                          src={card.security3DIconPath}
                          alt={card.security3DStatusKey}
                          width={24}
                          height={16}
                          className="mr-2"
                        />
                        <span
                          className={`text-sm ${
                            card.security3DStatusKey === "Активна"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {card.security3DStatusKey}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan={8} className="px-6 py-3 text-left">
                    <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700">
                      {t("dashboardPage.buttonRepay")} &gt;
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </DashboardSection>

          {/* Pending Payments Table Section */}
          <DashboardSection
            title={t("dashboardPage.pendingPayments")}
            sectionId="задължения-очакващи-плащане"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                      // Add logic for select/deselect all if needed
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderName")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderDateDue")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                  >
                    {t("dashboardPage.tableHeaderAutoPayment")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                  >
                    {t("dashboardPage.tableHeaderAmount")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {/* Actions/Info Header - can be empty or have a title */}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingPaymentsData.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                        defaultChecked={payment.checked}
                        // Add onChange handler if individual selection is needed
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Image
                          src={payment.iconPath}
                          alt={t("dashboardPage.iconPath")} // Alt text can be improved if needed
                          width={32} // Increased size
                          height={32} // Increased size
                          className="mr-3 flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 p-1" // Adjusted Tailwind classes
                        />
                        <div className="text-sm font-medium text-gray-900">
                          {payment.nameKey}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {payment.autoPaymentKey}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-right">
                      {payment.amount} {payment.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                      <button
                        title={t("dashboardPage.Information")}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Image
                          src={payment.infoIconPath}
                          alt={t("dashboardPage.Information")}
                          width={20}
                          height={20}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-left">
                    <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700">
                      {t("dashboardPage.buttonPay")} &gt;
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </DashboardSection>

          {/* Last 5 Transfers Table Section */}
          <DashboardSection
            title={t("dashboardPage.last5Transfers")}
            sectionId="последни-5-превода"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderType")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderDate")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderDocumentAndRef")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderRecipientPayer")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderAccount")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderAmountAndCurrency")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {lastTransactionsData.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Image
                        src={transaction.typeIconPath}
                        alt="Transaction type"
                        width={32}
                        height={32}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <a href="#" className="text-blue-600 hover:underline">
                        {transaction.documentNameKey}
                      </a>
                      <div className="text-xs text-gray-500">
                        {transaction.documentRef}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.recipientPayer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.account}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <Image
                          src={transaction.amountIconPath}
                          alt="Amount sign"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                        {transaction.amount} {transaction.currency}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DashboardSection>

          {/* Credits Table Section */}
          <DashboardSection
            title={t("dashboardPage.credits")}
            sectionId="кредити"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderCreditType")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderCurrency")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderInterestRate")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderDueInstallment")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderInstallmentDate")}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t("dashboardPage.tableHeaderMaturity")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {creditsData.map((credit) => (
                  <tr key={credit.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Image
                          src={credit.iconPath}
                          alt="Credit type"
                          width={24}
                          height={24}
                          className="mr-3 flex-shrink-0"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {credit.typeKey}
                          </div>
                          <div className="text-sm text-gray-500">
                            Размер: {credit.size}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {credit.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {credit.interestRate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium text-center">
                      {credit.monthlyPayment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{credit.paymentDate}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
                        <div
                          className={`${credit.progressColor} h-2.5 rounded-full ${credit.progressWidth}`}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {credit.dueDate}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-4 whitespace-nowrap text-left"
                  >
                    <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                      {t("dashboardPage.buttonPay")} &gt;
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </DashboardSection>

          {/* Deposits Section */}
          <DashboardSection
            title={t("dashboardPage.deposits")}
            sectionId="deposits"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("dashboardPage.tableHeaderDeposit")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("dashboardPage.tableHeaderCurrency")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("dashboardPage.tableHeaderAvailability")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("dashboardPage.tableHeaderAccruedInterest")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("dashboardPage.tableHeaderMaturity")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t("dashboardPage.tableHeaderActions")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {depositsData.map((deposit) => (
                    <tr key={deposit.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Image
                            src={deposit.depositIconPath}
                            alt="deposit icon"
                            width={24}
                            height={24}
                            className="mr-3 flex-shrink-0"
                          />
                          <div>
                            <div className="font-medium text-gray-900">
                              {deposit.nameKey}
                            </div>
                            <div className="text-xs text-blue-600 hover:underline cursor-pointer">
                              {deposit.accountNumber} &gt;
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{deposit.currency}</td>
                      <td className="px-6 py-4">{deposit.availability}</td>
                      <td className="px-6 py-4">{deposit.accruedInterest}</td>
                      <td className="px-6 py-4">
                        <div>{deposit.maturityDate}</div>
                        <div
                          className="w-full bg-gray-200 rounded-full h-1.5 mt-1"
                          title={
                            deposit.daysRemaining
                              ? `Остават ${deposit.daysRemaining} дни`
                              : undefined
                          }
                        >
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: `${deposit.maturityProgress}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-1">
                          <button
                            className="p-1 hover:bg-gray-100 rounded"
                            title={t("dashboardPage.iconEdit", "Редактирай")}
                          >
                            <Image
                              src={deposit.actionIcon1Path}
                              alt={t("dashboardPage.iconEdit", "Редактирай")}
                              width={18}
                              height={18}
                            />
                          </button>
                          <button
                            className="p-1 hover:bg-gray-100 rounded"
                            title={t("dashboardPage.iconExtract", "Извлечение")}
                          >
                            <Image
                              src={deposit.actionIcon2Path}
                              alt={t("dashboardPage.iconExtract", "Извлечение")}
                              width={18}
                              height={18}
                            />
                          </button>
                          <button
                            className="p-1 hover:bg-gray-100 rounded"
                            title={t("account.actionTooltipKey")}
                          >
                            <Image
                              src={deposit.actionIcon3Path}
                              alt={t("account.actionTooltipKey")}
                              width={18}
                              height={18}
                            />
                          </button>
                          <button
                            className="p-1 hover:bg-gray-100 rounded"
                            title={t("dashboardPage.iconMessage", "Съобщение")}
                          >
                            <Image
                              src={deposit.actionIcon4Path}
                              alt={t("dashboardPage.iconMessage", "Съобщение")}
                              width={18}
                              height={18}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DashboardSection>
        </main>
      </div>
      <div className="w-full bg-gray-50">
        {" "}
        {/* Footer container, no longer fixed */}
        <FooterRegister />
      </div>
    </div>
  );
}
