import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import SponsorLIst from "@/components/SponsorLIst";
import Feedback from "@/components/Feedback";
import Statistics from "@/components/Statistics";
import Image from "next/image";
import Membership from "@/components/Membership";
import './globals.css'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Inscription />
      <SponsorLIst />
      <Feedback />
      <Statistics />
      <Membership />
      <Footer />
    </div>
  );
}
