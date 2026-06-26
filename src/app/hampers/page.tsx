import HampersHero from "@/components/hampers/HampersHero";
import PersonalizationsBanner from "@/components/hampers/PersonalizationsBanner";
import { hampers } from "@/data/hampers";

export default function HampersPage() {
  return (
    <main className="pb-8">
      <HampersHero />
      <PersonalizationsBanner />
    </main>
  );
}
