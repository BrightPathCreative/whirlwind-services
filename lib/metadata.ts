import type { Metadata } from "next";
import { site } from "@/lib/site-data";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: PageMeta): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      locale: "en_AU",
      images: [
        {
          url: "/images/brand/logo.png",
          width: 1200,
          height: 1200,
          alt: "Whirlwind Services logo"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/brand/logo.png"]
    }
  };
}
