"use client";

import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
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
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { GoCheck, GoChevronDown, GoX } from "react-icons/go";
import { StatesData } from "@/app/(utils)/helpers";
import { merge, reject, isEqual } from "lodash";
import uniqid from "uniqid";

export default function ProfilePage() {
  const [pageToShow, setPageToShow] = useState(4); // 1. base, 2. details, 3. gst 4. pickup
  const [sellerData, setSellerData] = useState({});

  function handleSellerDetailsSubmit(data) {
    setSellerData((prev) => merge(prev, data));
    setPageToShow((prev) => prev + 1);
  }

  function handleContinueClick() {
    setPageToShow((prev) => 2);
  }

  function handleBackClick() {
    setPageToShow((prev) => prev - 1);
  }

  switch (pageToShow) {
    case 2:
      return (
        <SellerDetailsPage
          storedData={sellerData}
          onSubmit={handleSellerDetailsSubmit}
        />
      );
    case 3:
      return (
        <GSTDetailsPage
          storedData={sellerData}
          onSubmit={handleSellerDetailsSubmit}
          onBackClick={handleBackClick}
        />
      );
    case 4:
      return (
        <AddPickupAddressPage
          storedData={sellerData}
          onSubmit={handleSellerDetailsSubmit}
          onBackClick={handleBackClick}
        />
      );
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
        <button
          onClick={handleContinueClick}
          className="text-xs font-medium text-white bg-brand-primary w-4/5 py-3 rounded-md mb-7"
        >
          Complete Your Profile
        </button>
        <button className="text-xs font-medium text-brand-primary border border-brand-primary w-4/5 py-3 rounded-md">
          Skip for now
        </button>
      </div>
    </div>
  );
}

function SellerDetailsPage({ onSubmit, storedData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...storedData,
      address_line_1: storedData.reg_address?.split(" ")[0],
      address_line_2: storedData.reg_address?.split(" ")[1],
    },
  });
  const fileInputRef = useRef(null);
  const [selectedState, setSelectedState] = useState(null);
  const [stateQuery, setStateQuery] = useState("");

  function handleFileInputClick() {
    fileInputRef.current.click();
  }

  function onSubmitForm(data) {
    const { address_line_1, address_line_2, ...rest } = data;
    console.log(data);
    onSubmit({
      ...rest,
      company_logo: fileInputRef.current.files[0],
      reg_address: `${address_line_1} ${address_line_2}`,
    });
  }

  const filteredStates =
    stateQuery === ""
      ? StatesData
      : StatesData.filter((state) => {
          return state.STATE_NAME.toLowerCase().includes(
            stateQuery.toLowerCase()
          );
        });

  return (
    <div className="max-w-5xl max-h-dvh bg-white rounded-lg py-6 px-10">
      <h2 className="font-semibold text-lg text-center mb-10">
        Create Your Profile
      </h2>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex items-start gap-10"
      >
        <div className="flex flex-col items-center min-w-fit">
          <div className="text-black rounded-full bg-gray-300 w-14 h-14 flex items-center justify-center relative">
            <FaCamera />
          </div>
          <div className="relative flex flex-col items-center mt-2">
            <input
              placeholder=""
              type="file"
              className="hidden"
              {...register("company_logo")}
              ref={(e) => {
                // ref(e)
                fileInputRef.current = e;
              }}
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
              Company Name*
            </label>
            <input
              {...register("company_name", { required: true })}
              placeholder="ABC Motors"
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
            />
            {errors.company_name?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Registered Address*
            </label>
            <input
              {...register("address_line_1", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Address Line 1"
            />
            {errors.address_line_1?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
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
            {errors.display_name?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Registered Address
            </label>
            <input
              {...register("address_line_2")}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Address Line 2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Phone Number*
            </label>
            <input
              {...register("mobile", {
                required: true,
                minLength: 10,
                maxLength: 10,
                pattern: /^[0-9]+$/,
              })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="000-000-0000"
            />
            {errors.mobile?.type === "minLength" ||
              (errors.mobile?.type === "maxLength" && (
                <p className="text-xs text-red-500">Only 10 digits allowed</p>
              ))}
            {errors.mobile?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              PIN Code*
            </label>
            <input
              {...register("pincode", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="000-000"
            />
            {errors.pincode?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Authorised Person*
            </label>
            <input
              {...register("authorized_person", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Person to contact"
            />
            {errors.authorized_person?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              City*
            </label>
            <input
              {...register("city", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Select a city"
            />
            {errors.city?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              State
            </label>
            <Combobox
              value={selectedState}
              onChange={setSelectedState}
              onClose={() => setStateQuery((prev) => "")}
            >
              <div className="relative border rounded-md mt-2">
                <ComboboxInput
                  {...register("state", { required: true })}
                  className="w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 placeholder:text-xs"
                  placeholder="Select a state"
                  autoComplete="off"
                  displayValue={(state) => state?.STATE_NAME}
                  onChange={(event) => setStateQuery(event.target.value)}
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                  <GoChevronDown />
                </ComboboxButton>
              </div>
              <ComboboxOptions
                anchor="top start"
                className="bg-white z-50 shadow-md w-56 border rounded-md px-1 py-1"
              >
                {filteredStates.map((state) => (
                  <ComboboxOption
                    key={state.S_No}
                    value={state}
                    className="group flex py-2 px-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="text-xs">{state.STATE_NAME}</div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
            {errors.state?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
          </div>
          <div className="mt-6">
            <button
              className="text-sm bg-brand-primary py-2 px-3 rounded-md text-white w-full"
              type="submit"
            >
              Next 1/3
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function GSTDetailsPage({ onSubmit, storedData, onBackClick }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [gstType, setGstType] = useState("");
  const fileInputRef = useRef(null);

  // function handleFileInputClick() {
  //   fileInputRef.current.click();
  // }

  function handleSubmitData(data) {
    onSubmit(data);
  }

  return (
    <div className="max-w-5xl max-h-dvh bg-white rounded-lg py-6 px-10">
      <h2 className="font-semibold text-lg text-center mb-10">
        GST and other details
      </h2>
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        className="flex items-start gap-5"
      >
        {/* <div className="flex flex-col items-center min-w-fit">
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
        </div> */}
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              GST Number
            </label>
            <input
              {...register("GST_number", {
                required: true,
                minLength: 15,
                maxLength: 15,
              })}
              placeholder="0000ABCD0000ABCD"
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
            />
            {errors.GST_number?.type === "required" && (
              <p className="text-xs text-red-500">This field is required</p>
            )}
            {errors.GST_number?.type === "minLength" ||
              (errors.GST_number?.type === "maxLength" && (
                <p className="text-xs text-red-500">
                  Please check your GST number
                </p>
              ))}
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              GST Type
            </label>
            <Controller
              control={control}
              name="GST_type"
              defaultValue=""
              render={({ field: { value, onChange } }) => (
                <Listbox value={value} onChange={onChange}>
                  <ListboxButton className="text-sm border rounded-md py-2 mt-2 flex justify-between items-center px-2">
                    <span className="capitalize">
                      {/* {gstType ? gstType : "Select GST Type"} */}
                      {value ? value : "Select GST Type"}
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
              )}
            ></Controller>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              PAN Number
            </label>
            <input
              {...register("PAN", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              placeholder="ABCDE1234F"
              className="placeholder:text-xs text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56"
            />
            {errors.PAN?.type === "minLength" ||
              (errors.PAN?.type === "maxLength" && (
                <p className="text-xs text-red-500">
                  Please check your PAN number
                </p>
              ))}
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              Bank Account Number
            </label>
            <input
              {...register("bank_accno", { required: true, pattern: /^\d+$/ })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="XXXX-0000-XXXX-0000"
            />
            {errors.bank_accno?.type === "required" && (
              <p className="text-xs text-red-500">
                Please check your GST number
              </p>
            )}
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
              {...register("bank_branch", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="Place, District"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="company_name">
              IFSC Number
            </label>
            <input
              {...register("bank_IFSC", { required: true })}
              className="text-sm border rounded-md py-2 px-2 outline-none focus:border-black mt-2 min-w-56 placeholder:text-xs"
              placeholder="ABCD0000000"
            />
          </div>
          <div />
          <button
            type="button"
            onClick={onBackClick}
            className="text-sm border border-brand-primary py-2 px-3 rounded-md text-brand-primary w-full"
          >
            Back
          </button>
          <button
            type="submit"
            className="text-sm bg-brand-primary py-2 px-3 rounded-md text-white w-full"
          >
            Next 2/3
          </button>
        </div>
      </form>
    </div>
  );
}

function AddPickupAddressPage({ onSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [addresses, setAddresses] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [stateQuery, setStateQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  function addAddress(data) {
    // setAddresses((prev) => [...prev, { ...data, id: uniqid("ADD") }]);
    setAddresses((prev) => {
      if (data.hasOwnProperty("id")) {
        const updatedAddresses = prev.map((address) => {
          if (address.id === data.id) {
            return data;
          }
          return address;
        });
        return [...updatedAddresses];
      }
      return [...prev, { ...data, id: uniqid("ADD") }];
    });
    setIsEditing(false);
    setOpenDialog(false);
    reset({});
  }

  function deleteAddress(address) {
    setAddresses((prev) =>
      reject(prev, (prevAddress) => prevAddress.id === address.id)
    );
  }

  function showEditPage(address) {
    reset(address);
    setIsEditing(true);
    setOpenDialog(true);
  }

  const filteredStates =
    stateQuery === ""
      ? StatesData
      : StatesData.filter((state) => {
          return state.STATE_NAME.toLowerCase().includes(
            stateQuery.toLowerCase()
          );
        });

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
            <button
              type="button"
              onClick={() => setOpenDialog((prev) => false)}
              className="text-gray-400 rounded-full w-5 h-5 flex items-center justify-center border border-gray-400"
            >
              <GoX />
            </button>
          </div>
          <h3 className="text-lg font-semibold text-center">
            Add Pickup Address
          </h3>
          <div className="flex items-center gap-2 px-5">
            <Checkbox className="group flex items-center justify-center size-4 rounded border border-gray-400 text-gray-400">
              <GoCheck className="group-data-[checked]:opacity-100 opacity-0" />
            </Checkbox>
            <p className="text-xs text-gray-400">Use registered address</p>
          </div>
          <form
            onSubmit={handleSubmit(addAddress)}
            className="flex flex-col gap-3 px-5"
          >
            <div>
              <input
                className="text-xs py-4 bg-gray-100 px-2 border rounded-md w-full"
                placeholder="Address Line 1*"
                {...register("address", { required: true })}
              />
              {errors.address?.type === "required" && (
                <p className="text-xs text-red-500">This field is required</p>
              )}
            </div>
            <input
              className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
              placeholder="Address Line 2"
              {...register("address_2")}
            />
            <div>
              <div className="grid grid-cols-3 gap-2">
                <input
                  className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
                  placeholder="City"
                  {...register("city", { required: true })}
                />
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({
                    field: { onChange, value },
                    formState: { errors },
                  }) => (
                    <Combobox
                      value={value}
                      onChange={onChange}
                      onClose={() => setStateQuery("")}
                    >
                      <div className="relative border rounded-md overflow-hidden flex items-center">
                        <ComboboxInput
                          className="w-full rounded-lg border-none bg-white/5 py-1.5 px-2 text-xs focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 placeholder:text-xs"
                          placeholder="Select a state"
                          autoComplete="off"
                          displayValue={(state) => state}
                          onChange={(event) =>
                            setStateQuery(event.target.value)
                          }
                        />
                        <ComboboxButton className="group absolute inset-y-0 right-0 px-1 bg-white/90">
                          <GoChevronDown />
                        </ComboboxButton>
                      </div>
                      <ComboboxOptions
                        anchor="top start"
                        className="bg-white z-50 shadow-md w-56 border rounded-md px-1 py-1"
                      >
                        {filteredStates.map((state) => (
                          <ComboboxOption
                            key={state.S_No}
                            value={state.STATE_NAME}
                            className="group flex py-2 px-2 hover:bg-gray-100 cursor-pointer"
                          >
                            <div className="text-xs">{state.STATE_NAME}</div>
                          </ComboboxOption>
                        ))}
                      </ComboboxOptions>
                    </Combobox>
                  )}
                />
                <input
                  className="text-xs py-4 bg-gray-100 px-2 border rounded-md"
                  placeholder="PIN Code"
                  {...register("pincode", { required: true })}
                />
              </div>
              {errors.city?.type === "required" ||
                (errors.state?.type === "required" && (
                  <p className="text-red-500 text-xs">
                    These fields are required
                  </p>
                ))}
            </div>
            <div>
              <input
                className="text-xs py-4 bg-gray-100 px-2 border rounded-md w-full"
                placeholder="Contact Number"
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                  pattern: /^[0-9]{10}$/,
                })}
              />
              {errors.phone?.type === "required" && (
                <p className="text-xs text-red-500">This field is required</p>
              )}
              {errors.phone?.type === "minLength" ||
                (errors.phone?.type === "maxLength" && (
                  <p className="text-xs text-red-500">Only 10 digits allowed</p>
                ))}
            </div>

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
                {isEditing ? "Update" : "Add"}
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
          <thead>
            <tr>
              <th className="text-xs font-medium uppercase px-3 py-2 text-left">
                No
              </th>
              <th className="text-xs font-medium uppercase px-3 py-2 text-left">
                Address line 1
              </th>
              <th className="text-xs font-medium uppercase px-3 py-2 text-left">
                Address line 2
              </th>
              <th className="text-xs font-medium uppercase px-3 py-2 text-left">
                City
              </th>
              <th className="text-xs font-medium uppercase px-3 py-2 text-left">
                State
              </th>
              <th className="text-xs font-medium uppercase px-3 py-2 text-left">
                Pin
              </th>
              <th className="text-xs font-medium uppercase px-3 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-xs text-gray-400 px-3 py-2 text-center">1</td>
              <td className="text-xs text-gray-400 px-3 py-2">
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
              <td className="text-xs text-gray-400 px-3 py-2">
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
                <td className="text-center text-xs px-3 py-2">{index + 1}</td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.address}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.address_2}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.city}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.state}
                </td>
                <td className="overflow-hidden text-ellipsis max-w-48 text-nowrap text-xs capitalize px-3 py-2">
                  {address.pincode}
                </td>
                <td className="capitalize px-3 py-2 flex gap-2">
                  <button
                    onClick={() => showEditPage(address)}
                    className="bg-slate-200 text-brand-primary font-medium text-xs py-1 px-3 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteAddress(address)}
                    className="bg-red-500 text-white font-medium text-xs py-1 px-3 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
