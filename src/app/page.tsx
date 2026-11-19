import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Tracks from "@/components/Tracks";
import Resources from "@/components/Resources";
import Sponsors from "@/components/Sponsors";
import {
  getHero,
  getAbout,
  getTracks,
  getResources,
  getConferences,
  getSponsors,
} from "@/lib/content";

export default function Home() {
  const hero = getHero();
  const about = getAbout();
  const tracks = getTracks();
  const resources = getResources();
  const conferences = getConferences();
  const sponsors = getSponsors();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PacificVis",
            alternateName: "IEEE Pacific Visualization Conference",
            url: "https://pacificvis.org/",
          }),
        }}
      />
      <Hero data={hero} />
      <About data={about} />
      <Tracks data={tracks} />
      <Resources data={resources} />
      <Events data={conferences} />
      <Sponsors data={sponsors} />
    </>
  );
}
