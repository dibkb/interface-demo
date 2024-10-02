"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartLayout from "./Layout";

export const description = "A horizontal bar chart";

const chartData = [
  { platform: "Flipkart", amount: 186 },
  { platform: "Amazon", amount: 305 },
  { platform: "Zepto", amount: 237 },
];

const chartConfig = {
  amount: {
    label: "Amount",
    color: "#33b05b",
  },
} satisfies ChartConfig;

export function BarchartHorizontal() {
  return (
    <ChartLayout title="Reimbursements by Marketplace ">
      <ChartContainer config={chartConfig} className="mt-3">
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            left: -20,
          }}
        >
          <CartesianGrid vertical={true} horizontal={false} />
          <XAxis type="number" dataKey="amount" />
          <YAxis
            dataKey="platform"
            type="category"
            tickLine={false}
            tickMargin={100}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel className="bg-white" />}
          />
          <Bar dataKey="amount" fill="#33b05b" radius={5} barSize={45}>
            <LabelList
              dataKey="platform"
              content={(props) => (
                <CustomLabel
                  {...(props as { x?: number; y?: number; value: string })}
                />
              )}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ChartLayout>
  );
}
function CustomLabel({
  x,
  y,
  value,
}: {
  x?: number;
  y?: number;
  value: string;
}) {
  return (
    <text
      x={x}
      y={y}
      dy={-8}
      dx={0}
      textAnchor="start"
      fill="#878787"
      className="font-semibold text-sm"
    >
      {value}
    </text>
  );
}
