import type { MetadataRoute } from "next";
import { locationPages, servicePages, site } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/faq", "/contact", "/terms", "/privacy"];
  const serviceRoutes = servicePages.map((service) => `/services/${service.slug}`);
  const locationRoutes = locationPages.map((location) => `/locations/${location.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes].map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
