import { type Route } from "./+types/_landing.works.mobile-development";
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
import type { TeamMember } from "~/components/TeamMemberCard";
import TeamMemberCard from "~/components/TeamMemberCard";
import type { Work } from "~/components/WorkCard";
import WorkCard from "~/components/WorkCard";
import Badge from "~/components/common/Badge";

export function meta({}: Route.MetaArgs): Route.MetaDescriptors {
  return [
    { title: "Mobile App Development | Works | Antartes" },
    { name: "description", content: "Discover how we architected a mobile bank that captured 50,000 users in its first month." },
  ];
}

export default function MobileDevelopmentWork() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex items-center justify-center mt-10 md:mt-20 mb-8 px-5 md:px-0">
        <div className="text-center w-full md:w-[60%] lg:w-[40%] space-y-10">
          <h1 className="font-bold text-4xl md:text-5xl">Mobile App</h1>
          <p className="font-medium text-white/70">
            Discover how we architechted a mobile bank that captured 50,000
            users on its first month.
          </p>
        </div>
      </section>

      <div className="bg-background w-full py-1">
        <div className="mx-5 md:mx-20 my-5 md:my-10 bg-no-repeat bg-cover h-64 md:h-120 rounded-4xl border border-border bg-[url(/laptop-dark.png)]"></div>
        {/* BACKGROUND */}
        <section className="px-5 md:px-20 lg:px-40 py-10 space-y-10 my-10 md:my-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-5">
            <div className="space-y-3 w-full md:w-[60%]">
              <h2 className="font-bold text-2xl">Background</h2>
              <p className="font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                tenetur itaque? Totam commodi sint nulla provident sequi illum?
                Tempore voluptatibus eum ullam consequuntur ipsum iure
                recusandae delectus culpa eligendi dolorem?
              </p>
              <p className="font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                tenetur itaque? Totam commodi sint nulla provident sequi illum?
                Tempore voluptatibus eum ullam consequuntur ipsum iure
                recusandae delectus culpa eligendi dolorem?
              </p>
            </div>
            <div className="space-y-3 w-full md:w-[30%] bg-foreground border border-border rounded-4xl p-5">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <p className="font-bold">Industry:</p>
                <p className="text-white/60 font-medium">Fintech</p>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <p className="font-bold">Location:</p>
                <p className="text-white/60 font-medium">Nigeria</p>
              </div>
              <div className="space-y-3">
                <p className="font-bold">Service used:</p>
                <div className="grid grid-cols-2 gap-3">
                  <Badge>Web Architechture</Badge>
                  <Badge>System Design</Badge>
                  <Badge>Mobile Engieering</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  SOLUTION */}
        <section className="px-5 md:px-20 lg:px-40 py-10 space-y-10 my-10 md:my-20">
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between gap-10 md:gap-5">
            <div className="space-y-3 w-full md:w-[40%] lg:w-[30%]">
              <h2 className="font-bold text-2xl">Solution</h2>
              <ul className="list-disc space-y-4">
                <li>
                  <p className="text-white/60">
                    <span className="font-bold text-white">
                      Financial System Archtechture:
                    </span>{" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Similique doloribus incidunt optio facere ratione in
                    temporibus enim, ipsum dignissimos non molestiae, labore
                    perspiciatis officiis repellendus! Iusto illum numquam in
                    eligendi.
                  </p>
                </li>
                <li>
                  <p className="text-white/60">
                    <span className="font-bold text-white">
                      Financial System Archtechture:
                    </span>{" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Similique doloribus incidunt optio facere ratione in
                    temporibus enim, ipsum dignissimos non molestiae, labore
                    perspiciatis officiis repellendus! Iusto illum numquam in
                    eligendi.
                  </p>
                </li>
                <li>
                  <p className="text-white/60">
                    <span className="font-bold text-white">
                      Financial System Archtechture:
                    </span>{" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Similique doloribus incidunt optio facere ratione in
                    temporibus enim, ipsum dignissimos non molestiae, labore
                    perspiciatis officiis repellendus! Iusto illum numquam in
                    eligendi.
                  </p>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-10 w-full md:w-[50%] lg:w-auto">
              <img
                src="/laptop-on-desk.png"
                className="w-full sm:w-80"
                alt="template-img"
              />
              <img
                src="/girl-with-phone.png"
                className="w-full sm:w-80 sm:mt-10"
                alt="template-img"
              />
              <img src="/code.png" className="w-full sm:w-80" alt="template-img" />
              <img
                src="/chip-with-light.png"
                className="w-full sm:w-80 sm:mt-10"
                alt="template-img"
              />
            </div>
          </div>
        </section>
        {/* RESULT */}
        <section className="px-5 md:px-20 lg:px-40 py-10 space-y-10 my-10 md:my-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5">
            <div className="space-y-3 w-full md:w-[60%]">
              <h2 className="font-bold text-2xl">Result</h2>
              <p className="font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                tenetur itaque? Totam commodi sint nulla provident sequi illum?
                Tempore voluptatibus eum ullam consequuntur ipsum iure
                recusandae delectus culpa eligendi dolorem? Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Quas, tenetur itaque?
                Totam commodi sint nulla provident sequi illum? Tempore
                voluptatibus eum ullam consequuntur ipsum iure recusandae
                delectus culpa eligendi dolorem?
              </p>
            </div>

            <img
              src="/girl-in-gradient-bg.png"
              alt="Image of the product result"
              className="w-full md:w-auto"
            />
          </div>
        </section>
        <StartProjectCTA />
      </div>
    </main>
  );
}
