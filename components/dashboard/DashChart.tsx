"use client";
import { useRef, useState, useLayoutEffect } from "react";

interface DashChartProps {
  data: DataPoint[];
}
interface DataPoint {
  title: string;
  count: number;
  color: string;
}
const DashChart = ({ data }: DashChartProps) => {
  const count = data.reduce((acc, curr) => {
    acc = curr.count;
    return acc;
  }, 0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.offsetWidth);
    }
  }, []);
  return (
    <div className="flex w-full" ref={elementRef}>
      {data.map((item, index) => {
        // Proportional width based on the total count
        const widthPercentage = (item.count / count) * 100;
        const numberOfBars = Math.round(widthPercentage);
        return (
          <div
            key={index}
            className="flex gap-2"
            style={{
              width: `${widthPercentage}%`,
              //   background: item.color,
            }}
          >
            {Array.from({ length: numberOfBars }, (_, id) => (
              <span
                key={id}
                className="inline-block w-1 h-[81px] rounded-lg"
                style={{ background: item.color }}
              ></span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default DashChart;
