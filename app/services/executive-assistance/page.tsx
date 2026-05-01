import { ServicePage } from "@/components/ServicePage";
import { createMetadata } from "@/lib/metadata";
import { servicePages } from "@/lib/site-data";

const service = servicePages.find((item) => item.slug === "executive-assistance")!;

export const metadata = createMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`
});

export default function ExecutiveAssistancePage() {
  return <ServicePage service={service} />;
}
