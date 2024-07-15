"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SellerRegisterPage() {
  const [currentPage, setCurrentPage] = useState("phone"); // Phone Page: "phone", OTP Page: "otp"
  const [isVerified, setIsVerified] = useState(false);

  function handlePhoneNumberSubmit(data) {
    console.log(data);
    setCurrentPage((prev) => "otp");
  }

  function handleOTPSubmit(data) {
    console.log("otp", data);
    setIsVerified(true);
  }

  function handleEmailSubmit(data) {
    console.log("data ", data);
  }

  return (
    <div className="bg-white rounded-md py-6 px-7 min-w-96 pb-16 min-h-96">
      <h2 className="text-lg font-semibold text-center mb-2">
        Become a Seller
      </h2>
      {currentPage === "phone" && (
        <PhoneInputPage onSubmit={handlePhoneNumberSubmit} />
      )}
      {currentPage === "otp" && (
        <OtpVerificationPage
          onSubmit={handleOTPSubmit}
          isVerified={isVerified}
          onEmailSubmit={handleEmailSubmit}
        />
      )}
      <p className="text-center text-xs text-gray-500 mt-3">
        {`Already have an account `}
        <Link
          className="text-blue-500 underline underline-offset-2 font-medium"
          href="/auth/login"
        >{`Log in`}</Link>
      </p>
    </div>
  );
}

function PhoneInputPage({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <p className="text-xs text-gray-700 text-center mb-6">{`Please enter your phone number to continue`}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-5 flex flex-col items-center"
      >
        <div className="w-full mb-5">
          <label htmlFor="phone" className="text-xs">
            Phone Number
          </label>
          <div className="flex items-center gap-2 border border-gray-400 rounded-md py-2 px-2 mt-2">
            <div className="text-sm text-gray-400">+91</div>
            <input
              {...register("phone", { required: true })}
              placeholder="000 000 0000"
              className="text-sm outline-none placeholder:text-xs"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-xs font-medium text-white bg-brand-primary w-4/5 py-3 rounded-md mx-auto"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

function OtpVerificationPage({ onSubmit, isVerified, onEmailSubmit }) {
  const { register, handleSubmit } = useForm();
  const { register: registerEmail, handleSubmit: handleEmailSubmit } =
    useForm();
  return (
    <div className="w-full">
      <p className="text-xs mb-7 text-center">
        Please enter the code sent to +91 1234567890{" "}
        <button
          className="text-brand-primary underline underline-offset-2"
          type="button"
        >
          Edit
        </button>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mb-4"
      >
        <div className="flex justify-between items-center text-xs mb-2 w-full">
          <label htmlFor="" className="text-gray-500">
            OTP
          </label>
          <button disabled={isVerified} type="button" className="text-brand-primary">
            Resend OTP
          </button>
        </div>
        <input
          disabled={isVerified}
          placeholder="....."
          {...register("otp", {
            required: true,
            pattern: /[0-9]+/,
            minLength: 5,
            maxLength: 5,
          })}
          className="w-full border border-gray-500 rounded-md outline-none text-sm py-2 px-2 placeholder:font-bold placeholder:text-3xl placeholder:absolute relative placeholder:-top-2"
        />
        {!isVerified && (
          <button
            type="submit"
            className="mt-5 text-xs font-medium text-white bg-brand-primary w-4/5 py-3 rounded-md mx-auto"
          >
            Verify
          </button>
        )}
      </form>
      {isVerified && (
        <form
          onSubmit={handleEmailSubmit(onEmailSubmit)}
          className="flex flex-col items-center"
        >
          <div className="w-full flex flex-col mb-3">
            <label htmlFor="email" className="text-xs">
              Enter Email
            </label>
            <input
              type="email"
              className="border border-gray-500 py-2 px-2 text-sm placeholder:text-xs rounded-md outline-none"
              placeholder="jane@example.com"
              {...registerEmail("email", { required: true })}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="password" className="text-xs">
              Create Password
            </label>
            <input
              type="password"
              className="border border-gray-500 py-2 px-2 text-sm rounded-md outline-none placeholder:font-bold placeholder:text-2xl placeholder:absolute relative placeholder:-top-1"
              placeholder=".........."
              {...registerEmail("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
          </div>
          <button className="mt-5 text-xs font-medium bg-brand-primary text-white w-4/5 py-3 rounded-md">
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}
