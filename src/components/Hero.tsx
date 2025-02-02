import Link from "next/link";
import { HeroCard } from "./HeroCard";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className=" flex justify-center flex-col-reverse sm:flex-row items-center h-screen gap-24"
    >
      <article className=" max-w-[37vw] ">
        <h1>
          <TypewriterEffectSmooth
            className="text-xs sm:text-base md:text-2xl lg:text:4xl xl:text-6xl font-bold "
            words={[
              {
                text: "Hello",
              },
              {
                text: "I'm",
              },

              {
                text: "Jesse",
                className:
                  "dark:bg-gradient-to-br dark:from-[#86bada] dark:via-[#7d9fb8] to-[#bfd5fd] dark:bg-clip-text dark:text-transparent",
              },
            ]}
          />
        </h1>

        <h3 className="text-xl font-bold mb-4 ">
          <TextGenerateEffect
            duration={0.5}
            words={`A Software Developer based in Brazil.`}
          />
        </h3>
        <div>
          <TextGenerateEffect
            duration={1}
            words={`I excel at crafting elegant digital experiences and i am proficient in
          various programming languages and technologies.`}
          />
        </div>
        <div className="flex gap-6 py-6 px-3 items-center  ">
          <Link
            className=" "
            href="https://www.linkedin.com/in/jess%C3%A9-marques-193228201/"
            target="_blank"
          >
            <FaLinkedin className="h-10 w-10" />
          </Link>
          <Link href="https://github.com/Jessemarques7" target="_blank">
            <FaGithub className="h-10 w-10" />
          </Link>
          <Link href="mailto:jessemateus919@gmail.com" target="_blank">
            <FaEnvelope className="h-10 w-10" />
          </Link>
          <Link
            href="https://www.instagram.com/jesse_marques7/"
            target="_blank"
          >
            <FaInstagram className="h-10 w-10" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5548999897553&text="
            target="_blank"
          >
            <FaWhatsapp className="h-10 w-10" />
          </Link>
        </div>
      </article>
      <HeroCard />
    </section>
  );
}
