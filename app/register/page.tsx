"use client"; // Add this at the top for client components
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { useForm, SubmitHandler } from "react-hook-form"; // Import useForm
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Input from "@/components/Input"; // Import the new Input component
import PasswordInput from "@/components/PasswordInput"; // Import the new PasswordInput component
import Button from "@/components/Button"; // Import the new Button component
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import Header from "@/components/Header"; // Import the new Header component
import FooterRegister from "@/components/FooterRegister"; // Import the new FooterRegister component
import TextareaInput from "@/components/TextAreaInput";

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

  // State for password strength indicator
  const [strengthDetails, setStrengthDetails] = useState({
    message: "",
    color: "bg-gray-300",
    widthClass: "w-0",
  });

  // Effect to update password strength
  useEffect(() => {
    if (!passwordValue) {
      setStrengthDetails({
        message: "",
        color: "bg-gray-300",
        widthClass: "w-0",
      });
      return;
    }

    let currentMessage = "";
    let currentColor = "bg-red-500"; // Default to weak
    let currentWidthClass = "w-1/4"; // 25%

    const len = passwordValue.length;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

    if (len > 0 && len < 10) {
      currentMessage = "Паролата е твърде слаба."; // Matches image strength text for short/weak pw
      currentColor = "bg-red-500";
      currentWidthClass = "w-1/4";
    } else if (len >= 10) {
      const meetsPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/.test(
        passwordValue
      );

      if (!meetsPattern) {
        currentMessage = "Паролата е твърде слаба.";
        currentColor = "bg-red-500";
        currentWidthClass = "w-1/3"; // 33%
      } else {
        // Meets basic complexity (lower, upper, digit, 10+ chars)
        if (hasSymbol && len >= 12) {
          // Stronger if has symbol and longer
          currentMessage = "Паролата е много силна.";
          currentColor = "bg-green-600";
          currentWidthClass = "w-full"; // 100%
        } else if (hasSymbol) {
          currentMessage = "Паролата е силна.";
          currentColor = "bg-green-500";
          currentWidthClass = "w-3/4"; // 75%
        } else {
          currentMessage = "Паролата е добра."; // Meets pattern, no symbols
          currentColor = "bg-yellow-500";
          currentWidthClass = "w-2/3"; // 66%
        }
      }
    } else {
      // Empty password
      currentMessage = "";
      currentColor = "bg-gray-300";
      currentWidthClass = "w-0";
    }
    setStrengthDetails({
      message: currentMessage,
      color: currentColor,
      widthClass: currentWidthClass,
    });
  }, [passwordValue]);

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
      <Header rightButtonText="Вход" rightButtonLink="http://localhost:3000" />

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
                message: "Името трябва да съдържььча само букви на латиница",
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

          <TextareaInput
            id="address"
            label="* Адрес:"
            register={register("address", {
              required: "Адресът е задължителен",
            })}
            error={errors.address}
            wrapperClassName="mb-1"
            rows={2} // You can adjust the number of rows
          />

          <Input
            id="username"
            label="* Потребител:"
            register={register("username", {
              required: "Потребителското име е задължително",
              pattern: {
                value: /^[a-zA-Z0-9_.-]*$/,
                message:
                  "Разрешени са латински букви, цифри, '.', '_' или '-'.",
              },
              validate: {
                noCyrillic: (value: string) =>
                  !/[\u0400-\u04FF]/.test(value) ||
                  "Символи на кирилица не са позволени!",
              },
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

          {/* Password Strength Indicator */}
          {passwordValue && passwordValue.length > 0 && (
            <div className="mt-1 mb-2">
              {" "}
              {/* Adjusted margin */}
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${strengthDetails.color} ${strengthDetails.widthClass} transition-all duration-300 ease-in-out`}
                ></div>
              </div>
              {strengthDetails.message && (
                <p
                  className={`text-xs mt-1 ${
                    strengthDetails.color.startsWith("bg-red")
                      ? "text-red-500"
                      : strengthDetails.color.startsWith("bg-yellow")
                      ? "text-yellow-600"
                      : strengthDetails.color.startsWith("bg-green")
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {strengthDetails.message}
                </p>
              )}
            </div>
          )}

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
      <FooterRegister />
    </div>
  );
};

export default Register;
