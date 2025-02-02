"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function HeroCard() {
  return (
    <CardContainer className="inter-var ">
      <CardBody className=" relative group/card dark:hover:shadow-2xl animate-[float_3s_ease-in-out_infinite] transition-all ease-linear dark:hover:shadow-cyan-500/[0.2]  dark:border-white/[0.2] border-black/[0.1] w-auto h-auto bg-gradient-to-br from-[#415780] via-[#4d7794] to-[#bfd5fd] rounded-[62%_38%_68%_32%_/_57%_58%_42%_43%] overflow-hidden border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/HeroPhoto.png"
            height="1000"
            width="1000"
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-2xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
