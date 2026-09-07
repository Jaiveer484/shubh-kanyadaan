import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutCeremony from "@/components/AboutCeremony";
import KanyadaanExperience from "@/components/KanyadaanExperience";
import BlessingWall from "@/components/BlessingWall";
import WeddingDetails from "@/components/WeddingDetails";
import GiftSection from "@/components/GiftSection";
import Gallery from "@/components/Gallery";
import FamilyMessage from "@/components/FamilyMessage";
import QRShare from "@/components/QRShare";
import Footer from "@/components/Footer";

export default function Home() {
  return <><Navbar /><main><Hero /><AboutCeremony /><KanyadaanExperience /><BlessingWall /><WeddingDetails /><GiftSection /><Gallery /><FamilyMessage /><QRShare /></main><Footer /></>;
}
