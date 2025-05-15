"use client";

import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation"; // Import useRouter
import Input from "@/components/Input"; // Import the new Input component
import PasswordInput from "@/components/PasswordInput"; // Import the new PasswordInput component
import Button from "@/components/Button"; // Import the new Button component
import Header from "@/components/Header";
import FooterLogin from "@/components/FooterLogin"; // Import the new FooterLogin component

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "@/components/Card";

// Updated Inputs type
type Inputs = {
  userName: string; // Changed from email to userName to match the form
  password: string;
};

const LogIn = () => {
  const router = useRouter(); // Initialize useRouter
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Make onSubmit async
    console.log("Login attempt with:", data);
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Login successful:", result);
        // Store the token if needed (e.g., in localStorage or context)
        // localStorage.setItem('token', result.token);
        toast.success("Login successful!", {
          autoClose: 2000, // Auto close after 2 seconds
          onClose: () => {
            router.push("/dashboard"); // Redirect to dashboard after toast closes
          },
        });
      } else {
        console.error("Login failed:", result.message);
        toast.error(`Login failed: ${result.message || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error("An error occurred during login. Please try again.");
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* Navigation Bar */}
      <Header rightButtonText="Регистрация" rightButtonLink="/register" />

      {/* Main Content */}
      <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left Side: Login Form */}
          <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-[28rem]">
            <h2 className="text-xl font-semibold mb-2">
              Виртуален банков клон (e-fibank)
            </h2>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs text-gray-500">
                <span className="text-red-500">*</span> Потребител:
              </span>
              <span className="text-xs text-gray-500">
                <span className="text-red-500">*</span> Задължителни полета
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </span>
                <Input
                  id="userName"
                  label=""
                  type="text"
                  placeholder="Имейл адрес"
                  register={register("userName", {
                    required: "Потребителското име е задължително",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Невалиден имейл адрес",
                    },
                  })}
                  error={errors.userName}
                  className="pl-10 pr-10 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  wrapperClassName="mb-0"
                />
              </div>

              <div className="mb-6 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pt-0">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </span>
                <PasswordInput
                  id="password"
                  label=""
                  placeholder="Парола"
                  register={register("password", {
                    required: "Паролата е задължителна",
                    minLength: {
                      value: 10,
                      message: "Паролата трябва да е поне 10 символа",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/,
                      message:
                        "Паролата трябва да е поне 10 символа и да съдържа поне една малка буква, една главна буква и една цифра",
                    },
                  })}
                  error={errors.password}
                  className="pl-10 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  wrapperClassName="mb-0"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition-colors font-semibold mt-0"
              >
                ВХОД
              </Button>
            </form>
            <div className="mt-6 border-t pt-4">
              <p className="text-xs text-gray-600 mb-2">
                Защитен вход със SSL сертификат от:
              </p>
              <div className="flex items-center justify-between mb-3">
                <Image
                  src="/Thawte_logo.svg.png"
                  alt="Thawte SSL Certificate"
                  width={100}
                  height={24}
                  className="h-6 w-auto"
                />
                <span className="text-xs text-gray-500">2025-02-02</span>
              </div>
              <div className="flex justify-start space-x-4 text-xs text-blue-600">
                <a href="#" className="hover:underline">
                  <i className="fas fa-shield-alt mr-1"></i>Съвети за сигурност
                  ›
                </a>
                <a href="#" className="hover:underline">
                  <i className="fas fa-exclamation-triangle mr-1"></i>Съобщения
                  за грешка ›{" "}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Information */}
          <div className="w-full md:w-[28rem] space-y-8">
            <Card
              title="ВАЖНО!"
              titleClassName="text-lg font-semibold text-red-600 mb-2"
            >
              <p className="text-sm text-gray-700 mb-3">
                ПИБ АД УВЕДОМЯВА КАРТОДЪРЖАТЕЛИТЕ си, че има информация за
                получени фалшиви съобщения по електронната поща, които...
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Прочетете повече ›
              </a>
            </Card>

            <Card title="Разгледайте системата">
              <p className="text-sm text-gray-700 mb-3">
                Разгледайте и усетете онлайн банкирането чрез интерактивната ни
                демо версия.
              </p>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                ДЕМО ВЕРСИЯ ›
              </a>
            </Card>

            <Card title="Банкиране с Token">
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <p className="text-sm text-gray-700 mb-3">
                    Мобилност, удобство и сигурност в едно, с нашето Token
                    устройство за генериране на еднократни пароли за вход.
                  </p>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline font-medium"
                  >
                    Научете повече ›
                  </a>
                </div>
                <Image
                  src="/token_300x211.jpg"
                  alt="Token Device"
                  width={120}
                  height={84}
                  className="h-20 w-auto"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterLogin />
    </div>
  );
};

export default LogIn;
