"use client";
import React from "react";
import ChartLayout from "./Layout";
import { RadialBar, RadialBarChart, Tooltip } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ArrowUp from "@/components/icons/ArrowUp";

// Sample chart data
const chartData = [
  { platform: "flipkart", cases: 36038, fill: "#000000" },
  { platform: "amazon", cases: 7817, fill: "#0A5823" },
  { platform: "zepto", cases: 8382, fill: "#3EC76A" },
];

// Total cases calculation
const totalCount = chartData.reduce((acc, curr) => acc + curr.cases, 0);

// Add a new field 'percentage' to the data
const proportionalData = chartData.map((entry) => ({
  ...entry,
  percentage: (entry.cases / totalCount) * 100, // percentage for each platform
}));

// Chart configuration
const chartConfig = {
  flipkart: {
    label: "flipkart",
    color: "#303030",
  },
  amazon: {
    label: "amazon",
    color: "#0A5823",
  },
  zepto: {
    label: "zepto",
    color: "#3EC76A",
  },
} satisfies ChartConfig;

const RadialChart = () => {
  return (
    <ChartLayout title="Cases Raised">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="font-bold flex flex-col gap-3">
            <p className="text-interface-neutrals-400">Total</p>
            <h2 className="text-interface-base-black text-4xl">
              {totalCount.toLocaleString()}
            </h2>
            <span className="flex items-center gap-1 text-interface-primary-800">
              <ArrowUp className="size-3" />
              32.1%
            </span>
          </span>
          <div className="flex flex-col gap-3 text-sm font-semibold text-interface-neutrals-500 mt-6">
            {proportionalData.map((ele) => (
              <div
                key={ele.platform}
                className="flex items-center justify-between max-w-52"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="rounded-md"
                    style={{
                      width: "8px",
                      height: "16px",
                      backgroundColor: ele.fill,
                    }}
                  ></span>
                  <p className="capitalize">{ele.platform}</p>
                </span>
                <h3 className="text-interface-base-black">{ele.cases}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="p-0 my-2">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[350px]"
          >
            <RadialBarChart
              innerRadius={70}
              outerRadius={130}
              startAngle={90}
              endAngle={-270}
              barSize={16}
              data={proportionalData}
            >
              <RadialBar
                cornerRadius={16}
                background={{ fill: "red" }}
                dataKey="percentage" // Proportional fill
              />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent className="bg-white" />}
              />
            </RadialBarChart>
          </ChartContainer>
        </div>
      </div>
    </ChartLayout>
  );
};

export default RadialChart;
