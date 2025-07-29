import { getQueryClient } from "@/lib/helpers/getQueryClient"
import { Locale } from "next-intl";
import { launchOptions } from "@/lib/getLaunch";
import { LaunchDetail } from "@/components/launches/LaunchDetail";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import LaunchHero from "@/components/LaunchHero";
import HeroSkeleton from "@/components/skeletons/hero/HeroSkeleton";
import { LaunchDetailSkeleton } from "@/components/skeletons/launches/LaunchDetailSkeleton";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { id } = await params;

  const queryClient = getQueryClient();
  queryClient.prefetchQuery(launchOptions(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<HeroSkeleton />}>
        <LaunchHero id={id} />
      </Suspense>
      <Suspense fallback={<LaunchDetailSkeleton />}>
        <LaunchDetail id={id} />
      </Suspense>
    </HydrationBoundary>
  );
}
