import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";
export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/640px-Google_logo_%282010-2013%29.svg.png"
          alt="Google Logo"
          width={300}
          height={300}
          priority
          style={{
            width:'auto'
          }}
          unoptimized
        />
        <HomeSearch />
      </div>
    </>
  );
}
