"use client";

import { launchOptions } from "@/lib/getLaunch";
import { getLaunchHeroImage } from "@/lib/helpers/getLaunchImageHero";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";

interface Props {
  id: string;
}

export default function LaunchHero({ id }: Props) {
  const { data } = useSuspenseQuery(launchOptions(id));

  return (
    <div className="relative w-full h-[500px]">
      {data &&
      data.launch &&
      typeof getLaunchHeroImage(data?.launch) === "string" ? (
        <Image
          src={getLaunchHeroImage(data?.launch) as string}
          alt={`Hero Image showing the launch of ${data.launch.mission_name}`}
          fill
          className="object-cover object-top"
          priority
        />
      ) : (
        <div className="bg-neutral-700 w-full h-[500px]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
