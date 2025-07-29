import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { Launch } from "@/gql/graphql";
import { useTranslations } from "next-intl";

interface Props {
  selectedLaunches: Array<Launch> | null;
}

export function LaunchesPayloadWeightChart({ selectedLaunches }: Props) {
  const t = useTranslations("Charts.LaunchesPayloadWeight");

  const chartData = retrieveChartData(selectedLaunches);
  const chartConfig = {
    weight: {
      label: t("weight"),
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
        <Bar dataKey="weight" fill="var(--color-weight)" radius={8}>
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
  const chartData: Array<{ launch: string; weight: number } | null> = [];

  selectedLaunches?.map((launch) => {
    let payload = 0;

    if (launch.rocket?.rocket?.payload_weights !== null) {
      launch.rocket?.rocket?.payload_weights?.map((payloadWeight) => {
        payload += payloadWeight && payloadWeight.kg ? payloadWeight?.kg : 0;
      });
    }

    chartData.push({
      launch: launch.mission_name ?? "",
      weight: payload,
    });
  });

  return chartData;
}
