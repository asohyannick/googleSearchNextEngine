import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
export default function HomeHeader() {
  return (
    <header className="flex justify-between p-5 text-sm">
      <h4 className="text-xs font-medium">Asoh Yannick Google Clone API</h4>
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl" />
        <button
          className="bg-blue-500 text-white px-6 py-2 
         font-medium capitalize cursor-pointer rounded-md hover:brightness-105
          hover:shadow-md transition-shadow"
        >
          sign in
        </button>
      </div>
    </header>
  );
}
