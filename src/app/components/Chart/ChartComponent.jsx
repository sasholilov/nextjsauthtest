"use client";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

export const ChartComponent = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Overview",
        data: [0, 1500, 3000, 4500, 6000],
        backgroundColor: "black",
        borderWidth: 1,
        borderColor: "black",
      },
    ],
  };
  Chart.register(CategoryScale);

  return <Bar data={data} />;
};
