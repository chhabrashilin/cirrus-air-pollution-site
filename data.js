const cities = [
  "Delhi","Beijing","Lahore","Mexico City","Los Angeles",
  "London","Sydney","Tokyo","Johannesburg","Paris"
];
const pm25 = [92,78,85,41,23,14,8,13,27,15]; // μg/m³

new Chart(document.getElementById("pmChart"), {
  type: "bar",
  data: {
    labels: cities,
    datasets: [{ label: "PM₂.₅ (μg/m³)", data: pm25 }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});
