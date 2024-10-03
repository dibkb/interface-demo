import React from "react";
interface RadialProps {
  percentage: number;
  size: number;
  strokeWidth: number;
  backgroundColor: string;
  foregroundColor: string;
}

const Radial = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  backgroundColor = "#e0e0e0",
  foregroundColor = "#3498db",
}: RadialProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference * (1 - percentage / 100);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={foregroundColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
};

export default Radial;
