import { services } from "@/lib/data";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export const metadata = {
  title: "Interior Painting Services",
  description: "Professional interior painting services in Riverside and Orange County. Expert wall, ceiling, and trim painting with free color consultation.",
};

export default function InteriorPaintingPage() {
  const service = services.find(s => s.slug === "interior")!;
  return <ServicePageTemplate service={service} />;
}
