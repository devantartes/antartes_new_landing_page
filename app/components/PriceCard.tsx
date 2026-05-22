import { BadgeCheck } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Button from "./common/Button";

export interface Price {
  slug: "starter" | "enterprise" | "growth";
  title: string;
  description: string;
  includedItems: { title: string; description?: string }[];
  priceRange: { from: string; to: string };
}

export default function PriceCard({
  price,
  shouldScale = false,
}: {
  price: Price;
  shouldScale?: boolean;
}) {
  return (
    <div
      className={`space-y-3 bg-foreground border border-border rounded-4xl p-5 ${shouldScale && "md:scale-y-110"}`}
    >
      <div className="text-center px-5">
        <h4 className="text-xl font-bold">{price.title}</h4>
        <p>{price.description}</p>
      </div>
      <div>
        <h6 className="text-white/60 font-light text-center">
          WHAT'S INCLUDED
        </h6>
        <div className="border-t-2  border-border w-full p-5 space-y-4">
          {price.includedItems.map((item, idx) => (
            <div className="flex items-center gap-x-2" key={idx}>
              <HugeiconsIcon icon={BadgeCheck} className="text-primary" />
              <div>
                <h6>{item.title}</h6>
                {item.description && (
                  <p className="text-xs text-white/60">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="border-y-2  border-border w-full p-2 space-y-2 text-center">
          <p className="text-white/60">Estimated price range</p>
          <h4 className="text-xl font-medium">
            {price.priceRange.from} ~ {price.priceRange.to}
          </h4>
        </div>

        <div className="text-center my-5">
          <Button className="mx-auto">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
