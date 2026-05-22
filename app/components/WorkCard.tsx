import React from "react";
import Badge from "./common/Badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import Button from "./common/Button";

export interface Work {
  bgImageSrc: string;
  link: string;
  title: string;
  description: string;
  badges: string[];
  complementText: string;
}
export default function WorkCard({ work }: { work: Work }) {
  return (
    <div
      className={`group space-y-10 hover:-translate-y-2 bg-no-repeat bg-cover h-150 duration-200 rounded-4xl px-5 py-10 border border-border flex flex-col items-center justify-between`}
      style={{ backgroundImage: `url(${work.bgImageSrc})` }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-wrap items-center gap-3">
          {work.badges.map((badge, i) => (
            <Badge key={i}>{badge}</Badge>
          ))}
        </div>
        <Button variant="icon">
          <HugeiconsIcon icon={ArrowUpRight} />
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-5">
        <div className="space-y-3 w-full md:w-[60%]">
          <h4 className="text-xl font-bold text-primary">{work.title}</h4>
          <p className="text-sm font-meduim">{work.description}</p>
        </div>
        <div className="border border-border px-4 py-2 rounded-4xl w-full sm:w-[50%] md:w-auto h-auto min-h-15 flex items-center justify-center text-center bg-primary/10 backdrop-blur-3xl">
          {work.complementText}
        </div>
      </div>
    </div>
  );
}
