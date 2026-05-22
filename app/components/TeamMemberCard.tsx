import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import React from "react";
import { Link } from "react-router";
import Badge from "./common/Badge";
import { User } from "@hugeicons/core-free-icons";

export interface TeamMember {
  name: string;
  role: string;
  socials: {
    icon: IconSvgElement;
    title: string;
    link: string;
  }[];
}
export default function TeamMemberCard({
  teamMember,
}: {
  teamMember: TeamMember;
}) {
  return (
    <div
      className={`space-y-5 hover:-translate-y-2 bg-foreground duration-200 rounded-4xl px-5 py-5 border border-border`}
    >
      <div className="space-y-2 flex flex-col items-center text-center">
        <div className="border border-border p-2 rounded-full font-medium w-fit flex items-center justify-center">
          <HugeiconsIcon icon={User} size={100} />
        </div>

        <h4 className="text-xl font-bold">{teamMember.name}</h4>
        <p className="text-sm font-meduim text-white/60">{teamMember.role}</p>
      </div>

      <div className="flex items-center justify-center gap-5">
        {teamMember.socials.map((social, i) => (
          <Link to={social.link} key={i} className="flex">
            <Badge
              title={social.title}
              className="flex items-center justify-center w-fit text-white/60 hover:bg-primary hover:text-black duration-200"
            >
              <HugeiconsIcon icon={social.icon} />
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
