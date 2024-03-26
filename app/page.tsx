import { HomeIntro } from "@/components/containers/HomeIntro";
import { HomePageHero } from "@/components/containers/HomePageHero";
import { HomeStack } from "@/components/containers/HomeStack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePageHero />
      <HomeIntro />
      <HomeStack />
    </main>
  );
}
