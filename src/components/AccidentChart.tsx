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
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AccidentesChart = () => {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    datasets: [
      {
        label: "Accidents ",
        data: [2, 3, 1, 4, 2, 5, 3, 2, 4, 3, 2, 1], // Datos ficticios más pequeños
        borderColor: "#3B82F6", // blue-500 de Tailwind
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#2563EB", // blue-600 al pasar el ratón
        borderWidth: 2,
        tension: 0.4, // Suaviza la línea
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "currentColor", // gray-700 de Tailwind
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "currentColor" },
        grid: { color: "currentColor" }, // gray-300 con opacidad
      },
      y: {
        ticks: { color: "currentColor" },
        grid: { color: "currentColor" },
      },
    },
  };

  return (
    <div className="py-6 md:py-0 w-full md:w-1/2 p-4 rounded-xl border-1 flex flex-col justify-baseline">
      <h2 className="text-2xl font-semibold mb-4 py-6">Risk last year</h2>
      <div className="h-96 mt-auto">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export { AccidentesChart };