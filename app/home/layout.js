'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome, GoListUnordered, GoPackage, GoStack, GoSignOut, GoFile } from "react-icons/go";

export default function HomeLayout({ children }) {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `min-w-44 text-xs transition-colors py-2 px-3 rounded-md ${
      isActive(path) ? "bg-brand-primary text-white" : "hover:bg-gray-200"
    }`;

  return (
    <div className="flex min-h-lvh w-full">
      <div className="w-64 fixed bg-white h-lvh">
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
              className={linkClass("/home/dashboard")}
            >
              <GoHome size={15} className="inline-block mr-2" /> Dashboard
            </Link>
          </li>
          <li className="flex items-center justify-center py-2">
            <Link
              href="/home/orders"
              className={linkClass("/home/orders")}
            >
              <GoListUnordered size={15} className="inline-block mr-2" /> Order
              Lists
            </Link>
          </li>
        </ul>
        <div className="w-full border-b py-5">
          <h4 className="uppercase font-medium text-gray-400 text-xs mb-3 relative left-8">Tools</h4>
          <ul>
            <li className="flex items-center justify-center py-2">
              <Link
                href="/home/accounts"
                className={linkClass("/home/accounts")}
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
      <div className="ml-64 w-full bg-gray-100">{children}</div>
    </div>
  );
}