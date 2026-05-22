import {
  Facebook02Icon,
  Instagram,
  Linkedin,
  Linkedin02FreeIcons,
  Linkedin02Icon,
  Twitter,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="px-5 md:px-20 py-10 md:py-20 border-y border-border bg-foreground flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
        <div className="space-y-8 text-white/60 w-full md:w-[30%] lg:w-[20%]">
          <div>
            <Link to={"/"} className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Antartes Logo" />
              <h3 className="text-2xl font-bold text-white">Antartes</h3>
            </Link>
            <p>A digital agency obsessed with building product that perform.</p>
          </div>
          <div>
            <Link
              to={"mailto:antartes.agency@gmail.com"}
              className="font-medium underline break-all"
            >
              antartes.agency@gmail.com
            </Link>

            <div className="flex items-center gap-x-5 mt-5">
              <Link to={"#"} className="flex">
                <HugeiconsIcon icon={Facebook02Icon} />
              </Link>
              <Link to={"#"} className="flex">
                <HugeiconsIcon icon={Twitter} />
              </Link>
              <Link to={"#"} className="flex">
                <HugeiconsIcon icon={Instagram} />
              </Link>
              <Link to={"#"} className="flex">
                <HugeiconsIcon icon={Linkedin02Icon} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 justify-between w-full md:w-[60%] lg:w-[50%]">
          <div className="space-y-3">
            <h5 className="text-xl font-medium">Services</h5>
            <ul className="space-y-5">
              <li>
                <Link to={"#"} className="text-white/60 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to={"#"} className="text-white/60 hover:text-white">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to={"#"} className="text-white/60 hover:text-white">
                  UI UX Design
                </Link>
              </li>
              <li>
                <Link to={"#"} className="text-white/60 hover:text-white">
                  Digital Branding
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-xl font-medium">Company</h5>
            <ul className="space-y-5">
              <li>
                <Link to={"#"} className="text-white/60 hover:text-white">
                  Service
                </Link>
              </li>
              <li>
                <Link to={"#"} className="text-white/60 hover:text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link to={"#"} className="text-white/60 hover:text-white">
                  Process
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-xl font-medium">Legal</h5>
            <ul className="space-y-5">
              <li>
                <Link
                  target="_blank"
                  to={"/legal/privacy-policy"}
                  className="text-white/60 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/legal/terms"}
                  className="text-white/60 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-5 border-y border-border bg-foreground flex flex-col sm:flex-row gap-3 items-center justify-between text-white/60 text-center sm:text-left">
        <p>&copy; {new Date().getFullYear()} Antartes. All right reserved</p>
        <p>Crafted with precision.</p>
      </div>
    </footer>
  );
}
