import { ServicePage } from "@/components/ServicePage";
import { createMetadata } from "@/lib/metadata";
import { servicePages } from "@/lib/site-data";

const service = servicePages.find((item) => item.slug === "records-database-management")!;

export const metadata = createMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`
});

export default function RecordsDatabaseManagementPage() {
  return <ServicePage service={service} />;
}
