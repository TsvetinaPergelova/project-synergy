"use client";
// import Link from "next/link";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import FooterRegister from "@/components/FooterRegister";
import InfoCard from "@/components/InfoCard";
import Image from "next/image"; // Added import for Image component
import DashboardSection from "@/components/DashboardSection"; // Added import for DashboardSection

// Define an interface for account data
interface AccountData {
  id: string;
  iconPath: string;
  type: string;
  accountNumber: string;
  currency: string;
  availability: string;
  initialBalance: string;
  currentBalance: string;
  dueTaxes: string;
  actionIconPath: string;
  actionTooltip: string;
}

// Define an interface for transaction data
interface TransactionData {
  id: string;
  paymentType: string;
  paymentSubType: string;
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
  cardType: string; // e.g., "MasterCard Standard", "Visa Electron"
  cardNumberLast4: string;
  cardIconPath: string; // Path to MasterCard or Visa icon
  currency: string;
  availability: string;
  obligations: string;
  minContribution: string;
  dueDate: string; // Format "DD/MM/YYYY"
  dueProgress: number; // Percentage for the progress bar (0-100)
  security3DStatus: "Активна" | "Неактивирана"; // Activated or Not Activated
  security3DIconPath: string; // Path to 3D secure icon (green/red)
  checked?: boolean;
}

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default to open on dashboard

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data for the accounts table
  const accountsData: AccountData[] = [
    {
      id: "1",
      iconPath: "/bill-svgrepo-com.svg", // Using available icon
      type: "Разпл. сметка физ. лица",
      accountNumber: "915010BGN0VWVT",
      currency: "BGN",
      availability: "50 150 000.00",
      initialBalance: "49 620 000.00",
      currentBalance: "50 150 000.00",
      dueTaxes: "2.33",
      actionIconPath: "/CoinIcon.png", // Using available icon
      actionTooltip: "Нов превод",
    },
    {
      id: "2",
      iconPath: "/bill-svgrepo-com.svg",
      type: "Свободна разпл. сметка",
      accountNumber: "915010BGN0WQDF",
      currency: "BGN",
      availability: "25 000.00",
      initialBalance: "28 000.00",
      currentBalance: "25 000.00",
      dueTaxes: "3.50",
      actionIconPath: "/CoinIcon.png",
      actionTooltip: "Нов превод",
    },
    {
      id: "3",
      iconPath: "/bill-svgrepo-com.svg",
      type: "Разпл. сметка физ. лица",
      accountNumber: "91501004592444",
      currency: "USD",
      availability: "0.01",
      initialBalance: "100.00",
      currentBalance: "0.01",
      dueTaxes: "2.74",
      actionIconPath: "/CoinIcon.png",
      actionTooltip: "Нов превод",
    },
  ];

  // Sample data for the transactions table
  const transactionsData: TransactionData[] = [
    {
      id: "t1",
      paymentType: "Преводно нареждане",
      paymentSubType: "Вътрешнобанков превод",
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
      paymentType: "Преводно нареждане",
      paymentSubType: "Кредитен превод",
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
      paymentType: "Преводно нареждане",
      paymentSubType: "Превод собствени сметки",
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
      cardType: "MasterCard Standard",
      cardNumberLast4: "2251",
      cardIconPath: "/Mastercard.png", // Updated path
      currency: "BGN",
      availability: "17 500.00",
      obligations: "12 000.00",
      minContribution: "2 000.00",
      dueDate: "05/02/2015",
      dueProgress: 30, // Example progress
      security3DStatus: "Активна",
      security3DIconPath: "/3d-secure-active.svg", // Replace with actual path
      checked: true,
    },
    {
      id: "c2",
      cardType: "Visa Electron",
      cardNumberLast4: "1482",
      cardIconPath: "/hd-visa-payment-logo-png-7017516947777256ndfrewd52.png", // Updated path
      currency: "EUR",
      availability: "3 000.00",
      obligations: "2 000.00",
      minContribution: "200.00",
      dueDate: "05/02/2015",
      dueProgress: 60, // Example progress
      security3DStatus: "Неактивирана",
      security3DIconPath: "/3d-secure-inactive.svg", // Replace with actual path
      checked: true,
    },
    {
      id: "c3",
      cardType: "MasterCard Standard",
      cardNumberLast4: "9640",
      cardIconPath: "/Mastercard.png", // Updated path
      currency: "USD",
      availability: "10.01",
      obligations: "20.00",
      minContribution: "2.50",
      dueDate: "05/02/2015",
      dueProgress: 10, // Example progress
      security3DStatus: "Неактивирана",
      security3DIconPath: "/3d-secure-inactive.svg", // Replace with actual path
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
              Начало
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InfoCard
                title="Нетна разполагаема наличност по сметки и депозити:"
                amount="50 203 000.03"
              />
              <InfoCard
                title="Общо текущо салдо по сметки и депозити:"
                amount="75 000.00"
              />
              <InfoCard
                title="Обща нетна разполагаемост по картови сметки:"
                amount="20 000.00"
              />
            </div>
          </section>
          {/* Further sections will be added here */}
          {/* Accounts Table Section */}
          <DashboardSection title="Сметки" sectionId="сметки">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Сметка
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Валута
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Разполагаемост
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Начално салдо за деня
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Текущо салдо
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Дължими суми от такси
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Действия
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
                          alt="Account type"
                          width={20} // Added width
                          height={20} // Added height
                          className="mr-3 flex-shrink-0"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {account.type}
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
                        title={account.actionTooltip}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Image
                          src={account.actionIconPath}
                          alt={account.actionTooltip}
                          width={20} // Added width
                          height={20} // Added height
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DashboardSection>

          {/* Transactions for Signature Table Section */}
          <DashboardSection title="ЗА ПОДПИС" sectionId="преводи-за-подпис">
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
                    Вид плащане ↓
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Платец
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Получател
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Сума и валута
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Действия
                  </th>
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
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.paymentType}
                      </div>
                      <div className="text-sm text-blue-600 hover:underline cursor-pointer">
                        {transaction.paymentSubType}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.payerName}
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
                        title="Добавяне"
                        className="p-1 hover:bg-gray-100 rounded mr-1"
                      >
                        <Image
                          src={transaction.actions.addIconPath}
                          alt="Добавяне"
                          width={20}
                          height={20}
                        />
                      </button>
                      <button
                        title="Редактиране"
                        className="p-1 hover:bg-gray-100 rounded mr-1"
                      >
                        <Image
                          src={transaction.actions.editIconPath}
                          alt="Редактиране"
                          width={20}
                          height={20}
                        />
                      </button>
                      <button
                        title="Отказване"
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Image
                          src={transaction.actions.cancelIconPath}
                          alt="Отказване"
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
                        ПОДПИШЕТЕ
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center">
                        <Image
                          src="/token-svgrepo-com.svg"
                          alt="Token"
                          width={16}
                          height={16}
                          className="mr-2"
                        />{" "}
                        TOKEN
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 flex items-center">
                        <Image
                          src="/cancel-delete-cross-svgrepo-com.svg"
                          alt="Откажете"
                          width={16}
                          height={16}
                          className="mr-2"
                        />{" "}
                        ОТКАЖЕТЕ
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </DashboardSection>

          {/* Cards Table Section */}
          <DashboardSection title="КАРТИ" sectionId="карти">
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
                    Карта
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Валута
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Наличност
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Задължения
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Мин. вноска
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Погасете до
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    3D Сигурност
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
                          alt={card.cardType}
                          width={40}
                          height={25}
                          className="mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {card.cardType}
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
                          alt={card.security3DStatus}
                          width={24}
                          height={16}
                          className="mr-2"
                        />
                        <span
                          className={`text-sm ${
                            card.security3DStatus === "Активна"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {card.security3DStatus}
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
                      ПОГАСЕТЕ &gt;
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </DashboardSection>
        </main>
      </div>
      <div className="w-full">
        {" "}
        {/* Footer container, no longer fixed */}
        <FooterRegister />
      </div>
    </div>
  );
}
