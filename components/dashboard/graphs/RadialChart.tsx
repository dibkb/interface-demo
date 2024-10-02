"use client";
import React from "react";
import ChartLayout from "./Layout";
import { RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ArrowUp from "@/components/icons/ArrowUp";

const chartData = [
  { platform: "flipkart", cases: 16038, fill: "#000000" },
  { platform: "amazon", cases: 37817, fill: "#0A5823" },
  { platform: "zepto", cases: 8382, fill: "#3EC76A" },
];
const chartConfig = {
  flipkart: {
    label: "flipkart",
    color: "#000000",
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
            <h2 className="text-interface-base-black text-4xl">62,237</h2>
            <span className="flex items-center gap-1 text-interface-primary-800">
              {" "}
              <ArrowUp className="size-3" />
              32.1%
            </span>
          </span>
          <div className="flex flex-col gap-3 text-sm font-semibold text-interface-neutrals-500 mt-6">
            {chartData.map((ele) => {
              return (
                <div
                  key={ele.cases}
                  className="flex items-center justify-between"
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
              );
            })}
          </div>
        </div>

        <div className="p-0 my-2">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[350px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={-380}
              innerRadius={70}
              outerRadius={130}
            >
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    nameKey="cases"
                    className="bg-white"
                  />
                }
              />
              <RadialBar dataKey="cases" background>
                {/* <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              /> */}
              </RadialBar>
            </RadialBarChart>
          </ChartContainer>
        </div>
      </div>
    </ChartLayout>
  );
};

export default RadialChart;
