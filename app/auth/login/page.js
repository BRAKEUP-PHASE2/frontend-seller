"use client";

import Link from "next/link";
import { Checkbox } from "@headlessui/react";
import { GoCheck } from "react-icons/go";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [rememberMe, setRememberMe] = useState(false);

  function handleUserSignin(data) {
    console.log("data ", data);
  }
  return (
    <div className="bg-white rounded-md py-6 px-7 min-w-96 pb-16">
      <h2 className="text-lg font-semibold text-center mb-2">
        Login to Account
      </h2>
      <p className="text-xs text-gray-700 text-center mb-8">{`Please enter your email and password to continue`}</p>
      <form onSubmit={handleSubmit(handleUserSignin)} className="flex flex-col items-center mb-3">
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
            className="outline-none w-full border border-gray-300 focus:border-black bg-gray-100 rounded-md text-sm py-2 px-2 placeholder:text-xs placeholder:font-bold placeholder:absolute placeholder:tracking-widest"
          />
          {errors.email?.type === "required" && (
            <p className="text-xs text-red-500 mb-1">{`Email or phone number is required`}</p>
          )}
          <div className="flex items-center gap-3 mt-3">
            <Checkbox
              checked={rememberMe}
              onChange={setRememberMe}
              name="remember"
              className="group flex items-center justify-center size-4 rounded border bg-white"
            >
              <GoCheck
                size={13}
                className="font-medium opacity-0 group-data-[checked]:opacity-100 text-gray-400"
              />
            </Checkbox>
            <div className="text-xs text-gray-500">Remember Password</div>
          </div>
        </div>
        <button className="text-sm text-white bg-blue-500 w-4/5 py-2 rounded-md">Sign In</button>
      </form>
      <p className="text-center text-xs text-gray-500">{`Join us! Ready to sell? `}<Link className="text-blue-500 underline underline-offset-2 font-medium" href="/auth/signup">{`Create Account`}</Link></p>
    </div>
  );
}
