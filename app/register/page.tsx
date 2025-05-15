"use client"; // Add this at the top for client components
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form"; // Import useForm
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Input from "@/components/Input"; // Import the new Input component
import PasswordInput from "@/components/PasswordInput"; // Import the new PasswordInput component
import Button from "@/components/Button"; // Import the new Button component
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

// Define an interface for your form inputs
interface IRegisterInputs {
  egn: string;
  lnch?: string; // Optional field
  nameCyrillic: string;
  nameLatin: string;
  email: string;
  phone: string;
  address: string;
  username: string;
  password: string;
  repeatPassword: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    watch, // To watch password field for comparison
    formState: { errors },
  } = useForm<IRegisterInputs>();

  const passwordValue = watch("password"); // Get current password value
  const router = useRouter(); // Initialize router for navigation

  const onSubmit: SubmitHandler<IRegisterInputs> = async (data) => {
    // Remove the repeatPassword field as it's not needed for the backend
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { repeatPassword, ...submissionData } = data;
    console.log("Submitting data:", submissionData);

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle server-side validation errors or other issues
        console.error("Registration failed:", result.message);
        toast.error(
          `Registration failed: ${result.message || "Unknown error"}`
        );
        return;
      }

      // Handle successful registration
      console.log("Registration successful:", result);
      toast.success("Registration successful! You can now log in.", {
        autoClose: 2000, // Auto close after 2 seconds
        onClose: () => {
          router.push("/"); // Redirect to login page (root path) after toast closes
        },
      });
    } catch (error) {
      console.error("An error occurred during registration:", error);
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      toast.error(`An error occurred: ${errorMessage}. Please try again.`);
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-fibank-signature.svg"
            alt="Fibank Logo"
            width={150} // Replace with actual width of your logo
            height={40} // Replace with actual height of your logo
            className="h-8 w-auto" // You might adjust or remove className depending on how width/height props affect it
          />
        </div>

        {/* Center Section: Links */}
        <div className="flex items-center space-x-8 justify-center">
          <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
            English
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
            Към сайта
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
            <i className="fab fa-apple"></i> Мобилно приложение
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
            Промени в ОУ и тарифа
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
            Помощ
          </a>
        </div>

        {/* Right Section: Button */}
        <div>
          <Link href="http://localhost:3000">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
              Вход
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
        {/* Use handleSubmit from react-hook-form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-[28rem]"
        >
          <h1 className="text-lg font-bold mb-4 text-center">
            Регистрация на нов потребител
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Тази регистрационна форма се попълва, само ако нямате потребител и
            парола за Виртуален банков клон (e-fibank). Ако вече имате
            потребител и парола, добавянето на достъп до ново физическо или
            юридическо лице става в банката. Ако сте забравили своя потребител
            и/или парола, заповядайте в банката, за да ги получите.
          </p>
          {/* Border Bottom */}
          <div className="border-b border-gray-300 mb-6"></div>

          {/* Form Fields */}
          <Input
            id="egn"
            label="* ЕГН:"
            register={register("egn", {
              required: "ЕГН е задължително поле",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "ЕГН трябва да бъде точно 10 цифри",
              },
            })}
            error={errors.egn}
            placeholder="8701206763"
            wrapperClassName="mb-1"
          />

          <Input
            id="lnch"
            label="ЛНЧ или паспорт:"
            register={register("lnch")} // No specific validation for now, can be added
            wrapperClassName="mb-4"
          />

          <Input
            id="nameCyrillic"
            label="* Име и фамилия на кирилица:"
            register={register("nameCyrillic", {
              required: "Името на кирилица е задължително",
              pattern: {
                value: /^[\u0400-\u04FF\s]+$/u,
                message: "Името трябва да съдържа само букви на кирилица",
              },
            })}
            error={errors.nameCyrillic}
            wrapperClassName="mb-1"
          />

          <Input
            id="nameLatin"
            label="* Име и фамилия на латиница:"
            register={register("nameLatin", {
              required: "Името на латиница е задължително",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Името трябва да съдържа само букви на латиница",
              },
            })}
            error={errors.nameLatin}
            wrapperClassName="mb-1"
          />

          <Input
            id="email"
            label="* E-mail:"
            type="email"
            register={register("email", {
              required: "Имейлът е задължителен",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Невалиден имейл адрес",
              },
            })}
            error={errors.email}
            wrapperClassName="mb-1"
          />

          <Input
            id="phone"
            label="* Телефон:"
            register={register("phone", {
              required: "Телефонът е задължителен",
            })}
            error={errors.phone}
            wrapperClassName="mb-1"
          />

          <Input
            id="address"
            label="* Адрес:"
            register={register("address", {
              required: "Адресът е задължителен",
            })}
            error={errors.address}
            wrapperClassName="mb-1"
          />

          <Input
            id="username"
            label="* Потребител:"
            register={register("username", {
              required: "Потребителското име е задължително",
            })}
            error={errors.username}
            placeholder="philip_philipov"
            wrapperClassName="mb-1"
          />

          <PasswordInput
            id="password"
            label="* Парола:"
            register={register("password", {
              required: "Паролата е задължителна",
              minLength: {
                value: 10,
                message: "Паролата трябва да е поне 10 символа",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/,
                message:
                  "Паролата трябва да съдържа поне една малка буква, една главна буква и една цифра",
              },
            })}
            error={errors.password}
            placeholder="••••••••"
          />

          <PasswordInput
            id="repeatPassword"
            label="* Повторете Парола:"
            register={register("repeatPassword", {
              required: "Повторната парола е задължителна",
              validate: (value) =>
                value === passwordValue || "Паролите не съвпадат",
            })}
            error={errors.repeatPassword}
            placeholder="••••••••"
          />

          {/* Border Bottom */}
          <div className="border-b border-gray-300 mb-6"></div>
          <p className="text-sm text-gray-600 mb-4">
            Необходимо е да запомните потребителското си име и парола , които
            току-що въведохте.След като потвърдите регистрацията в банката,те ще
            Ви служат за вход във Виртуален банков клон (e-fibank).
          </p>

          <Button type="submit">Изпратете искане за регистрация</Button>
        </form>
      </div>

      {/* Footer */}
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
            <a href="#" className="hover:text-blue-500">
              Документи ›
            </a>
          </div>
          <p>© Първа инвестиционна банка 2024-2025.</p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
