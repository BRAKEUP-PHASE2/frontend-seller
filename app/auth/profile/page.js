import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-w-96 min-h-96 pb-10 bg-white rounded-lg py-6 px-7">
      <h2 className="text-lg font-semibold text-center mb-2">
        Welcome to Brakeup Seller Care
      </h2>
      <p className="text-xs text-gray-500 text-center">Boost your sales effortlessly!</p>
      <p className="text-xs text-gray-500 text-center">Create your profile now for seamless, hassle-free order fulfillment!</p>
      <div className="flex items-center justify-center">
        <Image src="/images/search-gif.gif" width={200} height={200} alt="Search Gif" />
      </div>
      <div className="flex flex-col items-center">
        <button className="text-xs font-medium text-white bg-brand-primary w-4/5 py-3 rounded-md mb-7">
        Complete Your Profile</button>
        <button className="text-xs font-medium text-brand-primary border border-brand-primary w-4/5 py-3 rounded-md">Skip for now</button>
      </div>
    </div>
  );
}
