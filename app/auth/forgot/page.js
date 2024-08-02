"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function handlePhoneNumberSubmit(data) {
    console.log("data ", data);
  }

  return (
    <div className="bg-white rounded-md py-6 px-7 min-w-96 pb-16">
      <div className="bg-white rounded-md py-6 px-7 min-w-96 pb-16">
        <h2 className="text-lg font-semibold text-center mb-2">
          Forgot Password
        </h2>
        <p className="text-xs text-gray-700 text-center mb-8">{`Type your email or phone number to continue`}</p>
        <form
          onSubmit={handleSubmit(handlePhoneNumberSubmit)}
          className="flex flex-col items-center mb-3"
        >
          <div className="mb-8 w-full">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="text-xs text-gray-700 font-medium"
              >
                Enter Email or Phone Number
              </label>
            </div>
            <input
              {...register("email", { required: true })}
              placeholder="username@email.com"
              autoComplete="username"
              className="outline-none w-full border border-gray-300 focus:border-black bg-gray-100 rounded-md text-sm py-2 px-2 placeholder:text-xs"
            />
            {errors.email?.type === "required" && (
              <p className="text-xs text-red-500 mb-1">{`Email or phone number is required`}</p>
            )}
          </div>
          <div className="mb-5 w-full">
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="password"
                className="text-xs text-gray-700 font-medium"
              >
                Password
              </label>
              <button className="text-xs text-gray-400 hover:text-black transition-colors">
                Forgot Password?
              </button>
            </div>
            <input
              {...register("password", { required: true })}
              placeholder=".............."
              type="password"
              autoComplete="current-password"
              className="outline-none w-full border border-gray-300 focus:border-black bg-gray-100 rounded-md text-sm py-2 px-2 placeholder:text-xs placeholder:font-bold placeholder:absolute placeholder:tracking-widest"
            />
            {errors.email?.type === "required" && (
              <p className="text-xs text-red-500 mb-1">{`Email or phone number is required`}</p>
            )}
          </div>
          <button className="text-white bg-brand-primary text-xs w-4/5 py-3 rounded-md">
            Sign In
          </button>
        </form>
        <p className="text-center text-xs text-gray-500">
          {`Remember your password?`}
          <Link
            className="text-blue-500 underline underline-offset-2 font-medium"
            href="/auth/login"
          >{`Log in`}</Link>
        </p>
      </div>
    </div>
  );
}
