import React from "react";

const FooterRegister = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-blue-500">
            Как да добавя сметка ›
          </a>
          <a href="#" className="hover:text-blue-500">
            Всичко с един потребител (SSO) ›
          </a>
          <a href="#" className="hover:text-blue-500">
            Процес на регистрация ›
          </a>
          <a href="#" className="hover:text-blue-500">
            Електронен подпис ›
          </a>
          <a href="#" className="hover:text-blue-500">
            Такси и комисиони ›
          </a>
        </div>
        <p>© Първа инвестиционна банка 2024-2025.</p>
      </div>
    </footer>
  );
};

export default FooterRegister;
