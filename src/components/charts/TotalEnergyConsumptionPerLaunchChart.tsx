import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { Launch } from "@/gql/graphql";
import { calculateEnergyConsumption } from "@/lib/helpers/calculateEnergyConsumption";
import { useTranslations } from "next-intl";

interface Props {
  selectedLaunches: Array<Launch> | null;
}

export function TotalEnergyConsumptionPerLaunchChart({
  selectedLaunches,
}: Props) {
  const t = useTranslations("Charts.TotalEnergyConsumptionPerLaunch");
  const chartData = retrieveChartData(selectedLaunches);

  const chartConfig = {
    totalAmountOfEnergy: {
      label: t("totalAmountOfEnergy"),
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 20,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="launch"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 40)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar
          dataKey="totalAmountOfEnergy"
          fill="var(--color-totalAmountOfEnergy)"
          radius={8}
        >
          <LabelList
            position="top"
            offset={12}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

function retrieveChartData(selectedLaunches: Props["selectedLaunches"]) {
  const chartData: Array<{
    launch: string;
    totalAmountOfEnergy: number;
  } | null> = [];

  selectedLaunches?.map((launch) => {
    const amountOfEnergyNeeded = calculateEnergyConsumption(launch);

    chartData.push({
      launch: launch.mission_name ?? "",
      totalAmountOfEnergy: amountOfEnergyNeeded,
    });
  });

  return chartData;
}
