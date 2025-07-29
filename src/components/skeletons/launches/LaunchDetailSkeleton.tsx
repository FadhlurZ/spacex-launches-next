"use client";

import { Title } from "@/components/Title";
import { useTranslations } from "next-intl";
import { InformationCardSkeleton } from "../cards/InformationCardSkeleton";

export function LaunchDetailSkeleton() {
  const t = useTranslations("Skeletons");

  return (
    <div className="flex flex-col gap-4 container my-10 mx-auto animate-pulse">
      <Title>{t("loading")}</Title>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <InformationCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
