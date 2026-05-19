import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import mashuduHero from "@docs/mashudu-foundation-community.png";
import vendaImg1 from "@docs/community of Venda/87820489-8a1d-4955-ad20-433eb2387650.jpeg";
import vendaImg2 from "@docs/community of Venda/cf5be46c-bf32-42bc-a646-a1bd772d53d0.jpeg";
import vendaImg3 from "@docs/community of Venda/06ecaa83-7e1f-47ec-89a5-06a123f91481.jpeg";
import vendaImg4 from "@docs/community of Venda/e69e91e7-3c76-42b0-8631-2836ae567ebc.jpeg";
import vendaImg5 from "@docs/community of Venda/e6efa5d4-71e1-420a-8048-7d695e6406c4.jpeg";
import vendaImg6 from "@docs/community of Venda/WhatsApp Image 2026-05-12 at 19.25.27.jpeg";
import stLaurenceImg1 from "@docs/st laurence/IMG_1721.JPG";
import stLaurenceImg2 from "@docs/st laurence/IMG_1756.JPG";
import stLaurenceImg3 from "@docs/st laurence/IMG_1841.JPG";
import stLaurenceImg4 from "@docs/st laurence/IMG_1842.JPG";
import stLaurenceImg5 from "@docs/st laurence/IMG_1844.JPG";
import stLaurenceImg6 from "@docs/st laurence/IMG_1852.JPG";
import stLaurenceImg7 from "@docs/st laurence/IMG_1853.JPG";
import stLaurenceImg8 from "@docs/st laurence/IMG_E1720.JPG";
import stLaurenceImg9 from "@docs/st laurence/IMG_E1888.JPG";

const vendaCommunityImages = [
  { src: vendaImg1, alt: "Community football teams in Venda on a dirt pitch" },
  { src: vendaImg2, alt: "Youth football team in red kits, Venda" },
  { src: vendaImg3, alt: "Football team group photo in Venda" },
  { src: vendaImg4, alt: "Players preparing on the field in Venda" },
  { src: vendaImg5, alt: "Community football team gathering in Venda" },
  { src: vendaImg6, alt: "Mashudu Francinah Foundation kit with number 15" },
] as const;

const stLaurenceImages = [
  { src: stLaurenceImg1, alt: "Children and adults at Mashudu Francinah Foundation event, St Laurence Centre" },
  { src: stLaurenceImg2, alt: "McDonald's meal distribution with Mashudu Francinah Foundation banners" },
  { src: stLaurenceImg3, alt: "Children sharing McDonald's meals at picnic tables" },
  { src: stLaurenceImg4, alt: "Foundation team with children at outdoor meal" },
  { src: stLaurenceImg5, alt: "Community meal and gift distribution" },
  { src: stLaurenceImg6, alt: "Foundation representative with children and gifts" },
  { src: stLaurenceImg7, alt: "Children with Merry Christmas gift bags" },
  { src: stLaurenceImg8, alt: "Foundation volunteers with a family at St Laurence Centre" },
  { src: stLaurenceImg9, alt: "Children assembling donated Raleigh bicycles" },
] as const;

export const Route = createFileRoute("/social-responsibility")({
  head: () => ({
    meta: [
      { title: "Social Responsibility — Lebano Mining" },
      {
        name: "description",
        content:
          "Social responsibility, the Mashudu Francinah Foundation, and host-community development across Mpumalanga and Limpopo.",
      },
    ],
  }),
  component: SocialResponsibility,
});

const foundationCardMotion =
  "rounded-lg shadow-gold transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-24px_oklch(0.74_0.14_75/0.55)]";

const cardHover =
  "rounded border border-border bg-card shadow-elevated transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-20px_oklch(0_0_0/0.75)] hover:border-primary/50 hover:ring-1 hover:ring-primary/20";

const mashuduLinkClass =
  "group/link inline-flex shrink-0 max-w-[min(100%,14rem)] cursor-pointer items-center gap-1.5 rounded-full border border-blue-950/25 bg-blue-950/5 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-blue-950 transition-colors hover:border-blue-950/45 hover:bg-blue-950/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-100 sm:text-sm md:max-w-none md:px-4";

const mashuduInitiatives = [
  {
    id: "univen",
    title: "University of Venda",
    lines: [
      "The Foundation funds scholarships for academically deserving learners from disadvantaged backgrounds at primary and tertiary institutions across South Africa, creating pathways to meaningful employment and professional development for the next generation of South African talent.",
      "The foundation donated R1 million to the University of Venda to support the institution and its students.",
    ],
  },
  {
    id: "venda-community",
    title: "Community of Venda",
    lines: [
      "Mr. Mutavhatsindi is funding the construction of a school in Venda providing a permanent educational facility for the local community and expanding access to quality schooling for learners who would otherwise have limited options. Upon completion, the school will stand as a lasting legacy of the Foundation's work in Limpopo.",
      "Fifteen full football kits were donated to community teams in Venda.",
    ],
    images: vendaCommunityImages,
  },
  {
    id: "kingsway",
    title: "Kingsway Centre",
    lines: [
      "Annual structured feeding and community support programmes target food-insecure South Africans — delivered consistently, year on year, through partnerships with established community organisations across the country.",
      "The foundation contributed towards the cost of food and other essentials for one year to Kingsway Centre.",
    ],
  },
  {
    id: "st-laurence",
    title: "St Laurence Centre",
    lines: [
      "Monthly donations towards the cost of food and other essentials were made to St Laurence Centre.",
      "Representatives visited the centre to hand out gifts: seven bicycles, Woolworths shopping vouchers, and McDonald's meals for all children present.",
    ],
    images: stLaurenceImages,
  },
  {
    id: "soweto-schools",
    title: "Soweto school donations",
    lines: [
      "The foundation's work was covered in the Daily Sun.",
      "Ditwana Primary School (Orlando East): fifty McDonald's meals were handed out.",
      "Tshebedisano Primary School (Pimville): fifty McDonald's meals were handed out.",
    ],
  },
  {
    id: "venda-event",
    title: "Event in Venda",
    lines: [
      "A community event in Venda honoured legacy artists from the region so their contributions are remembered. Artists recognised included:",
    ],
    bullets: [
      "David Mmbi",
      "Dr Roxley Mitchell",
      "Jambo (Zimbabwe)",
      "Dr Colbert Mukhwevo",
      "Julia Nemakhavhani",
      "Tshimangadzo Esther Sinyegwe",
      "Adziambei Band",
    ],
  },
] as const;

const foundationProgrammes = [
  {
    title: "Education & Scholarships",
    body: "The Foundation funds scholarships for academically deserving learners from disadvantaged backgrounds at primary and tertiary educational institutions across South Africa creating pathways to meaningful employment and professional development for the next generation of South African talent.",
  },
  {
    title: "School Construction — Venda",
    body: "The foundation is funding the construction of a school in Venda providing a permanent educational facility for the local community and expanding access to quality schooling for learners who would otherwise have limited options. Upon completion, the school will stand as a lasting legacy of the Foundation's commitment to education in Limpopo.",
  },
  {
    title: "Community Support & Feeding",
    body: "Annual structured feeding and community support programmes targeting food-insecure South Africans, delivered consistently, year on year, through partnerships with established community organisations across the country.",
  },
] as const;

type MashuduId = (typeof mashuduInitiatives)[number]["id"];

function SocialResponsibility() {
  const [mashuduOpenId, setMashuduOpenId] = useState<MashuduId | null>(null);
  const activeMashudu = mashuduInitiatives.find((i) => i.id === mashuduOpenId);

  return (
    <>
      <PageHeader
        title={
          <>
            Social <span className="text-gradient-gold">Responsibility</span>
          </>
        }
        subtitle="The Mashudu Francinah Foundation is Lebano Mining's primary vehicle for structured community investment and social development across South Africa."
        image={mashuduHero}
        imageAlt="Mashudu Francinah Foundation community event with children and team members"
      />

      <section className="container-narrow pb-24 pt-16">
        <div
          className={`p-10 md:p-14 bg-gradient-gold text-primary-foreground ${foundationCardMotion}`}
        >
          <div className="text-xs uppercase tracking-[0.3em] mb-3 opacity-80">
            Social Responsibility
          </div>
          <h2 className="font-display text-3xl md:text-5xl uppercase mb-4">
            The Mashudu Francinah Foundation
          </h2>
          <p className="max-w-3xl leading-relaxed mb-8 opacity-95">
            Founded by Mr. Livhuwani Mutavhatsindi in 2022, the Mashudu Francinah Foundation is Lebano
            Mining&apos;s primary vehicle for structured community investment and social development across
            South Africa with a particular focus on education, food security and the upliftment of
            communities in Limpopo Province. The Foundation reflects Mr. Mutavhatsindi&apos;s personal
            conviction that the measure of a business is not only its commercial performance, but its impact
            on the people and communities that surround it. The following programmes are recorded in
            our foundation documentation open each item for the full account.
          </p>
          <nav aria-label="Foundation programmes" className="w-full">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 md:justify-start">
              {mashuduInitiatives.map((item) => (
                <li key={item.id} className="shrink-0 max-w-full">
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={mashuduOpenId === item.id}
                    onClick={() => setMashuduOpenId(item.id)}
                    className={mashuduLinkClass}
                  >
                    <ChevronRight
                      className="size-3 shrink-0 text-blue-950 transition-transform group-hover/link:translate-x-0.5 sm:size-4"
                      aria-hidden
                    />
                    <span className="text-left underline decoration-blue-950/70 decoration-2 underline-offset-2 group-hover/link:decoration-blue-950 leading-snug">
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="container-narrow pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {foundationProgrammes.map((programme) => (
            <div key={programme.title} className={`p-8 ${cardHover}`}>
              <h3 className="font-display text-xl uppercase text-foreground mb-4">{programme.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{programme.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow pb-24">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Host Communities</div>
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-12">Community Development</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`p-8 ${cardHover}`}>
            <h3 className="font-display text-xl uppercase text-foreground mb-4">
              Local Economic Development
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Preferential local procurement, community employment and active stakeholder engagement
              across all operational and development sites.
            </p>
          </div>
          <div className={`p-8 ${cardHover}`}>
            <h3 className="font-display text-xl uppercase text-foreground mb-4">Skills Development</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Structured skills transfer programmes and internships offered by Lebano Mining aligned with mining and logistics operations
              creating pathways to sustainable employment within the sector.
            </p>
          </div>
          <div className={`p-8 ${cardHover}`}>
            <h3 className="font-display text-xl uppercase text-foreground mb-4">
              Stakeholder Engagement
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Community liaison structures and regular engagement forums across all active development
              and operational sites in Mpumalanga and beyond.
            </p>
          </div>
        </div>
      </section>

      <Dialog open={mashuduOpenId !== null} onOpenChange={(open) => !open && setMashuduOpenId(null)}>
        <DialogContent
          className={`max-h-[min(90vh,720px)] overflow-y-auto ${
            activeMashudu && "images" in activeMashudu && activeMashudu.images
              ? "sm:max-w-4xl"
              : "sm:max-w-lg"
          }`}
        >
          {activeMashudu ? (
            <>
              <DialogHeader>
                <DialogTitle>{activeMashudu.title}</DialogTitle>
                <DialogDescription>
                  Foundation programme details for {activeMashudu.title}.
                </DialogDescription>
              </DialogHeader>
              <div
                className={
                  "images" in activeMashudu && activeMashudu.images
                    ? "grid gap-6 md:grid-cols-2 md:items-start"
                    : undefined
                }
              >
                <div className="space-y-3 text-sm text-muted-foreground">
                  {activeMashudu.lines.map((line, idx) => (
                    <p key={`${activeMashudu.id}-${idx}`} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
                  {"bullets" in activeMashudu && activeMashudu.bullets ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {activeMashudu.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                {"images" in activeMashudu && activeMashudu.images ? (
                  <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                      {activeMashudu.images.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="overflow-hidden rounded-lg border border-border bg-card">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="aspect-[4/3] w-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : null}
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
