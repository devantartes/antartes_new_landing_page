import React from "react";
import Badge from "./common/Badge";

export interface Process {
  key: string;
  title: string;
  description: string;
  badges: string[];
}

export default function ProcessCard({ process }: { process: Process }) {
  return (
    <div
      className={`space-y-10 hover:-translate-y-2 bg-foreground duration-200 rounded-4xl px-5 py-10 border border-border`}
    >
      <div className="space-y-2">
        <div className="border border-border p-2 rounded-full font-medium w-fit">
          <p>{process.key}</p>
        </div>

        <h4 className="text-xl font-bold">{process.title}</h4>
        <p className="text-sm font-meduim text-white/60">
          {process.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {process.badges.map((badge, i) => (
          <Badge key={i}>{badge}</Badge>
        ))}
      </div>
    </div>
  );
}
