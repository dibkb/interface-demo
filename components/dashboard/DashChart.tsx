"use client";
import { ChevronRight } from "lucide-react";
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
    acc += curr.count;
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
        // gap-16 + width -4
        const numberOfBars =
          Math.floor((widthPercentage * width) / 100 / 20) - 1;

        return (
          <div
            key={index}
            style={{
              width: `${widthPercentage}%`,
            }}
            className="flex gap-4 items-end"
          >
            <span
              className="w-1 h-[181px] rounded-lg"
              style={{ background: item.color }}
            ></span>
            <main className="flex flex-col gap-14">
              <section className="flex items-center gap-8 w-min ml-4">
                <span className="font-bold text-interface-base-black">
                  <h2 className="text-xs whitespace-nowrap">{item.title}</h2>
                  <h5 className="text-2xl whitespace-nowrap">{item.count}</h5>
                </span>
                <button className="p-1">
                  <ChevronRight />
                </button>
              </section>
              <div className="flex gap-4">
                {Array.from({ length: numberOfBars }, (_, id) => (
                  <span
                    key={id}
                    className="inline-block w-1 h-[81px] rounded-lg"
                    style={{ background: item.color }}
                  ></span>
                ))}
              </div>
            </main>
          </div>
        );
      })}
    </div>
  );
};

export default DashChart;
