import { services } from "@/lib/data";
import ServicePageTemplate from "@/components/shared/ServicePageTemplate";

export const metadata = {
  title: "Cabinet Refinishing Services",
  description: "Transform your kitchen and bathroom cabinets with professional refinishing. Save money vs. replacement with beautiful results.",
};

export default function CabinetRefinishingPage() {
  const service = services.find(s => s.slug === "cabinet-refinishing")!;
  return <ServicePageTemplate service={service} />;
}
