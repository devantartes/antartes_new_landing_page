import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import React from "react";
import Badge from "./common/Badge";

export interface Service {
  icon: IconSvgElement;
  title: string;
  description: string;
  badges: string[];
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="space-y-10 bg-foreground hover:-translate-y-2 duration-200 rounded-4xl p-5 border border-border">
      <div className="space-y-3">
        <HugeiconsIcon icon={service.icon} className="text-primary" />
        <h4 className="text-xl font-bold">{service.title}</h4>
        <p className="text-sm">{service.description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {service.badges.map((badge, i) => (
          <Badge key={i}>{badge}</Badge>
        ))}
      </div>
    </div>
  );
}
