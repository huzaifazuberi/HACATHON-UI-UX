import Navbar from "@/components/navbar";
import Image from "next/image";
import SignUpBanner from '../components/SignUpBanner';
import StatsWithImage from '../components/StatsWithImage';
import HomeBar from '../components/HomeBar';
import NewArrivals from '../components/NewArrivals';
import ProductCard from '../components/ProductCard';
import Frame28 from "../components/Frame28";
import TopSelling from "../components/TopSelling";
import Frame from "../components/Frame";
import HappyCustomers from "../components/HappyCustomers";
export default function Home() {
  return (
    <div><NewArrivals/>
      <SignUpBanner/>
        <HomeBar/>
      <Navbar/>
      <StatsWithImage/>
      <ProductCard/>
      <Frame28/>
      <TopSelling/>
     
      <Frame/>
      <HappyCustomers/>
      <h1 className="text-red-800">hello world

      </h1>
    </div>
  );
}
