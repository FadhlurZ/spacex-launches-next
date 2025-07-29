"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Launch } from "@/gql/graphql";
import { calculateEnergyConsumption } from "@/lib/helpers/calculateEnergyConsumption";
import { formatEnergy } from "@/lib/helpers/formatEnergy";
import { useTranslations } from "next-intl";

interface Props {
  selectedLaunches: Array<Launch> | null;
}

export function TotalEnergyConsumptionAllLaunchesChart({
  selectedLaunches,
}: Props) {
  const chartConfig = retrieveChartConfig(
    selectedLaunches
  ) satisfies ChartConfig;
  const t = useTranslations("Charts.TotalEnergyConsumptionAllLaunchesChart");
  const chartData = retrieveChartData(selectedLaunches);

  const totalAmountOfEnergy = React.useMemo(() => {
    return chartData.reduce(
      (acc, curr) =>
        acc + (curr?.totalAmountOfEnergy ? curr?.totalAmountOfEnergy : 0),
      0
    );
  }, [chartData]);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="totalAmountOfEnergy"
          nameKey="launch"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {formatEnergy(totalAmountOfEnergy)}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      {t("chartDescription")}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

function retrieveChartData(selectedLaunches: Props["selectedLaunches"]) {
  const chartData: Array<{
    launch: string;
    totalAmountOfEnergy: number;
    fill: string;
  } | null> = [];
  selectedLaunches?.map((launch, index) => {
    const amountOfEnergyNeeded = calculateEnergyConsumption(launch);

    chartData.push({
      launch: launch.mission_name ?? "",
      totalAmountOfEnergy: amountOfEnergyNeeded,
      fill: `var(--chart-${index + 1})`,
    });
  });

  return chartData;
}

type ChartEntry = {
  label: string;
  color?: string;
};

type ChartConfig = Record<string, ChartEntry>;

function retrieveChartConfig(selectedLaunches: Props["selectedLaunches"]) {
  const chartConfig: ChartConfig = {
    energy: {
      label: "Energy",
    },
  };

  selectedLaunches?.forEach((launch, index) => {
    const missionName = launch.mission_name;

    if (missionName) {
      chartConfig[missionName] = {
        label: missionName,
        color: `var(--chart-${index + 1})`,
      };
    }
  });

  return chartConfig;
}
