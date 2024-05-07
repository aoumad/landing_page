import Navbar from "@/components/Navbar";
import Inscription from "@/components/Inscription";
import SponsorLIst from "@/components/SponsorLIst";
import Feedback from "@/components/Feedback";
import Statistics from "@/components/Statistics";
import Image from "next/image";
import Membership from "@/components/Membership";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Inscription />
      <SponsorLIst />
      <Feedback />
      <Statistics />
      <Membership />
    </div>
  );
}
