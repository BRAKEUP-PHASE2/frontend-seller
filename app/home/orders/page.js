import Link from "next/link";
import { GoSearch, GoChevronDown } from "react-icons/go";

export default function OrdersPage() {
  return (
    <div className="py-3 px-3">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl font-semibold">Orders</h2>
        <div className="flex items-center gap-2">
          <div className="relative border rounded-md overflow-hidden">
            <input
              id="search"
              type="text"
              className="peer outline-none placeholder:opacity-0 text-xs py-2 px-2 w-72"
              placeholder="Search"
            />
            <label
              htmlFor="search"
              className="top-1/2 -translate-y-1/2 ml-2 gap-1 text-xs text-gray-400 flex items-center absolute peer-placeholder-shown:opacity-100 opacity-0 pointer-events-none z-10"
            >
              <GoSearch />
              Search
            </label>
          </div>
          <button className="text-black bg-white flex justify-between items-center text-xs px-3 rounded-md border py-2">
            <span>Sort & Filters</span> <GoChevronDown />
          </button>
        </div>
      </div>
      <table className="w-full bg-white border-collapse rounded-md overflow-hidden">
        <thead className="bg-gray-2">
          <tr className="border-b bg-gray-200">
            <th className="text-left px-2 text-xs font-medium text-gray-500 py-3 w-36">
              Order ID
            </th>
            <th className="text-left px-2 text-xs font-medium text-gray-500 py-3 w-44">
              Date
            </th>
            <th className="text-left px-2 text-xs font-medium text-gray-500 py-3 w-36">
              Validation
            </th>
            <th className="text-left px-2 text-xs font-medium text-gray-500 py-3">
              Status
            </th>
            <th className="text-left px-2 text-xs font-medium text-gray-500 py-3 w-36">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-xs py-4 px-2 text-gray-400">ORE12345</td>
            <td className="text-xs py-4 px-2 font-semibold">Jul 2, 2024</td>
            <td className="text-xs py-4 px-2">
              <div className="py-1 px-3 rounded-full border border-blue-400 flex items-center w-fit gap-2 bg-blue-400/15 font-medium text-blue-400">
                Pending
              </div>
            </td>
            <td className="text-xs py-4 px-2">Pending validation</td>
            <td className="text-xs py-4 px-2">
              <Link
                href={`/home/orders/ORE12345`}
                className="text-brand-primary hover:underline underline-offset-2 font-medium"
              >
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td className="text-xs py-4 px-2 text-gray-400">ORE12345</td>
            <td className="text-xs py-4 px-2 font-semibold">Jul 2, 2024</td>
            <td className="text-xs py-4 px-2">
              <div className="py-1 px-3 rounded-full border border-green-400 flex items-center w-fit gap-2 bg-green-400/15 font-medium text-green-400">
                Completed
              </div>
            </td>
            <td className="text-xs py-4 px-2">Pending validation</td>
            <td className="text-xs py-4 px-2">
              <Link
                href={`/home/orders/ORE12345`}
                className="text-brand-primary hover:underline underline-offset-2 font-medium"
              >
                View
              </Link>
            </td>
          </tr>
          <tr>
            <td className="text-xs py-4 px-2 text-gray-400">ORE12345</td>
            <td className="text-xs py-4 px-2 font-semibold">Jul 2, 2024</td>
            <td className="text-xs py-4 px-2">
              <div className="py-1 px-3 rounded-full border border-red-400 flex items-center w-fit gap-2 bg-red-400/15 font-medium text-red-400">
                Failed
              </div>
            </td>
            <td className="text-xs py-4 px-2">Pending validation</td>
            <td className="text-xs py-4 px-2">
              <Link
                href={`/home/orders/ORE12345`}
                className="text-brand-primary hover:underline underline-offset-2 font-medium"
              >
                View
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
