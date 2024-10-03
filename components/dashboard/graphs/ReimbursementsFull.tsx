"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Dots from "@/components/icons/Dots";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 311, mobile: 140 },
  { month: "August", desktop: 411, mobile: 140 },
  { month: "September", desktop: 61, mobile: 140 },
  { month: "October", desktop: 420, mobile: 140 },
  { month: "November", desktop: 142, mobile: 140 },
  { month: "December", desktop: 264, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ReimbursementsFull() {
  return (
    <div className="p-8 bg-interface-neutrals-50 border rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Reimbursements</h3>
        <button className="p-1 bg-interface-neutrals-100 rounded-lg">
          <Dots className="text-interface-base-black" />
        </button>
      </div>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="linear"
            stroke="#3EC76A"
            strokeWidth={2}
            dot={{
              r: 6,
              fill: "#ffffff",
              stroke: "#000000",
              strokeWidth: 4,
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
