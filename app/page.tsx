import { HomeIntro } from "@/components/ui/HomeIntro";
import { HomePageHero } from "@/components/ui/HomePageHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePageHero />
      <HomeIntro />
    </main>
  );
}
