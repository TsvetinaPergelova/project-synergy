import React from "react";
import Image from "next/image"; // Import the Image component
import { useTranslation } from "react-i18next";

interface DashboardSectionProps {
  title: string;
  sectionId: string;
  children: React.ReactNode;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({
  title,
  sectionId,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <section id={sectionId} className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
        <div className="flex items-center">
          <button className="text-sm text-blue-600 hover:underline mr-4">
            {t("dashboardPage.dashboardSection.viewAll")} &gt;
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Image
              src="/SettingsIcon.png" // Path to your settings icon
              alt={t("dashboardPage.dashboardSection.settingsAlt")}
              width={20} // Adjust as needed
              height={20} // Adjust as needed
            />
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        {children}
      </div>
    </section>
  );
};

export default DashboardSection;
