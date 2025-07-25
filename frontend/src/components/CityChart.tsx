import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Chart } from "chart.js";
import data from "../data/cities.json";
Chart.register(CategoryScale, LinearScale, BarElement);

export default function CityChart() {
  const labels = data.map((d) => d.city);
  const values = data.map((d) => d.pm25);
  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "PM₂.₅ (µg/m³)",
            data: values
          }
        ]
      }}
      options={{
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }}
    />
  );
}
