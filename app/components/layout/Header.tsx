import {
  ArrowUpRight,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "../common/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // initially check if the user has scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`px-4 md:ps-4 py-4 md:py-0 flex flex-col md:flex-row md:items-center justify-between border-b sticky top-0 z-50 transition-all duration-300 bg-background
    ${isScrolled && "bg-foreground"}
    `}
    >
      <div className="flex items-center justify-between">
        <Link to={"/"} className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Antartes Logo" className="h-8 md:h-auto" />
          <h3 className="text-xl md:text-2xl font-bold">Antartes</h3>
        </Link>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <HugeiconsIcon icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon} />
        </button>
      </div>

      <nav
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-y-4 gap-x-10 font-medium">
          <li>
            <Link to="/#services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/#works" onClick={() => setIsMobileMenuOpen(false)}>
              Works
            </Link>
          </li>
          <li>
            <Link to="/#processes" onClick={() => setIsMobileMenuOpen(false)}>
              Process
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block mt-4 md:mt-0`}
      >
        <Link to={"/get-started"} onClick={() => setIsMobileMenuOpen(false)}>
          <Button variant="solid" className="w-full md:w-auto mx-auto">
            Start a Project <HugeiconsIcon icon={ArrowUpRight} />
          </Button>
        </Link>
      </div>
    </header>
  );
}
