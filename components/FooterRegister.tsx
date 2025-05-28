import React from "react";
import "../locales/i18n"; // Ensure i18n is initialized
import { useTranslation } from "react-i18next";

const FooterRegister = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center text-sm text-gray-600">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-blue-500">
            {t("footerRegister.addAccount")}
          </a>
          <a href="#" className="hover:text-blue-500">
            {t("footerRegister.sso")} ›
          </a>
          <a href="#" className="hover:text-blue-500">
            {t("footerRegister.registrationProcess")}
          </a>
          <a href="#" className="hover:text-blue-500">
            {t("footerRegister.eSignature")}
          </a>
          <a href="#" className="hover:text-blue-500">
            {t("footerRegister.feesAndCommissions")}
          </a>
        </div>
        <p>{t("footerRegister.copyright")}</p>
      </div>
    </footer>
  );
};

export default FooterRegister;
