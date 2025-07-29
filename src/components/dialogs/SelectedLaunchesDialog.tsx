"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Launch } from "@/gql/graphql";
import { Dispatch, SetStateAction } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LaunchesPayloadWeightChart } from "@/components/charts/LaunchesPayloadWeightChart";
import { TotalEnergyConsumptionPerLaunchChart } from "@/components/charts/TotalEnergyConsumptionPerLaunchChart";
import { TotalEnergyConsumptionAllLaunchesChart } from "@/components/charts/TotalEnergyConsumptionAllLaunchesChart";
import { useTranslations } from "next-intl";
import { ChartCard } from "../cards/ChartCard";

interface Props {
  isSelectedLaunchesDialogOpen: boolean;
  selectedLaunches: Array<Launch> | null;
  setIsSelectedLaunchesDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export function SelectedLaunchesDialog({
  selectedLaunches,
  isSelectedLaunchesDialogOpen,
  setIsSelectedLaunchesDialogOpen,
}: Props) {
  const t = useTranslations();

  return (
    <Dialog open={isSelectedLaunchesDialogOpen}>
      <DialogContent
        className="min-w-screen min-h-screen z-1000"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>{t("Dialogs.SelectedLaunches.title")}</DialogTitle>
          <DialogDescription>
            {t("Dialogs.SelectedLaunches.description")}
          </DialogDescription>
        </DialogHeader>
        {selectedLaunches && selectedLaunches.length > 0 && (
          <div className="flex flex-1 flex-col gap-4 overflow-y-scroll">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <ChartCard
                title={t("Charts.LaunchesPayloadWeight.title")}
                description={t("Charts.LaunchesPayloadWeight.description")}
              >
                <LaunchesPayloadWeightChart
                  selectedLaunches={selectedLaunches}
                />
              </ChartCard>
              <ChartCard
                title={t("Charts.TotalEnergyConsumptionPerLaunch.title")}
                description={t(
                  "Charts.TotalEnergyConsumptionPerLaunch.description"
                )}
              >
                <TotalEnergyConsumptionPerLaunchChart
                  selectedLaunches={selectedLaunches}
                />
              </ChartCard>
              <ChartCard
                title={t("Charts.TotalEnergyConsumptionAllLaunchesChart.title")}
              >
                <TotalEnergyConsumptionAllLaunchesChart
                  selectedLaunches={selectedLaunches}
                />
              </ChartCard>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  {selectedLaunches.map((launch) => (
                    <TableHead key={launch.id}>{launch.mission_name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    {t("LaunchDetail.rocket")}
                  </TableCell>
                  {selectedLaunches.map((launch) => (
                    <TableCell key={launch.id}>
                      {launch.rocket?.rocket_name}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    {t("LaunchDetail.launchYear")}
                  </TableCell>
                  {selectedLaunches.map((launch) => (
                    <TableCell key={launch.id}>
                      {launch.launch_year ?? "Unknown"}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    {t("LaunchDetail.launchDate")}
                  </TableCell>
                  {selectedLaunches.map((launch) => (
                    <TableCell key={launch.id}>
                      {new Date(launch.launch_date_utc).toLocaleDateString()}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              onClick={() => setIsSelectedLaunchesDialogOpen(false)}
            >
              {t("Dialogs.SelectedLaunches.closeButton")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
