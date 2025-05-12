"use client"; // Add this at the top for client components
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form"; // Import useForm

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
        alert(`Registration failed: ${result.message || "Unknown error"}`);
        return;
      }

      // Handle successful registration
      console.log("Registration successful:", result);
      alert("Registration successful! You can now log in.");
      // Optionally, redirect the user to the login page or dashboard
      // For example, using Next.js router:
      // import { useRouter } from 'next/navigation';
      // const router = useRouter();
      // router.push('/'); // or '/login'
    } catch (error) {
      console.error("An error occurred during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
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
          <label
            htmlFor="egn"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * ЕГН:
          </label>
          <input
            type="text"
            id="egn"
            {...register("egn", {
              required: "ЕГН е задължително поле",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "ЕГН трябва да бъде точно 10 цифри",
              },
            })}
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
            placeholder="8701206763"
          />
          {errors.egn && (
            <p className="text-red-500 text-xs mb-3">{errors.egn.message}</p>
          )}

          <label
            htmlFor="lnch"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ЛНЧ или паспорт:
          </label>
          <input
            type="text"
            id="lnch"
            {...register("lnch")} // No specific validation for now, can be added
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-4"
          />
          {/* No error message for lnch as it's optional and has no validation yet */}

          <label
            htmlFor="nameCyrillic"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * Име и фамилия на кирилица:
          </label>
          <input
            type="text"
            id="nameCyrillic"
            {...register("nameCyrillic", {
              required: "Името на кирилица е задължително",
            })}
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
          />
          {errors.nameCyrillic && (
            <p className="text-red-500 text-xs mb-3">
              {errors.nameCyrillic.message}
            </p>
          )}

          <label
            htmlFor="nameLatin"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * Име и фамилия на латиница:
          </label>
          <input
            type="text"
            id="nameLatin"
            {...register("nameLatin", {
              required: "Името на латиница е задължително",
            })}
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
          />
          {errors.nameLatin && (
            <p className="text-red-500 text-xs mb-3">
              {errors.nameLatin.message}
            </p>
          )}

          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * E-mail:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Имейлът е задължителен",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Невалиден имейл адрес",
              },
            })}
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mb-3">{errors.email.message}</p>
          )}

          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * Телефон:
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: "Телефонът е задължителен" })}
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mb-3">{errors.phone.message}</p>
          )}

          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * Адрес:
          </label>
          <input
            type="text"
            id="address"
            {...register("address", { required: "Адресът е задължителен" })}
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mb-3">
              {errors.address.message}
            </p>
          )}

          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * Потребител:
          </label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Потребителското име е задължително",
            })}
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
            placeholder="philip_philipov"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mb-3">
              {errors.username.message}
            </p>
          )}

          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * Парола:
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
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
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mb-3">
              {errors.password.message}
            </p>
          )}

          <label
            htmlFor="repeatPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            * Повторете Парола:
          </label>
          <input
            type="password"
            id="repeatPassword"
            {...register("repeatPassword", {
              required: "Повторната парола е задължителна",
              validate: (value) =>
                value === passwordValue || "Паролите не съвпадат",
            })}
            className="h-10 w-full rounded-lg border-gray-300 indent-4 text-black-900 focus:ring focus:ring-gray-400 border-2 border-solid mb-1"
            placeholder="••••••••"
          />
          {errors.repeatPassword && (
            <p className="text-red-500 text-xs mb-3">
              {errors.repeatPassword.message}
            </p>
          )}

          {/* Border Bottom */}
          <div className="border-b border-gray-300 mb-6"></div>
          <p className="text-sm text-gray-600 mb-4">
            Необходимо е да запомните потребителското си име и парола , които
            току-що въведохте.След като потвърдите регистрацията в банката,те ще
            Ви служат за вход във Виртуален банков клон (e-fibank).
          </p>

          <button
            type="submit"
            className="btn w-full bg-blue-500 text-white py-3 px-4 rounded-xl font-bold uppercase mt-6 hover:bg-blue-600 transition-all duration-300"
          >
            Изпратете искане за регистрация
          </button>
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
