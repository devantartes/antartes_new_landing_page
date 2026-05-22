import { Outlet } from "react-router";
import { type Route } from "./+types/_landing.get-started";
import Button from "~/components/common/Button";

export function meta({}: Route.MetaArgs): Route.MetaDescriptors {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function GetStarted() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex items-center justify-center mt-10 md:mt-20 mb-8 px-5 md:px-0">
        <div className="text-center w-full md:w-[60%] lg:w-[40%] py-10 md:py-20">
          <h1 className="font-bold text-4xl md:text-5xl">Work With Us</h1>
        </div>
      </section>

      <div className="bg-background w-full py-1">
        {/* BACKGROUND */}
        <section className="px-5 md:px-20 lg:px-40 py-10 space-y-10 my-10 md:my-20">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-5">
            <div className="space-y-3 w-full md:w-[30%] lg:w-[20%]">
              <h2 className="font-bold text-2xl">
                Let's build the future of your brand
              </h2>
              <p className="font-medium text-white/60">
                You'll hear from our team within 24 hours.
              </p>
            </div>
            <div className="space-y-3 w-full md:w-[70%] bg-foreground border border-border rounded-4xl p-5">
              <form action="" className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Fullname"
                    name="Fullname"
                    className="border border-border rounded-3xl p-5"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    className="border border-border rounded-3xl p-5"
                    required
                  />
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name/Website (optional)"
                      name="Company Name/Website"
                      className="border border-border rounded-3xl p-5 w-full"
                    />
                  </div>
                  <select
                    className="border border-border rounded-3xl p-5 w-full"
                    required
                  >
                    <option value="">Project Type</option>
                    <option value="s">ss</option>
                  </select>
                </div>
                <hr className="text-border" />
                <textarea
                  name="Project Description"
                  id=""
                  placeholder="What is the Primary Objective of this project"
                  className="border border-border rounded-3xl p-5 w-full"
                  required
                ></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <select
                    className="border border-border rounded-3xl p-5 w-full"
                    required
                  >
                    <option value="">Budge Range</option>
                    <option value="s">ss</option>
                  </select>
                  <select
                    className="border border-border rounded-3xl p-5 w-full"
                    required
                  >
                    <option value="">Timeline</option>
                    <option value="s">ss</option>
                  </select>
                </div>
                <hr className="text-border" />
                <textarea
                  name="Project Description"
                  id=""
                  placeholder="Are there any website or apps that inspire your vision, if yes kindly let us know."
                  className="border border-border rounded-3xl p-5 w-full"
                  required
                ></textarea>
                <textarea
                  name="Project Description"
                  id=""
                  placeholder="Anything else our team should know?"
                  className="border border-border rounded-3xl p-5 w-full"
                  required
                ></textarea>

                <Button
                  className="mx-auto w-full md:w-fit"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
