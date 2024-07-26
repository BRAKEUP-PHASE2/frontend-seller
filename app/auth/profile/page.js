"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Dialog,
  DialogPanel,
  Checkbox,
} from "@headlessui/react";
import { GoCheck, GoChevronDown, GoX } from "react-icons/go";

export default function ProfilePage() {
  const [pageToShow, setPageToShow] = useState("pickup"); // 1. base, 2. details, 3. gst 4. pickup

  function handleSellerDetailsSubmit(data) {
    console.log(data);
  }

  switch (pageToShow) {
    case "details":
      return <SellerDetailsPage onSubmit={handleSellerDetailsSubmit} />;
    case "gst":
      return <GSTDetailsPage onSubmit={handleSellerDetailsSubmit} />;
    case "pickup":
      return <AddPickupAddressPage onSubmit={handleSellerDetailsSubmit} />;
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

function GSTDetailsPage({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  const [gstType, setGstType] = useState("");
  const fileInputRef = useRef(null);

  function handleFileInputClick() {
    fileInputRef.current.click();
  }
  return (
    <div className="max-w-5xl max-h-dvh bg-white rounded-lg py-6 px-10">
      <h2 className="font-semibold text-lg text-center mb-10">
        GST and other details
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
              GST Number
            </label>
            <input
              {...register("gst_number", { required: true })}
              placeholder="0000ABCD0000ABCD"
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              GST Type
            </label>
            <Listbox value={gstType} onChange={setGstType} name="gst_type">
              <ListboxButton className="text-sm border rounded-md py-2 mt-2 flex justify-between items-center px-2">
                <span className="capitalize">
                  {gstType ? gstType : "Select GST Type"}
                </span>
                <GoChevronDown />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom end"
                className="z-20 bg-white shadow-md py-2 px-2 rounded-md w-52"
              >
                <ListboxOption
                  className="text-xs py-2 hover:bg-gray-200 px-2 rounded-md cursor-pointer"
                  value="regular"
                >
                  Regular
                </ListboxOption>
                <ListboxOption
                  className="text-xs py-2 hover:bg-gray-200 px-2 rounded-md cursor-pointer"
                  value="composite"
                >
                  Composite
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              PAN Number
            </label>
            <input
              {...register("pan_number", { required: true })}
              placeholder="ABCDE1234F"
              className="placeholder:text-xs text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Bank Account Number
            </label>
            <input
              {...register("bank_account_number", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="XXXX-0000-XXXX-0000"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Bank Name
            </label>
            <input
              {...register("bank_name", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="ABC Bank"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Branch Name
            </label>
            <input
              {...register("pin_code", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Place, District"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              IFSC Number
            </label>
            <input
              {...register("ifsc_number", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="ABCD0000000"
            />
          </div>
          <div />
          <div className="">
            <button className="text-sm border border-brand-primary py-2 px-3 rounded-md text-brand-primary w-full">
              Back
            </button>
          </div>
          <div className="">
            <button className="text-sm bg-brand-primary py-2 px-3 rounded-md text-white w-full">
              Next 2/3
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function AddPickupAddressPage({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  const [addresses, setAddresses] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  function AddAddresses(data) {
    setAddresses((prev) => [...prev, data])
  }

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={setOpenDialog}
        className="relative z-40"
      >
        <div className="fixed inset-0 bg-black/30" />
        <DialogPanel className="max-w-md min-w-72 space-y-4 bg-white px-4 py-4 z-40 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full flex justify-end">
            <button className="text-gray-400 rounded-full w-5 h-5 flex items-center justify-center border border-gray-400">
              <GoX />
            </button>
          </div>
          <h3 className="text-lg font-semibold text-center">Add Pickup Address</h3>
          <div className="flex items-center gap-2 px-5">
            <Checkbox className="group flex items-center justify-center size-4 rounded border border-gray-400 text-gray-400">
              <GoCheck className="group-data-[checked]:opacity-100 opacity-0" />
            </Checkbox>
            <p className="text-xs text-gray-400">Use registered address</p>
          </div>
          <form
            onSubmit={handleSubmit(AddAddresses)}
            className="flex flex-col gap-3 px-5"
          >
            <input
              className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
              placeholder="Address Line 1"
              {...register("address_line_1")}
            />
            <input
              className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
              placeholder="Address Line 1"
              {...register("address_line_2")}
            />
            <div className="grid grid-cols-3 gap-2">
              <input
                className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
                placeholder="City"
                {...register("city")}
              />
              <input
                className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
                placeholder="State"
                {...register("state")}
              />
              <input
                className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
                placeholder="PIN"
                {...register("pin_code")}
              />
            </div>
            <input
              className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
              placeholder="Contact Number"
              {...register("contact_number")}
            />
            <div className="flex items-center gap-5">
              <button
                className="text-sm border border-brand-primary py-3 px-3 rounded-md text-brand-primary w-full"
                type="button"
                onClick={() => setOpenDialog((prev) => false)}
              >
                Cancel
              </button>
              <button
                className="text-sm bg-brand-primary py-3 px-3 rounded-md text-white w-full"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </DialogPanel>
      </Dialog>
      <div className="max-w-5xl max-h-dvh bg-white rounded-lg py-6 px-10">
        <h2 className="font-semibold text-lg text-center mb-10">
          Add Pickup Addresses
        </h2>
        <table className="border rounded-md">
          <tbody>
            <tr className="text-center">
              <th className="text-xs font-medium uppercase px-3 py-2">No</th>
              <th className="text-xs font-medium uppercase px-3 py-2">
                Address line 1
              </th>
              <th className="text-xs font-medium uppercase px-3 py-2">
                Address line 2
              </th>
              <th className="text-xs font-medium uppercase px-3 py-2">City</th>
              <th className="text-xs font-medium uppercase px-3 py-2">State</th>
              <th className="text-xs font-medium uppercase px-3 py-2">Pin</th>
              <th className="text-xs font-medium uppercase px-3 py-2">Edit</th>
            </tr>
            <tr className="">
              <td className="text-xs text-gray-400 px-3 py-2 text-center">1</td>
              <td className="text-xs text-gray-400 px-3 py-2 text-center">
                Add Address Line 1
              </td>
              <td className="text-xs text-gray-400 px-3 py-2 text-center">
                Add Address Line 2
              </td>
              <td className="text-xs text-gray-400 px-3 py-2 text-center">
                Enter City
              </td>
              <td className="text-xs text-gray-400 px-3 py-2 text-center">
                Enter State
              </td>
              <td className="text-xs text-gray-400 px-3 py-2 text-center">
                Enter PIN
              </td>
              <td className="text-xs text-gray-400 px-3 py-2 text-center">
                <button
                  onClick={() => setOpenDialog(true)}
                  className="text-xs bg-brand-primary text-white py-1 px-2 rounded-md"
                >
                  Add New
                </button>
              </td>
            </tr>
            {addresses?.map((address, index) => (
              <tr key={index} className="">
                <td className="text-center text-xs px-3 py-2">
                  {index + 1}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.address_line_1}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.address_line_2}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.city}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.state}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.pin_code}
                </td>
                <td className="capitalize px-3 py-2 text-center">
                  <button className="bg-slate-200 text-brand-primary font-medium text-xs py-1 px-3 rounded-md">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
