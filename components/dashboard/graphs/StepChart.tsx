"use client";

import { Area, AreaChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartLayout from "./Layout";
import ArrowUp from "@/components/icons/ArrowUp";

export const description = "A linear area chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AreaChartStep() {
  return (
    <ChartLayout title="Monthly overview">
      <span className="font-bold flex flex-col gap-3 my-9">
        <h2 className="text-interface-base-black text-4xl">₹18,536</h2>
        <div className="flex items-center gap-3 invisible">
          <span className="flex items-center gap-1 text-interface-primary-800 border border-interface-primary-800 bg-[#CBEDD6] w-min whitespace-nowrap px-2 rounded-xl">
            {" "}
            <ArrowUp className="size-3" />
            12%
          </span>
          <p className="text-interface-neutrals-500"> vs last month</p>
        </div>
      </span>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <XAxis
            dataKey="month"
            axisLine={{ stroke: "#E9E9E9", strokeWidth: 1 }}
            tickLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent className="bg-white" />}
          />
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3EC76A" stopOpacity={0.8} />
              <stop offset="95%" stopColor="white" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            dataKey="desktop"
            type="step"
            fill="url(#fillDesktop)"
            fillOpacity={0.4}
            stroke="#3EC76A"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </ChartLayout>
  );
}
