import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceDetail.module.css";

// Denna data kan du senare flytta till en egen fil (t.ex. data/services.ts)
const serviceData = {
  maleri: {
    title: "Professionellt Måleri",
    subtitle: "Vi sätter färg på Kristianstad med precision",
    description: "Våra erfarna målare utför allt från invändig målning av villor till stora fasadrenoveringar. Vi vet att underarbetet är nyckeln till ett hållbart resultat, därför slarvar vi aldrig med spackling eller grundmålning.",
    image: "/images/reno2.avif",
    points: [
      "Invändig & Utvändig målning",
      "Tapetsering med mönsterpassning",
      "Fönstermålning & Renovering",
      "Spackling & Bredspackling"
    ],
    process: "Vi börjar alltid med ett platsbesök för att bedöma ytornas skick. Därefter får du en fast offert. När vi sätter igång täcker vi noggrant alla golv och möbler innan vi påbörjar det viktiga underarbetet."
  },
  totalrenovering: {
    title: "Totalrenovering",
    subtitle: "Från vision till färdigt drömhem",
    description: "Att renovera hela eller stora delar av hemmet kräver planering. Vi agerar din projektledare och samordnar alla hantverkare så att du bara behöver ha kontakt med en person genom hela bygget.",
    image: "/images/reno1.jpg",
    points: [
      "Totalentreprenad",
      "Badrumsrenovering (Våtrumsbehörighet)",
      "Köksmontering & Installation",
      "Rivning & Planlösningsändring"
    ],
    process: "Genom en tydlig tidsplan ser vi till att projektet flyter på utan onödiga stopp. Vi sköter inköp av material och ser till att alla certifierade montörer finns på plats vid rätt tillfälle."
  },
  snickeri: {
    title: "Snickeri & Bygg",
    subtitle: "Platsbyggda lösningar och stabila konstruktioner",
    description: "Behöver du en ny altan till sommaren, eller drömmer du om en platsbyggd garderob som nyttjar takhöjden maximalt? Våra snickare löser allt från grovsnickeri till finsnickeri.",
    image: "/images/reno1.jpg",
    points: [
      "Altaner, uterum & trädäck",
      "Takbyte & Takrenovering",
      "Platsbyggd inredning",
      "Attefallshus & Tillbyggnad"
    ],
    process: "Vi arbetar med hållbara materialval anpassade för det svenska klimatet. Vid tillbyggnader ser vi till att den nya delen smälter in sömlöst med husets befintliga arkitektur."
  }
};

export default async function ServicePage({ params }: { params: { slug: string } }) {
  // I Next.js 15+ behöver params "awaitas"
  const { slug } = await params;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          priority 
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Hem</Link> / <Link href="/#tjanster">Tjänster</Link> / <span>{service.title}</span>
          </nav>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroSubtitle}>{service.subtitle}</p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.layout}>
            
            <div className={styles.mainContent}>
              <h2>Om tjänsten</h2>
              <p className={styles.description}>{service.description}</p>
              
              <div className={styles.pointsGrid}>
                {service.points.map((point, index) => (
                  <div key={index} className={styles.pointCard}>
                    <span className={styles.check}>✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className={styles.processBox}>
                <h3>Hur vi jobbar</h3>
                <p>{service.process}</p>
              </div>
            </div>

            {/* SIDEBAR / CTA */}
            <aside className={styles.sidebar}>
              <div className={styles.ctaCard}>
                <h3>Boka kostnadsfritt hembesök</h3>
                <p>Vi kommer ut till dig i Landskrona med omnejd och tittar på ditt projekt.</p>
                <Link href="/#offert" className={styles.ctaButton}>
                  Få en gratis offert
                </Link>
                <span className={styles.guarantee}>Fast pris & nöjd kund-garanti</span>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}