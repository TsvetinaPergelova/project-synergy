import React from "react";

const FooterLogin = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-10 pb-8 text-sm">
      <div className="container mx-auto px-4">
        {/* Top Contact Section */}
        <div className="text-center mb-6">
          <p className="font-semibold mb-3">
            За всички въпроси нашите служители Ви очакват на:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span>
              <i className="fas fa-phone-alt mr-1 text-blue-600"></i>
              Телефон:{" "}
              <a
                href="tel:070012777"
                className="text-blue-600 font-semibold hover:underline"
              >
                0700 12 777
              </a>{" "}
              (денонощно)*
            </span>
            <span>
              <i className="fas fa-envelope mr-1 text-blue-600"></i>
              E-mail:{" "}
              <a
                href="mailto:e-bank@fibank.bg"
                className="text-blue-600 font-semibold hover:underline"
              >
                e-bank@fibank.bg
              </a>
            </span>
            <span>
              <i className="fas fa-comments mr-1 text-blue-600"></i>
              Чат:{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Пишете ни
              </a>
            </span>
          </div>
        </div>

        {/* Vivacom Note */}
        <p className="text-xs text-gray-500 text-center mb-8 max-w-3xl mx-auto">
          * Разговорите към национален номер 0700 12 777 се таксуват според
          определените от Вашия оператор цени за обаждане към номера тип 0700 на
          Vivacom. За абонати на Vivacom обаждане към този номер се таксува като
          обаждане към стационарен номер в мрежата на Vivacom.
        </p>

        {/* Locations Section */}
        <div className="text-center mb-8">
          <p className="font-semibold mb-3">Вижте къде се намираме:</p>
          <div className="flex justify-center items-center space-x-6">
            <a href="#" className="text-blue-600 hover:underline">
              <i className="fas fa-university mr-1"></i> Клонове ›
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              <i className="fas fa-credit-card mr-1"></i> Банкомати ›
            </a>
          </div>
        </div>

        {/* Bottom Links Section */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6 text-xs sm:text-sm">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            Как да добавя сметка ›
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            Всичко с един потребител (SSO) ›
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            Процес на регистрация ›
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            Електронен подпис ›
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            Такси и комисиони ›
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            Документи ›
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500">
          © Първа инвестиционна банка 2024-2025.
        </p>
      </div>
    </footer>
  );
};

export default FooterLogin;
