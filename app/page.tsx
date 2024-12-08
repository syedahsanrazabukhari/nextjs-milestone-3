import Features from "./page-components/Features";
import Hero from "./page-components/Hero";
import Listing from "./page-components/Listing";
import Listing2 from "./page-components/Listing2";
import SignUp from "./page-components/SignUp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Listing/>
    <Listing2/>
    <SignUp/>
    <Footer/>
    </>
  );
}