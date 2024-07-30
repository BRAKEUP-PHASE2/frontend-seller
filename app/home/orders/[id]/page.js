"use client";
import { GoChevronDown, GoClock, GoDownload, GoPackage } from "react-icons/go";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

export default function OrderPage({ params }) {
  return (
    <div className="py-5 px-5">
      <div className="flex justify-between items-start mb-10">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-lg font-semibold">Order ID: {params.id}</h2>
            <div className="py-1 px-3 text-xs flex gap-1 items-center rounded-full border border-orange-600 bg-orange-600/15 text-orange-600">
              <GoClock /> Pending Validation
            </div>
          </div>
          <div className="text-xs text-gray-500">July 8, 2024 at 3:30 pm</div>
        </div>
        <div className="flex items-center gap-4">
          <Menu>
            <MenuButton className="bg-white flex items-center gap-1 justify-between text-xs py-2 px-3 border border-gray-300 rounded-md">
              <span>More actions</span>
              <GoChevronDown />
            </MenuButton>
            <MenuItems
              anchor="bottom end"
              className="bg-white w-44 p-2 text-xs flex flex-col gap-2 rounded-lg shadow-md"
            >
              <MenuItem>
                <button className="flex items-center gap-2 text-left py-2 px-2 hover:bg-brand-primary hover:text-white rounded-md">
                  <GoDownload size={15} />
                  Generate Invoice
                </button>
              </MenuItem>
              <MenuItem>
                <button className="flex items-center gap-2 text-left py-2 px-2 hover:bg-brand-primary hover:text-white rounded-md">
                  <GoDownload size={15} />
                  Generate Shipping Label
                </button>
              </MenuItem>
              <MenuItem>
                <button className="flex items-center gap-2 text-left py-2 px-2 hover:bg-brand-primary hover:text-white rounded-md">
                  <GoPackage size={15} />
                  Schedule Pickup
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
          <button className="text-xs font-medium text-brand-primary hover:underline underline-offset-2">
            Need Help?
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="w-full rounded-md border border-gray-300 bg-white overflow-hidden">
            <div className="py-4 px-4">
              <div className="mb-5 flex justify-between items-start">
                <div>
                  <h4 className="text-base font-semibold text-gray-600">
                    Order Item
                  </h4>
                  <div className="text-xs text-gray-400">Item 1 of 2</div>
                </div>
                <div className="text-xs flex flex-col items-end">
                  <div className="flex items-center gap-3 mb-2">
                    <div>
                      <span className="text-gray-500">Quantity: </span>
                      <span>3</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Unit Price: </span>
                      <span>{`\u20B9 5,000`}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Total: </span>
                    <span>{`\u20B9 15,000`}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="relative rounded-md w-24 h-24 min-w-24 mr-4">
                  <Image
                    src="/images/product_1.png"
                    fill={true}
                    objectFit="cover"
                    alt="Product"
                  />
                </div>
                <div className="w-full">
                  <div className="border-b border-gray-300 pb-5">
                    <h6 className="text-xs mb-5 text-gray-400">
                      Product Details
                    </h6>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Category</div>
                        <div className="font-medium">Brake System</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Sub Category</div>
                        <div className="font-medium">Brake Pads</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Category</div>
                        <div className="font-medium">Brake System</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Brand</div>
                        <div className="font-medium">Brembo</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Axle</div>
                        <div className="font-medium">Front</div>
                      </div>
                    </div>
                  </div>
                  <div className=" py-5">
                    <h6 className="text-xs mb-5 text-gray-400">
                      Vehicle Details
                    </h6>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Make</div>
                        <div className="font-medium">Maruti Suzuki</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Model</div>
                        <div className="font-medium">Swift</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Year</div>
                        <div className="font-medium">2018</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">Variant</div>
                        <div className="font-medium">Vdi</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">
                          Registration No.
                        </div>
                        <div className="font-medium">ABCDE12345F</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-gray-500 mb-1">VIN No.</div>
                        <div className="font-medium text-gray-400">
                          Unavailable
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 px-4 w-full border-t border-gray-300 bg-slate-100">
              <div className="text-xs text-gray-500 font-medium mb-4">
                Confirm Part no. and Stock for product
              </div>
              <form className="flex gap-2 items-end">
                <div className="flex flex-col">
                  <label htmlFor="part_no" className="text-xs font-medium text-gray-500">Part no</label>
                  <input
                    defaultValue={`123456-abcd`}
                    className="text-xs py-2 outline-none px-2 mt-1 rounded-md border border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="part_no" className="text-xs font-medium text-gray-500">Stock</label>
                  <input
                    className="text-xs py-2 outline-none px-2 mt-1 rounded-md border border-gray-300"
                  />
                </div>
                <button className="text-xs bg-brand-primary py-2 text-white px-4 rounded-md">Confirm</button>
                <button className="text-xs border border-gray-300 py-2 text-brand-primary px-4 rounded-md bg-white">Change</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full rounded-md border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
