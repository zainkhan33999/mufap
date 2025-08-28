import Navbar from "@/components/ui/Navbar";
import Main from "@/components/Main";
import Image from "next/image";
import news from "../assets/side.avif"
export default function Home() {
  return (
    <div className="relative">
      {/* News strip on left with background image */}
      <div className="absolute top-0 left-0 hidden lg:block w-60 h-full z-10">
        <Image
          src={news}
          alt="News background"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-xl font-bold rotate-[-90deg] tracking-widest">
            NEWS
          </h2>
        </div>
      </div>

      {/* Main Content with Image Background */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
       
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <Main />
      </div>
    </div>
  );
}