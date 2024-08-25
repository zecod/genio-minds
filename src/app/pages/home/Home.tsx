import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

const Home = () => {
  return (
    <main className="relative">
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
