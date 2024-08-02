import { GoDownload, GoClock, GoCheckCircleFill } from "react-icons/go";

export default function OrderDetailPage({ params }) {
  return (
    <div className="py-5 px-5">
      <div className="flex justify-between items-start mb-10">
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-lg font-semibold">Order ID: {params.id}</h2>
          <div className="py-1 px-3 text-xs flex gap-1 items-center rounded-full border border-green-600 bg-green-600/15 text-green-600">
            <GoCheckCircleFill /> Payment Completed
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-xs gap-2 bg-brand-primary text-white rounded-md py-2 px-3 flex items-center">
            <GoDownload size={15} />
            Download Invoice
          </button>
          <button className="text-xs font-medium text-brand-primary hover:underline underline-offset-2">
            Need Help?
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="py-3 px-4 bg-white rounded-md">
            <div className="text-sm text-gray-400 mb-3">Item 1 of 3</div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Landing Cost</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Total Commission</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Selling Cost</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Total Discount</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">MRP</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
          </div>
          <div className="py-3 px-4 bg-white rounded-md">
            <div className="text-sm text-gray-400 mb-3">Item 2 of 3</div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Landing Cost</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Total Commission</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Selling Cost</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Total Discount</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">MRP</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
          </div>
          <div className="py-3 px-4 bg-white rounded-md">
            <div className="text-sm text-gray-400 mb-3">Item 3 of 3</div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Landing Cost</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Total Commission</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Selling Cost</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">Total Discount</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="items-center flex justify-between text-xs py-3">
              <div className="text-gray-500">MRP</div>
              <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="py-4 px-3 bg-white rounded-md">
            <div className="w-full flex items-start text-xs gap-3 h-11 group">
              <div className="relative w-2 h-9">
                <div className="w-2 h-2 rounded-full bg-green-500 z-10 group-last:animate-pulse" />
                <div className="w-px h-full bg-gray-300 absolute left-1/2 -translate-x-1/2 group-last:hidden" />
              </div>
              <div>
                <div className="font-medium">Order created at</div>
                <div className="text-gray-400">Jul 8, at 10:00 AM</div>
              </div>
            </div>
            <div className="w-full flex items-start text-xs gap-3 h-11 group">
              <div className="relative w-2 h-9">
                <div className="w-2 h-2 rounded-full bg-green-500 z-10 group-last:animate-pulse" />
                <div className="w-px h-full bg-gray-300 absolute left-1/2 -translate-x-1/2 group-last:hidden" />
              </div>
              <div>
                <div className="font-medium">Order delivered at</div>
                <div className="text-gray-400">Jul 8, at 10:00 AM</div>
              </div>
            </div>
            <div className="w-full flex items-start text-xs gap-3 h-11 last:h-fit group">
              <div className="relative w-2 h-9">
                <div className="w-2 h-2 rounded-full bg-green-500 z-10 group-last:animate-pulse" />
                <div className="w-px h-full bg-gray-300 absolute left-1/2 -translate-x-1/2 group-last:hidden" />
              </div>
              <div>
                <div className="font-medium">Payment processed by</div>
                <div className="text-gray-400">Jul 8, at 10:00 AM</div>
              </div>
            </div>
          </div>
          <div className="py-3 px-3 bg-white rounded-md flex flex-col gap-4">
            <div className="text-xs">
                <div className="text-gray-500 mb-1">Total Landing Cost</div>
                <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="text-xs">
                <div className="text-gray-500 mb-1">Total TCS</div>
                <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="text-xs">
                <div className="text-gray-500 mb-1">Payment Reference ID</div>
                <div className="font-medium">{`N7756774B28IEUH3`}</div>
            </div>
            <div className="text-xs">
                <div className="text-gray-500 mb-1">Total Commission</div>
                <div className="font-medium">{`\u20B9 10,000`}</div>
            </div>
            <div className="text-xs">
                <div className="text-gray-500 mb-1">Invoice No.</div>
                <div className="font-medium">{`INV23-24/33445`}</div>
            </div>
            <div className="text-xs">
                <div className="text-gray-500 mb-1">Invoice Date</div>
                <div className="font-medium">Jul 8, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
