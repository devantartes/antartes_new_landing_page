import { type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const host =
    request.headers.get("X-Forwarded-Host") ??
    request.headers.get("host") ??
    "antartes.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;

  const urls = [
    "/",
    "/get-started",
    "/pricing",
    "/works/mobile-development",
    "/legal/privacy-policy",
    "/legal/terms",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${domain}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8",
    },
  });
}
