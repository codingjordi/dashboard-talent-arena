import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los módulos de Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const AccidentesChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Accidents",
        data: [2, 3, 1, 4, 2, 5, 3, 2], // Datos ficticios más pequeños
        borderColor: "#3B82F6", // blue-500 de Tailwind
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#2563EB", // blue-600 al pasar el ratón
        borderWidth: 8,
        tension: 0.4, // Suaviza la línea
        pointRadius: 0, // Quitar los puntos
      },
      {
        label: "Solved Accidents",
        data: [1, 2, 0, 3, 1, 5, 3, 2], // Datos ficticios menores
        borderColor: "#10B981", // green-500 de Tailwind
        pointBackgroundColor: "#10B981",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#059669", // green-600 al pasar el ratón
        borderWidth: 8,
        tension: 0.4, // Suaviza la línea
        pointRadius: 0, // Quitar los puntos
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#374151", // gray-700 de Tailwind
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#374151" },
        grid: { color: "#D1D5DB" }, // gray-300 con opacidad
      },
      y: {
        ticks: { color: "#374151", stepSize: 1, beginAtZero: true }, // Mostrar solo números enteros
        grid: { color: "#D1D5DB" },
      },
    },
  };

  return (
    <div className="py-6 md:py-0 w-full md:w-1/2 p-4 rounded-xl border-1 flex-grow">
      <h2 className="text-2xl font-semibold mb-4 py-6">Risk last year</h2>
      <div className="h-96 mt-auto">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export { AccidentesChart };
