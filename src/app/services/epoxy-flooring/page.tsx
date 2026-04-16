import { services } from "@/lib/data";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export const metadata = {
  title: "Epoxy Flooring Services",
  description: "Professional epoxy garage flooring and commercial epoxy coatings. Durable, beautiful finishes with decorative flake and metallic options.",
};

export default function EpoxyFlooringPage() {
  const service = services.find(s => s.slug === "epoxy-flooring")!;
  return <ServicePageTemplate service={service} />;
}
