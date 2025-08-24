import Navbar from "@/components/ui/Navbar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="relative">
      {/* Green strip on top (overlay) */}
      <div className="absolute top-0 left-0   hidden lg:block  w-60 h-full bg-[#1A3B2D] z-10"></div>

      {/* Content above */}
      <div className="relative ">
        
        <Main />
      </div>
    </div>
  );
}
