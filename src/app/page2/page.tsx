import Navbar from "@/components/navbar";
import Image from "next/image";
import SignUpBanner from '@/components/SignUpBanner';
import Categories from '@/components/Categories'
import ProductPage from '@/components/ProductPage'
import PageProduct from "@/components/PageProduct";
import FrameComponent from "@/components/FrameComponent";
import ResumeFooter from "@/components/ResumeFooter";
export default function Home() {
    return (
        <div>
          <Categories/>  
        <SignUpBanner/>
        <Navbar/>
      <ProductPage/>
      <PageProduct/>
      <FrameComponent/>
      <ResumeFooter/>
        </div>
    );
}
