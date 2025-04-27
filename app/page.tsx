import ExtensionCard from "@/components/ExtensionCard";
import Extensions from "@/components/Extensions";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center  flex-col justify-center bg-gradient-to-t from-blue-950 to-gray-950">
      <Navbar />
      <Extensions />
    </div>
  );
}
