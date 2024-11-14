document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("trendsChart").getContext("2d");

  const gradientToday = ctx.createLinearGradient(0, 0, 0, 400);
  gradientToday.addColorStop(0, "rgba(55, 81, 255, 0.1)");
  gradientToday.addColorStop(1, "rgba(55, 81, 255, 0)");

  const gradientYesterday = ctx.createLinearGradient(0, 0, 0, 400);
  gradientYesterday.addColorStop(0, "rgba(223, 224, 235, 0.1)");
  gradientYesterday.addColorStop(1, "rgba(223, 224, 235, 0)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["", "0", "4", "8", "12", "16", "20", "24"],
      datasets: [
        {
          label: "Today",
          data: [30, 45, 25, 60, 30, 80, 40],
          borderColor: "#3751FF",
          backgroundColor: gradientToday,
          fill: true,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#3751FF",
          pointHoverBorderColor: "#fff",
          pointHoverBorderWidth: 4,
        },
        {
          label: "Yesterday",
          data: [40, 30, 40, 35, 50, 35, 45],
          borderColor: "#DFE0EB",
          backgroundColor: gradientYesterday,
          fill: true,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#DFE0EB",
          pointHoverBorderColor: "#fff",
          pointHoverBorderWidth: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
        tooltip: {
          mode: "index",
          intersect: false,
          backgroundColor: "#252733",
          titleColor: "#9FA2B4",
          bodyColor: "#fff",
          bodyFont: {
            size: 14,
            weight: "bold",
          },
          padding: 12,
          borderColor: "#3751FF",
          borderWidth: 1,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(223, 224, 235, 0.4)",
            drawBorder: false,
          },
          ticks: {
            color: "#9FA2B4",
            padding: 10,
            font: {
              size: 12,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#9FA2B4",
            padding: 10,
            font: {
              size: 12,
            },
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  });
});
