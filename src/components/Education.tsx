import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import Image from "next/image";
import { transform } from "motion/react";

export default function Education() {
  const testimonials = [
    {
      name: "The Ultimate React Course ",
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      designation: "Udemy",
      src: "/certifications/udemy.png",
    },
    {
      name: "NEXT.JS",
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",

      designation: "Alura",
      src: "/certifications/alura.png",
    },
    {
      name: "Web Development",
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",

      designation: "Mimo",
      src: "/certifications/mimo.png",
    },
    {
      name: "Web Programmer",
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",

      designation: "IFRS",
      src: "/certifications/IFRS.png",
    },
    {
      name: "Business Management & IT Services",
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",

      designation: "FIAP",
      src: "/certifications/fiapbm.png",
    },
  ];
  return (
    <div id="education">
      <h3 className=" text-sky-500 text-6xl font-bold text-center">
        Education
      </h3>
      <div className="flex  justify-center p-20 gap-8 ">
        <div className="flex items-center justify-center flex-col h-full ">
          <h3 className="text-sky-100 text-4xl font-bold text-center">
            Graduation
          </h3>
          <CardContainer className="sm:w-[40vw]">
            <CardBody className=" bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm my-2 dark:text-neutral-300"
              >
                I am current a
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Software Engineering Student <br /> at FIAP
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/fiap.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        <div className="flex items-center justify-start flex-col h-auto ">
          <h3 className="text-sky-100 text-4xl font-bold text-center">
            Certifications
          </h3>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </div>
  );
}
