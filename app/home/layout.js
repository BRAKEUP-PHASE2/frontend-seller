import Image from "next/image";
import Link from "next/link";
import { GoHome, GoListUnordered, GoPackage, GoStack, GoSignOut, GoFile } from "react-icons/go";

export default function HomeLayout({ children }) {
  return (
    <div className="flex h-lvh max-h-lvh w-full">
      <div className="w-72 ">
        <Image
          src="/logo/logo.png"
          className="my-4 mx-auto"
          width={100}
          height={200}
          alt="Logo"
        />
        <ul className="border-b py-5">
          <li className="flex items-center justify-center py-2">
            <Link
              href="/home/dashboard"
              className="min-w-44 text-xs hover:bg-gray-200 transition-colors py-2 px-3 rounded-md"
            >
              <GoHome size={15} className="inline-block mr-2" /> Dashboard
            </Link>
          </li>
          <li className="flex items-center justify-center py-2">
            <Link
              href="/home/orders"
              className="min-w-44 text-xs hover:bg-gray-200 transition-colors py-2 px-3 rounded-md"
            >
              <GoPackage size={15} className="inline-block mr-2" /> Products
            </Link>
          </li>
          <li className="flex items-center justify-center py-2">
            <Link
              href="/home/orders"
              className="min-w-44 text-xs hover:bg-gray-200 transition-colors py-2 px-3 rounded-md"
            >
              <GoListUnordered size={15} className="inline-block mr-2" /> Order
              Lists
            </Link>
          </li>
          <li className="flex items-center justify-center py-2">
            <Link
              href="/home/stocks"
              className="min-w-44 text-xs hover:bg-gray-200 transition-colors py-2 px-3 rounded-md"
            >
              <GoStack size={15} className="inline-block mr-2" /> Product Stock
            </Link>
          </li>
        </ul>
        <div className="w-full border-b py-5">
          <h4 className="uppercase font-medium text-gray-400 text-xs mb-3 relative left-8">Pages</h4>
          <ul>
            <li className="flex items-center justify-center py-2">
              <Link
                href="/home/accounts"
                className="min-w-44 text-xs hover:bg-gray-200 transition-colors py-2 px-3 rounded-md"
              >
                <GoFile size={15} className="inline-block mr-2" /> Accounts
              </Link>
            </li>
            <li className="flex items-center justify-center py-2">
              <button className="min-w-44 text-xs text-left bg-brand-primary text-white transition-colors py-2 px-3 rounded-md">
                <GoSignOut size={15} className="inline-block mr-2" /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-gray-100">{children}</div>
    </div>
  );
}
