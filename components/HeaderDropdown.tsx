"use client";

import { ReactNode } from "react";

interface HeaderDropdownProps {
  buttonContent: ReactNode;
  dropdownContent: ReactNode;
  dropdownWidthClass?: string;
  ariaLabel: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function HeaderDropdown({
  buttonContent,
  dropdownContent,
  dropdownWidthClass = "w-72", // Default width
  ariaLabel,
  isOpen,
  setIsOpen,
}: HeaderDropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 text-sm font-medium hover:text-blue-700 cursor-pointer"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 ${dropdownWidthClass} bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1`}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
}
