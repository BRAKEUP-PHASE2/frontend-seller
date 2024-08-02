"use client";

import Link from "next/link";
import { Checkbox } from "@headlessui/react";
import { GoAlertFill, GoCheck, GoX, GoHourglass } from "react-icons/go";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { axiosInstance } from "@/app/(utils)/helpers";
import { useRouter } from "next/navigation";
import Toast from "@/app/(components)/Toast";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [showProfileToast, setShowProfileToast] = useState(false);
  const [showPendingToast, setShowPendingToast] = useState(false);

  async function handleUserSignin(data) {
    try {
      const response = await axiosInstance.post("/user/login/", {
        text: data.username,
        password: data.password,
        type: "vendor",
      });
      const { isCompleted, isApproved } = await response.data.credAuthResult;
      console.log(response.data.credAuthResult);
      if (!isCompleted) {
        setShowProfileToast(true);
        const timeout = setTimeout(() => {
          router.replace("/auth/profile");
        }, 3000);
        return () => clearTimeout(timeout);
      }
      
      // router.push('home/dashboard')
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <>
      <Toast showToast={showProfileToast}>
        <div className="py-3 px-5 rounded-md bg-green-500 text-white bottom-2 right-2 absolute z-40 text-sm flex items-center gap-4">
          <GoAlertFill size={18} />
          <div>
            <h5 className="font-semibold">Your profile is not completed</h5>
            <p className="text-xs">Redirecting you to profile page in 3s.</p>
          </div>
          <button onClick={() => setShowProfileToast((prev) => false)}>
            <GoX size={18} />
          </button>
        </div>
      </Toast>
      <Toast showToast={showPendingToast}>
        <div className="py-3 px-5 rounded-md bg-orange-500 text-white bottom-2 right-2 absolute z-40 text-sm flex items-center gap-4">
          <GoHourglass size={18} />
          <div>
            <h5 className="font-semibold">Pending Approval</h5>
            <p className="text-xs">Your profile is currently being verified.</p>
          </div>
          <button onClick={() => setShowProfileToast((prev) => false)}>
            <GoX size={18} />
          </button>
        </div>
      </Toast>
      <div className="bg-white rounded-md py-6 px-7 min-w-96 pb-16">
        <h2 className="text-lg font-semibold text-center mb-2">
          Login to Account
        </h2>
        <p className="text-xs text-gray-700 text-center mb-8">{`Please enter your email and password to continue`}</p>
        <form
          onSubmit={handleSubmit(handleUserSignin)}
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
              {...register("username", { required: true })}
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
          <button className="text-white bg-brand-primary text-xs w-4/5 py-3 rounded-md">
            Sign In
          </button>
        </form>
        <p className="text-center text-xs text-gray-500">
          {`Join us! Ready to sell? `}
          <Link
            className="text-blue-500 underline underline-offset-2 font-medium"
            href="/auth/register"
          >{`Create Account`}</Link>
        </p>
      </div>
    </>
  );
}
