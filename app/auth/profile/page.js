"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";

export default function ProfilePage() {
  const [pageToShow, setPageToShow] = useState("details"); // 1. base, 2. details, 3. GST 4. Address

  function handleSellerDetailsSubmit(data) {}

  switch (pageToShow) {
    case "details":
      return <SellerDetailsPage onSubmit={handleSellerDetailsSubmit} />;
  }

  return (
    <div className="min-w-96 min-h-96 pb-10 bg-white rounded-lg py-6 px-7">
      <h2 className="text-lg font-semibold text-center mb-2">
        Welcome to Brakeup Seller Care
      </h2>
      <p className="text-xs text-gray-500 text-center">
        Boost your sales effortlessly!
      </p>
      <p className="text-xs text-gray-500 text-center">
        Create your profile now for seamless, hassle-free order fulfillment!
      </p>
      <div className="flex items-center justify-center">
        <Image
          src="/images/search-gif.gif"
          width={200}
          height={200}
          alt="Search Gif"
          unoptimized
        />
      </div>
      <div className="flex flex-col items-center">
        <button className="text-xs font-medium text-white bg-brand-primary w-4/5 py-3 rounded-md mb-7">
          Complete Your Profile
        </button>
        <button className="text-xs font-medium text-brand-primary border border-brand-primary w-4/5 py-3 rounded-md">
          Skip for now
        </button>
      </div>
    </div>
  );
}

function SellerDetailsPage({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  const fileInputRef = useRef(null);

  function handleFileInputClick() {
    fileInputRef.current.click();
  }
  return (
    <div className="max-w-5xl max-h-dvh bg-white rounded-lg py-6 px-10">
      <h2 className="font-semibold text-lg text-center mb-10">
        Create Your Profile
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-start gap-5"
      >
        <div className="flex flex-col items-center min-w-fit">
          <div className="text-black rounded-full bg-gray-300 w-14 h-14 flex items-center justify-center">
            <FaCamera />
          </div>
          <div className="relative">
            <input
              ref={fileInputRef}
              placeholder=""
              type="file"
              className="hidden"
              accept="image/png, image/jpg, image/jpeg"
            />
            <button
              type="button"
              onClick={handleFileInputClick}
              className="text-xs text-brand-primary font-medium"
            >
              Upload Photo
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Company Name
            </label>
            <input
              {...register("company_name", { required: true })}
              placeholder="ABC Motors"
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Registered Address
            </label>
            <input
              {...register("address_line_1", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Address Line 1"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Display Name
            </label>
            <input
              {...register("display_name", { required: true })}
              placeholder="ABC"
              className="placeholder:text-xs text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Registered Address
            </label>
            <input
              {...register("address_line_2", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Address Line 2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Phone Number
            </label>
            <input
              {...register("phone_number", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="000-000-0000"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              PIN Code
            </label>
            <input
              {...register("pin_code", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="000-000"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Authorised Person
            </label>
            <input
              {...register("pin_code", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Person to contact"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              City
            </label>
            <input
              {...register("pin_code", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Select a city"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Brands
            </label>
            <input
              {...register("pin_code", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Select Brands"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              State
            </label>
            <input
              {...register("pin_code", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Select State"
            />
          </div>
          <div />
          <div className="">
            <button className="text-sm bg-brand-primary py-2 px-3 rounded-md text-white w-full">
              Next 1/3
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
