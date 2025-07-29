import { getQueryClient } from "@/lib/helpers/getQueryClient"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { launchesOptions } from "@/lib/getLaunches";
import { Suspense } from "react";
import { Title } from "@/components/Title";
import { LaunchesSkeleton } from "@/components/skeletons/launches/LaunchesSkeleton";
import { Launches } from "@/components/launches/Launches";
import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import HeroSkeleton from "@/components/skeletons/hero/HeroSkeleton";

export default function Home() {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery(launchesOptions);
  const t = useTranslations("LaunchesPage");

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero
          imageSrc="/SES-10_Launch.jpg"
          imageAlt="Launch of the SES-10 mission"
        />
      </Suspense>
      <div className=" my-10 container mx-auto">
        <Title>{t("title")}</Title>
        <Suspense fallback={<LaunchesSkeleton />}>
          <Launches />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
