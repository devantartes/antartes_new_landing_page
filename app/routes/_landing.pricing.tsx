import { HugeiconsIcon } from "@hugeicons/react";
import { type Route } from "./+types/_landing.pricing";
import {
  ArrowUpRight,
  BadgeCheck,
  Facebook,
  Facebook02FreeIcons,
  Instagram,
  Linkedin,
  MobileProgramming01Icon,
  PaintBoardIcon,
  Twitter,
  User,
  WebDesign02FreeIcons,
} from "@hugeicons/core-free-icons";
import { Link } from "react-router";
import ProcessCard, { type Process } from "~/components/ProcessCard";
import type { Service } from "~/components/ServiceCard";
import ServiceCard from "~/components/ServiceCard";
import StartProjectCTA from "~/components/StartProjectCTA";
import type { TeamMember } from "~/components/TeamMemberCard";
import TeamMemberCard from "~/components/TeamMemberCard";
import type { Work } from "~/components/WorkCard";
import WorkCard from "~/components/WorkCard";
import Badge from "~/components/common/Badge";
import type { Price } from "~/components/PriceCard";
import PriceCard from "~/components/PriceCard";

export function meta({}: Route.MetaArgs): Route.MetaDescriptors {
  return [
    {
      title:
        "Pricing | Antartes - Transforming Bold Ideas Into Inspiring Experience",
    },
    {
      name: "description",
      content:
        "We believe in financial clarity. Our price structure is built to be as intensional as our code, ensuring your project receive the best possible value without the guess work.",
    },
  ];
}

export function loader({}: Route.LoaderArgs): { prices: Price[] } {
  return {
    prices: [
      {
        slug: "starter",
        title: "Starter",
        description: "For small bussiness & early stage products",
        includedItems: [
          {
            title: "Website (Up To 3 Pages)",
            description: "Responsive, CMS-Ready",
          },
          {
            title: "UI UX Design (Up To 10 Screens)",
            description: "Wireframes + High-Fidelity",
          },
          {
            title: "Brand Identity Basics",
            description: "Logo, Color, Typography",
          },
          {
            title: "No Mobile App",
            description: "Web Only",
          },
          {
            title: "2 Revision Round",
          },
        ],
        priceRange: {
          from: "$800",
          to: "$1500",
        },
      },
      {
        slug: "enterprise",
        title: "Enterprise",
        description: "For small bussiness & early stage products",
        includedItems: [
          {
            title: "Website (Up To 3 Pages)",
            description: "Responsive, CMS-Ready",
          },
          {
            title: "UI UX Design (Up To 10 Screens)",
            description: "Wireframes + High-Fidelity",
          },
          {
            title: "Brand Identity Basics",
            description: "Logo, Color, Typography",
          },
          {
            title: "No Mobile App",
            description: "Web Only",
          },
          {
            title: "2 Revision Round",
          },
        ],
        priceRange: {
          from: "$800",
          to: "$1500",
        },
      },
      {
        slug: "growth",
        title: "Growth",
        description: "For small bussiness & early stage products",
        includedItems: [
          {
            title: "Website (Up To 3 Pages)",
            description: "Responsive, CMS-Ready",
          },
          {
            title: "UI UX Design (Up To 10 Screens)",
            description: "Wireframes + High-Fidelity",
          },
          {
            title: "Brand Identity Basics",
            description: "Logo, Color, Typography",
          },
          {
            title: "No Mobile App",
            description: "Web Only",
          },
          {
            title: "2 Revision Round",
          },
        ],
        priceRange: {
          from: "$800",
          to: "$1500",
        },
      },
    ],
  };
}

export default function Pricing({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex items-center justify-center mt-10 md:mt-20 mb-8 px-5 md:px-0">
        <div className="text-center w-full md:w-[60%] lg:w-[40%] space-y-10">
          <h1 className="font-bold text-4xl md:text-5xl">Our Pricing</h1>
          <p className="font-medium text-white/70">
            We believe in financial clarity. Our price structure is built to be
            as intensional as our code, ensuring your project receive the best
            possible value without the guess work.
          </p>
        </div>
      </section>

      <div className="bg-background w-full py-1">
        {/* BACKGROUND */}
        <section className="px-5 md:px-20 py-10 space-y-10 my-10 md:my-20">
          <h3 className="text-center text-primary font-medium text-2xl">
            CHOOSE YOUR PLAN
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {loaderData.prices.map((price) => (
              <PriceCard
                key={price.slug}
                price={price}
                shouldScale={price.slug === "enterprise"}
              />
            ))}
          </div>
        </section>

        <StartProjectCTA />
      </div>
    </main>
  );
}
