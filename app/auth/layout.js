import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center w-full min-h-lvh relative bg-white py-4">
      <div className="z-10 flex flex-col justify-between items-center gap-10">
        <>{children}</>
        <Image src="/logo/logo.png" width={150} height={200} alt="Logo" />
      </div>
      <Image
        src="/images/login-background.jpg"
        fill={true}
        objectFit="cover"
        objectPosition="top"
        alt="Login Background"
        className="opacity-40 brightness-50"
      />
    </div>
  );
}
