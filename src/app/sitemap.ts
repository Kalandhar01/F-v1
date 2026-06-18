import type { MetadataRoute } from "next";
import { BRAND } from "@/config/brand";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services/web-development", priority: 0.9 },
  { path: "/services/app-development", priority: 0.9 },
  { path: "/services/digital-marketing", priority: 0.9 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BRAND.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
