"use client";
import Image from "next/image";
import { useState, Fragment } from "react"; // Import Fragment

export interface MenuItem {
  type: "item" | "header" | "separator";
  label?: string;
  href?: string; // For navigation links
  onClick?: () => void;
}

interface FlyoutMenuProps {
  buttonLabel: string;
  buttonIconSrc?: string;
  menuItems: MenuItem[];
}

export default function FlyoutMenu({
  buttonLabel,
  buttonIconSrc,
  menuItems,
}: FlyoutMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    }
    // If it's a navigation item (has href), Next.js Link will handle navigation.
    // We always close the menu on item click.
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium"
      >
        <div className="flex items-center gap-3">
          {buttonIconSrc && (
            <Image
              src={buttonIconSrc}
              alt={`${buttonLabel} icon`}
              width={20}
              height={20}
            />
          )}
          <span>{buttonLabel}</span>
        </div>
        <Image
          src="/arrow-down-3101.png"
          alt="Toggle submenu"
          width={16}
          height={16}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>
      {isOpen && (
        <div
          className="absolute left-full top-0 w-64 bg-white shadow-xl border border-gray-200 rounded-md py-1 z-20"
          style={{ marginLeft: "0.5rem" }} // Added small margin for separation
        >
          {menuItems.map((item, index) => (
            <Fragment key={index}>
              {item.type === "header" && (
                <div className="px-4 py-2 text-xs text-gray-500 font-semibold">
                  {item.label}
                </div>
              )}
              {item.type === "item" && (
                <div
                  onClick={() => handleItemClick(item)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 rounded-md cursor-pointer"
                >
                  {/* If href is provided, wrap with a Link, otherwise just the label */}
                  {/* For now, direct onClick is handled. Navigation via href can be added if needed by wrapping with Next/Link */}
                  {item.label}
                </div>
              )}
              {item.type === "separator" && (
                <div className="border-t border-gray-200 my-1"></div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
