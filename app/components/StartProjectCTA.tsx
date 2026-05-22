import React from "react";
import { Link } from "react-router";
import Button from "./common/Button";

export default function StartProjectCTA() {
  return (
    <section className="px-5 md:px-20 py-10 md:py-20 space-y-10 mt-10 md:mt-20 border-y border-border bg-foreground">
      <h3 className="text-center text-primary font-medium text-2xl">
        READY TO SCALE?
      </h3>

      <div className="flex items-center justify-center">
        <div className="text-center w-full md:w-[80%] lg:w-[50%] space-y-10">
          <h1 className="font-bold text-3xl md:text-5xl">
            Let's build something{" "}
            <span className="text-primary">extraordinary</span> together.
          </h1>
          <p className="font-medium text-white/70">
            Tell us about your project and we will get back to you within 24
            hours
          </p>

          <Link to={"/get-started"}>
            <Button className="mx-auto">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
