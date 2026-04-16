import { services } from "@/lib/data";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export const metadata = {
  title: "Exterior Painting Services",
  description: "Professional exterior house painting in Riverside and Orange County. Stucco, siding, decks, and more. Weather-resistant finishes.",
};

export default function ExteriorPaintingPage() {
  const service = services.find(s => s.slug === "exterior")!;
  return <ServicePageTemplate service={service} />;
}
