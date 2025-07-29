"use client";

import { launchOptions } from "@/lib/getLaunch";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Title } from "@/components/Title";
import { InformationCard } from "@/components/cards/InformationCard";
import { useLocale, useTranslations } from "next-intl";
import { Subtitle } from "@/components/Subtitle";

interface Props {
  id: string;
}

export function LaunchDetail({ id }: Props) {
  const { data } = useSuspenseQuery(launchOptions(id));
  const locale = useLocale();
  const t = useTranslations();

  const { launch } = data;

  return (
    <div className="flex flex-col gap-4 container my-10 mx-auto">
      <Title>{launch?.mission_name}</Title>
      <div className="text-white">{launch?.details}</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <InformationCard
          title={t("LaunchDetail.launchDate")}
          description={
            launch?.launch_date_local
              ? new Date(launch.launch_date_local).toLocaleString(locale)
              : null
          }
        />
        <InformationCard
          title={t("LaunchDetail.payloadAmount")}
          description={launch?.rocket?.rocket?.payload_weights?.length ?? null}
        />
        <InformationCard
          title={t("LaunchDetail.rocket")}
          description={launch?.rocket?.rocket_name ?? null}
        />
      </div>
      <Subtitle>{t("LaunchDetail.payloadTitle")}</Subtitle>
      <div className="grid grid-cols-3 gap-2">
        {launch?.rocket?.rocket?.payload_weights &&
          launch?.rocket?.rocket?.payload_weights.length > 0 &&
          launch?.rocket?.rocket?.payload_weights.map((payloadWeight, id) => (
            <InformationCard
              key={id}
              title={`${t("LaunchDetail.payload")} ${id + 1}`}
              description={payloadWeight?.kg ?? 0}
            />
          ))}
      </div>
    </div>
  );
}
