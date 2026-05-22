import type { Route } from "./+types/_landing._index";
import {
  ArrowUpRight,
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
import Button from "~/components/common/Button";
import type { TeamMember } from "~/components/TeamMemberCard";
import TeamMemberCard from "~/components/TeamMemberCard";
import type { Work } from "~/components/WorkCard";
import WorkCard from "~/components/WorkCard";

export function meta({}: Route.MetaArgs): Route.MetaDescriptors {
  return [
    {
      title: "Antartes - Transforming Bold Ideas Into Inspiring Experience",
    },
    {
      name: "description",
      content: "Transforming Bold Ideas Into Inspiring Experience",
    },
  ];
}

export function loader({}: Route.LoaderArgs): {
  services: Service[];
  works: Work[];
  processes: Process[];
  teamMembers: TeamMember[];
} {
  return {
    services: [
      {
        icon: WebDesign02FreeIcons,
        title: "Web Development",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["React", "Next.js", "Typescript", "Node.js"],
      },
      {
        icon: MobileProgramming01Icon,
        title: "Mobile Apps",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["React Native", "Expo", "Swift", "Flutter"],
      },
      {
        icon: MobileProgramming01Icon,
        title: "UI/UX Design",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["Figma", "Design System", "Prototyping"],
      },
      {
        icon: PaintBoardIcon,
        title: "Digital Branding",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["Visual Identity", "Brand Strategy", "Logo Systems"],
      },
    ],
    works: [
      {
        bgImageSrc: "/laptop-dark.png",
        title: "Digital Branding",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["Visual Identity", "Brand Strategy", "Logo Systems"],
        complementText: "+340% conversion rate increase",
        link: "#",
      },
      {
        bgImageSrc: "/person-with-phone.png",
        title: "Digital Branding",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["Visual Identity", "Brand Strategy", "Logo Systems"],
        complementText: "+340% conversion rate increase",
        link: "#",
      },
    ],
    processes: [
      {
        key: "01",
        title: "Digital Branding",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["Visual Identity", "Brand Strategy", "Logo Systems"],
      },
      {
        key: "02",
        title: "Digital Branding",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["Visual Identity", "Brand Strategy", "Logo Systems"],
      },
      {
        key: "03",
        title: "Digital Branding",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam voluptatum ipsum corporis molestiae sint neque nisisequi aspernatur quia rerum unde vitae cum perspiciatis dolore omnis, nulla voluptate temporibus nobis!",
        badges: ["Visual Identity", "Brand Strategy", "Logo Systems"],
      },
    ],
    teamMembers: [
      {
        name: "Abdulazeez Mumuni",
        role: "Project Manager & Backend Engineer",
        socials: [
          { icon: Facebook02FreeIcons, title: "Facebook", link: "#" },
          { icon: Twitter, title: "X (Twitter)", link: "#" },
          { icon: Instagram, title: "Instagram", link: "#" },
        ],
      },
      {
        name: "Akalugwu Desmond",
        role: "UI UX Designer",
        socials: [
          { icon: Facebook02FreeIcons, title: "Facebook", link: "#" },
          { icon: Twitter, title: "X (Twitter)", link: "#" },
          { icon: Instagram, title: "Instagram", link: "#" },
        ],
      },
      {
        name: "Edunfunke Maxwell",
        role: "Frontend Deleloper",
        socials: [
          { icon: Facebook02FreeIcons, title: "Facebook", link: "#" },
          { icon: Twitter, title: "X (Twitter)", link: "#" },
          { icon: Instagram, title: "Instagram", link: "#" },
        ],
      },
      {
        name: "Chukwuchebem David",
        role: "UI UX Designer",
        socials: [
          { icon: Facebook02FreeIcons, title: "Facebook", link: "#" },
          { icon: Twitter, title: "X (Twitter)", link: "#" },
          { icon: Instagram, title: "Instagram", link: "#" },
        ],
      },
      {
        name: "Ahanotu David",
        role: "Graphics Designer & Brand Strategist",
        socials: [
          { icon: Facebook02FreeIcons, title: "Facebook", link: "#" },
          { icon: Twitter, title: "X (Twitter)", link: "#" },
          { icon: Instagram, title: "Instagram", link: "#" },
        ],
      },
    ],
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex items-center justify-center mt-10 md:mt-20 mb-5 px-5 md:px-0">
        <div className="text-center w-full md:w-[80%] lg:w-[50%] space-y-10">
          <h1 className="font-bold text-4xl md:text-5xl">
            Transforming Bold Ideas Into <br className="hidden md:block" /> Inspiring{" "}
            <span className="text-primary">Experience</span>
          </h1>
          <p className="font-medium text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            consequatur harum quia temporibus eum, eius quibusdam eos odit ex
            dicta itaque laudantium quod in placeat consequuntur illo magni
            praesentium voluptatibus!
          </p>
          <Link to={"/get-started"}>
            <Button className="mx-auto">
              Start a Project
            </Button>
          </Link>

          <div className="grid grid-cols-3 gap-2 sm:gap-5 text-center">
            <div className="space-y-1 sm:space-y-2">
              <h5 className="font-semibold text-lg sm:text-xl">120+</h5>
              <p className="text-xs sm:text-sm text-white/70">Project Shipped</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h5 className="font-semibold text-lg sm:text-xl">98%</h5>
              <p className="text-xs sm:text-sm text-white/70">Client Retention</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h5 className="font-semibold text-lg sm:text-xl">8+</h5>
              <p className="text-xs sm:text-sm text-white/70">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background w-full py-1">
        {/* Trusted Companies */}
        <section className="border-y-2 border-border py-10 space-y-10 my-10 md:my-20 overflow-hidden">
          <h3 className="text-center text-primary font-medium text-2xl">
            TRUSTED BY TEAM AT
          </h3>

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-20 px-10">
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
                <p className="font-bold text-white/60 text-xl">Google</p>
              </div>
            ))}
          </div>
        </section>
        {/* WHAT WE DO */}
        <section className="px-5 md:px-20 py-10 space-y-10 my-10 md:my-20" id="services">
          <h3 className="text-center text-primary font-medium text-2xl">
            WHAT WE DO
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {loaderData.services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </section>
        {/* SELECT WORK */}
        <section className="px-5 md:px-20 py-10 space-y-10 my-10 md:my-20" id="works">
          <h3 className="text-center text-primary font-medium text-2xl">
            SELECT WORK
          </h3>

          <div className="grid grid-cols-1 gap-5">
            {loaderData.works.map((work, idx) => (
              <WorkCard key={idx} work={work} />
            ))}
          </div>
        </section>
        {/* OUR TRUSTED PROCESS */}
        <section className="px-5 md:px-20 py-10 space-y-10 my-10 md:my-20" id="processes">
          <h3 className="text-center text-primary font-medium text-2xl">
            OUR TRUSTED PROCESS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {loaderData.processes.map((process, idx) => (
              <ProcessCard key={idx} process={process} />
            ))}
          </div>
        </section>
        {/* MEET OUR TEAM */}
        <section className="px-5 md:px-20 py-10 space-y-10 my-10 md:my-20">
          <h3 className="text-center text-primary font-medium text-2xl">
            MEET OUR TEAM
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {loaderData.teamMembers.map((teamMember, idx) => (
              <TeamMemberCard key={idx} teamMember={teamMember} />
            ))}
          </div>
        </section>
        <StartProjectCTA />
      </div>
    </main>
  );
}
