import { FocusCards } from "../components/ui/FocusCards";
import HeroSection from "../components/ui/HeroSection";
export default function Team() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <FocusCards />
      </div>
    </div>
  );
}
