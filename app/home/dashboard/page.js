import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="py-4 px-1">
      <h2 className="font-semibold text-2xl ml-4 mb-10">Dashboard</h2>
      <div className="py-7 px-3 w-full bg-gray-300 rounded-md">
        <h5 className="font-semibold text-xs mb-5">Overview</h5>
        <div className="grid grid-cols-4 gap-4">
          <div className="py-4 px-3 w-full h-24 bg-white rounded-md flex items-start justify-between">
            <div>
              <div className="text-xs font-medium mb-2">New orders</div>
              <div className="font-semibold">10</div>
            </div>
            <div>
              <Image src="/logo/icon-1.svg" width={30} height={30} alt="Icon" />
            </div>
          </div>
          <div className="py-4 px-3 w-full h-24 bg-white rounded-md flex items-start justify-between">
            <div>
              <div className="text-xs font-medium mb-2">Pending Processing</div>
              <div className="font-semibold">10</div>
            </div>
            <div>
              <Image src="/logo/icon-2.svg" width={30} height={30} alt="Icon" />
            </div>
          </div>
          <div className="py-4 px-3 w-full h-24 bg-white rounded-md flex items-start justify-between">
            <div>
              <div className="text-xs font-medium mb-2">Revenue</div>
              <div className="font-semibold">{`\u20B9 10,000`}</div>
            </div>
            <div>
              <Image src="/logo/icon-3.svg" width={30} height={30} alt="Icon" />
            </div>
          </div>
          <div className="py-4 px-3 w-full h-24 bg-white rounded-md flex items-start justify-between">
            <div>
              <div className="text-xs font-medium mb-2">Returns</div>
              <div className="font-semibold">10</div>
            </div>
            <div>
              <Image src="/logo/icon-4.svg" width={30} height={30} alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
