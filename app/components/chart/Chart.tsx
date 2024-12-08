"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TraitInterface } from "@/lib/features/zodiac/zodiacApiSlice";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart({ traits }: { traits: TraitInterface[] }) {
  return (
    <Card className={`h-full w-full`}>
      <p className={`text-center text-5xl my-2`}>Personality Traits</p>
      <CardContent>
        <ChartContainer
          config={chartConfig}
        >
          <RadarChart data={traits} className={`h-[600px]`}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="name" tick={{ fontSize: 18 }} />
            {/* <PolarRadiusAxis angle={90} tick={{ fontSize: 14, fill: "gray" }} /> */}
            <Tooltip />
            <PolarGrid />
            <Radar
              dataKey="percentage"
              stroke="var(--color-desktop)"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
