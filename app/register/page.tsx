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
import { emailPattern, passwordPattern } from "@/utils/validation"; // Import validation patterns
import { useTranslation } from "react-i18next"; // Import useTranslation for i18n
import "../../locales/i18n"; // Import i18n configuration

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
  const { t, i18n } = useTranslation(); // Initialize translation
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
  useEffect(() => {
    console.log(
      "RegisterPage - i18n.language before setting lang attr:",
      i18n.language
    );
    if (document.documentElement) {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]); // Add i18n.language as a dependency

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
      currentMessage = t("registerPage.passwordStrengthTooWeak"); // Matches image strength text for short/weak pw
      currentColor = "bg-red-500";
      currentWidthClass = "w-1/4";
    } else if (len >= 10) {
      const meetsPattern = passwordPattern.test(passwordValue);

      if (!meetsPattern) {
        currentMessage = t("registerPage.passwordStrengthTooWeak");
        currentColor = "bg-red-500";
        currentWidthClass = "w-1/3"; // 33%
      } else {
        // Meets basic complexity (lower, upper, digit, 10+ chars)
        if (hasSymbol && len >= 12) {
          // Stronger if has symbol and longer
          currentMessage = t("registerPage.passwordStrengthVeryStrong");
          currentColor = "bg-green-600";
          currentWidthClass = "w-full"; // 100%
        } else if (hasSymbol) {
          currentMessage = t("registerPage.passwordStrengthStrong");
          currentColor = "bg-green-500";
          currentWidthClass = "w-3/4"; // 75%
        } else {
          currentMessage = t("registerPage.passwordStrengthGood"); // Meets pattern, no symbols
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
  }, [passwordValue, t]);

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
          t("registerPage.toast.registrationFailed", {
            message: result.message || t("registerPage.toast.unknownError"),
          })
        );
        return;
      }

      // Handle successful registration
      console.log("Registration successful:", result);
      toast.success(t("registerPage.toast.registrationSuccess"), {
        autoClose: 2000,
        onClose: () => {
          router.push("/");
        },
      });
    } catch (error) {
      console.error("An error occurred during registration:", error);
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      toast.error(
        t("registerPage.toast.genericError", { message: errorMessage })
      );
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* Navigation Bar */}
      <Header
        rightButtonTextKey="common.login"
        rightButtonLink="http://localhost:3000"
      />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
        {/* Use handleSubmit from react-hook-form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-[28rem]"
        >
          <h1 className="text-lg font-bold mb-4 text-center">
            {t("registerPage.title")}
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            {t("registerPage.infoParagraph1")}
          </p>
          {/* Border Bottom */}
          <div className="border-b border-gray-300 mb-6"></div>

          {/* Form Fields */}
          <Input
            id="egn"
            label={t("registerPage.egnLabel")}
            register={register("egn", {
              required: t("registerPage.validation.egnRequired"),
              pattern: {
                value: /^[0-9]{10}$/,
                message: t("registerPage.validation.egnPattern"),
              },
            })}
            error={errors.egn}
            placeholder="8701206763"
            wrapperClassName="mb-1"
          />

          <Input
            id="lnch"
            label={t("registerPage.lnchLabel")}
            register={register("lnch")} // No specific validation for now, can be added
            wrapperClassName="mb-4"
          />

          <Input
            id="nameCyrillic"
            label={t("registerPage.nameCyrillicLabel")}
            register={register("nameCyrillic", {
              required: t("registerPage.validation.nameCyrillicRequired"),
              pattern: {
                value: /^[\u0400-\u04FF\s]+$/u,
                message: t("registerPage.validation.nameCyrillicPattern"),
              },
            })}
            error={errors.nameCyrillic}
            wrapperClassName="mb-1"
          />

          <Input
            id="nameLatin"
            label={t("registerPage.nameLatinLabel")}
            register={register("nameLatin", {
              required: t("registerPage.validation.nameLatinRequired"),
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: t("registerPage.validation.nameLatinPattern"),
              },
            })}
            error={errors.nameLatin}
            wrapperClassName="mb-1"
          />

          <Input
            id="email"
            label={t("registerPage.emailLabel")}
            type="email"
            register={register("email", {
              required: t("registerPage.validation.emailRequired"),
              pattern: {
                value: emailPattern,
                message: t("registerPage.validation.emailPattern"),
              },
            })}
            error={errors.email}
            wrapperClassName="mb-1"
          />

          <Input
            id="phone"
            label={t("registerPage.phoneLabel")}
            register={register("phone", {
              required: t("registerPage.validation.phoneRequired"),
            })}
            error={errors.phone}
            wrapperClassName="mb-1"
          />

          <TextareaInput
            id="address"
            label={t("registerPage.addressLabel")}
            register={register("address", {
              required: t("registerPage.validation.addressRequired"),
            })}
            error={errors.address}
            wrapperClassName="mb-1"
            rows={2} // You can adjust the number of rows
          />

          <Input
            id="username"
            label={t("registerPage.usernameLabel")}
            register={register("username", {
              required: t("registerPage.validation.usernameRequired"),
              pattern: {
                value: /^[a-zA-Z0-9_.-]*$/,
                message: t("registerPage.validation.usernamePattern"),
              },
              validate: {
                noCyrillic: (value: string) =>
                  !/[\u0400-\u04FF]/.test(value) ||
                  t("registerPage.validation.usernameNoCyrillic"),
              },
            })}
            error={errors.username}
            placeholder={t("registerPage.usernamePlaceholder")}
            wrapperClassName="mb-1"
          />

          <PasswordInput
            id="password"
            label={t("registerPage.passwordLabel")}
            register={register("password", {
              required: t("registerPage.validation.passwordRequired"),
              minLength: {
                value: 10,
                message: t("registerPage.validation.passwordMinLength"),
              },
              pattern: {
                value: passwordPattern,
                message: t("registerPage.validation.passwordPattern"),
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
            label={t("registerPage.repeatPasswordLabel")}
            register={register("repeatPassword", {
              required: t("registerPage.validation.repeatPasswordRequired"),
              validate: (value) =>
                value === passwordValue ||
                t("registerPage.validation.passwordsNoMatch"),
            })}
            error={errors.repeatPassword}
            placeholder="••••••••"
          />

          {/* Border Bottom */}
          <div className="border-b border-gray-300 mb-6"></div>
          <p className="text-sm text-gray-600 mb-4">
            {t(
              "registerPage.infoParagraph2",
              'Необходимо е да запомните потребителското си име и парола, които току-що въведохте. След като потвърдите регистрацията в банката, те ще Ви служат за вход във Виртуален банков клон (e-fibank)."'
            )}
          </p>

          <Button type="submit">{t("registerPage.submitButton")}</Button>
        </form>
      </div>

      {/* Footer */}
      <FooterRegister />
    </div>
  );
};

export default Register;
