import { Button } from "@/components/ui/button";
import { BsStars } from "react-icons/bs";
import {
  GithubLogo,
  GoogleLogo,
  MicrosoftLogo,
  NotionLogo,
  UberLogo,
} from "@/assets/SvgLogos";

import BgMain from "@/assets/bg-main.png";

export const Hero = () => {
  return (
    <div className="container ">
    
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <h1 className="font-extrabold lg:text-7x md:text-6xl text-5xl max-w-4xl text-center mb-8">
          Generate Brilliant Ideas with{" "}
          <span className="pacifico-regular gradient-text ">GenioMind</span>
        </h1>
        <p className="max-w-lg text-center mb-4 text-muted-foreground">
          We help turn your ideas into reality using powerful AI insights and
          guidance.
        </p>

        <div className="my-8 border md:w-[500px] mx-5 h-[50px] flex items-center justify-between p-2 rounded-[20px] pl-5">
          <input
            placeholder="Enter your SaaS idea here..."
            className="bg-transparent flex-1 outline-none text-sm"
          />
          <Button className="flex items-center gap-2 py-5 rounded-[20px]">
            <p>Generate</p>
            <BsStars />
          </Button>
        </div>
      </div>

      <div className="rounded-xl ">
        <img
          src={BgMain}
          className="rounded-xl w-full lg:max-w-[1200px] border shadow-lg m-auto"
        />
      </div>
      <div className="my-20 flex flex-col gap-5 justify-center items-center">
        <div className="text-muted-foreground font-bold text-sm">
          AS SEEN AT
        </div>
        <div className="flex items-center md:gap-10  gap-5 flex-wrap justify-between">
          <GoogleLogo className="h-14 w-40 px-2 grayscale contrast-100 dark:brightness-0 dark:invert" />
          <MicrosoftLogo className="h-12 w-40 px-2 grayscale contrast-100 dark:brightness-0 dark:invert" />
          <GithubLogo className="h-12 w-40 px-2 grayscale contrast-100 dark:brightness-0 dark:invert" />
          <UberLogo className="h-12 w-40 px-2 grayscale contrast-100 dark:brightness-0 dark:invert" />
          <NotionLogo className="h-12 w-40 grayscale contrast-100 px-2 dark:brightness-0 dark:invert" />
        </div>
      </div>
    </div>
  );
};
