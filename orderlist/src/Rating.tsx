import React from "react";

interface RatingCircleProps {
  rating: number; // Rating value from 0 to 5
}

const RatingCircle: React.FC<RatingCircleProps> = ({ rating }) => {
  const percentage = (rating / 5) * 100; // Convert rating to percentage
  const circumference = 251.2; // Full circle stroke length

  // Determine circle color based on rating
  const getColor = (): string => {
    if (rating >= 4) return "stroke-green-500 text-green-500";
    if (rating >= 2) return "stroke-yellow-500 text-yellow-500";
    return "stroke-red-500 text-red-500";
  };

  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      {/* Background Circle */}
      <svg className="absolute w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          fill="none"
          stroke="gray"
          strokeWidth="6"
          opacity="0.2"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute w-full h-full rotate-[-90deg]">
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          className={`transition-all duration-500 ${getColor()}`}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * percentage) / 100}
        />
      </svg>

      {/* Rating Number */}
      <span className={`text-lg font-bold ${getColor()}`}>{rating}</span>
    </div>
  );
};

export default RatingCircle;
