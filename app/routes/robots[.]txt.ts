import { type LoaderFunctionArgs } from "react-router";

export function loader({ request }: LoaderFunctionArgs) {
  const host =
    request.headers.get("X-Forwarded-Host") ??
    request.headers.get("host") ??
    "antartes.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;

  const robotText = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`;

  return new Response(robotText, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
