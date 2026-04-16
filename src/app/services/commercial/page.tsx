import { services } from "@/lib/data";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export const metadata = {
  title: "Commercial Painting Services",
  description: "Professional commercial painting for offices, retail, warehouses, and multi-unit properties. Flexible scheduling, minimal disruption.",
};

export default function CommercialPaintingPage() {
  const service = services.find(s => s.slug === "commercial")!;
  return <ServicePageTemplate service={service} />;
}
