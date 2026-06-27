import HampersContainer from "@/components/hampers/HampersContainer";
import HampersHero from "@/components/hampers/HampersHero";
import PersonalisationsBanner from "@/components/hampers/PersonalisationsBanner";

export default function HampersPage() {
  return (
    <main>
      <HampersHero />
      <PersonalisationsBanner />
      <HampersContainer />
    </main>
  );
}
