import { ServicePage } from "@/components/ServicePage";
import { createMetadata } from "@/lib/metadata";
import { servicePages } from "@/lib/site-data";

const service = servicePages.find((item) => item.slug === "document-preparation-data-entry")!;

export const metadata = createMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`
});

export default function DocumentPreparationDataEntryPage() {
  return <ServicePage service={service} />;
}
