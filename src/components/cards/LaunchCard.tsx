import { Launch } from "@/gql/graphql";
import { Dispatch, SetStateAction } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface Props {
  launch: Launch | null;
  selectedLaunches: Array<Launch> | null;
  setSelectedLaunches: Dispatch<SetStateAction<Launch[] | null>>;
}

export function LaunchCard({
  launch,
  selectedLaunches,
  setSelectedLaunches,
}: Props) {
  const t = useTranslations("Cards.Launch");

  if (!launch) {
    return null;
  }

  return (
    <div className="border-1 bg-neutral-950 border-neutral-700 p-8 hover:bg-neutral-300 hover:text-black transition-all flex flex-row gap-2 justify-between">
      <Link
        className="flex-4/5 hover:underline"
        href={`/launches/${launch.id}`}
      >
        <p className="text-2xl font-normal">{launch.mission_name}</p>
        <p className="text-md font-normal">{launch.rocket?.rocket_name}</p>
        <p className="text-sm font-light text-gray-500">{launch.launch_year}</p>
      </Link>
      <div className="flex flex-1/5 flex-col gap-2">
        <p className="text-xs text-neutral-600">{t("addToComparison")}</p>
        <Checkbox
          className="border-2 border-neutral-500 w-10 h-10"
          checked={!!selectedLaunches?.some((l) => l?.id === launch.id)}
          onCheckedChange={(checked) => {
            setSelectedLaunches((prev) => {
              const prevList = prev ?? [];
              const isAlreadySelected = prevList.some(
                (l) => l?.id === launch.id
              );

              if (checked && !isAlreadySelected) {
                return [...prevList, launch];
              } else if (!checked && isAlreadySelected) {
                return prevList.filter((l) => l?.id !== launch.id);
              } else {
                return prevList;
              }
            });
          }}
        />
      </div>
    </div>
  );
}
