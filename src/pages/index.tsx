import Image from "next/image";
import { Inter } from "next/font/google";
import Weather from "@/components/weather/Weather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
<Weather city={"tehran"}/>
    </main>
  );
}
