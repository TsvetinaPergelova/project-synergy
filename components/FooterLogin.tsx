import React from "react";
import { useTranslation } from "react-i18next";
import "../locales/i18n"; // Ensure i18n is initialized

const FooterLogin = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-50 text-gray-700 pt-10 pb-8 text-sm">
      <div className="container mx-auto px-4">
        {/* Top Contact Section */}
        <div className="text-center mb-6">
          <p className="font-semibold mb-3">{t("footerLogin.contactUs")}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span>
              <i className="fas fa-phone-alt mr-1 text-blue-600"></i>
              {t("footerLogin.phone")}{" "}
              <a
                href="tel:070012777"
                className="text-blue-600 font-semibold hover:underline"
              >
                0700 12 777
              </a>{" "}
              ({t("footerLogin.phoneAvailability", "24/7")})*
            </span>
            <span>
              <i className="fas fa-envelope mr-1 text-blue-600"></i>
              {t("footerLogin.email")}{" "}
              <a
                href="mailto:e-bank@fibank.bg"
                className="text-blue-600 font-semibold hover:underline"
              >
                e-bank@fibank.bg
              </a>
            </span>
            <span>
              <i className="fas fa-comments mr-1 text-blue-600"></i>
              {t("footerLogin.chat")}{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                {t("footerLogin.writeToUs")}
              </a>
            </span>
          </div>
        </div>

        {/* Vivacom Note */}
        <p className="text-xs text-gray-500 text-center mb-8 max-w-3xl mx-auto">
          {t("footerLogin.vivacomNote")}
        </p>

        {/* Locations Section */}
        <div className="text-center mb-8">
          <p className="font-semibold mb-3">
            {t("footerLogin.locationsTitle")}
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a href="#" className="text-blue-600 hover:underline">
              <i className="fas fa-university mr-1"></i>{" "}
              {t("footerLogin.branches")}
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              <i className="fas fa-credit-card mr-1"></i>{" "}
              {t("footerLogin.atms")}
            </a>
          </div>
        </div>

        {/* Bottom Links Section */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6 text-xs sm:text-sm">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            {t("footerLogin.addAccount")}
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            {t("footerLogin.sso")}
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            {t("footerLogin.registrationProcess")}
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            {t("footerLogin.eSignature")}
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            {t("footerLogin.feesAndCommissions")}
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 hover:underline"
          >
            {t("footerLogin.documents")}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500">
          {t("footerLogin.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default FooterLogin;
