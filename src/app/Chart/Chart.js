'use client';
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

const AnChart = () => {
  const chartRef = useRef(null);
  const [fontSize, setFontSize] = useState(20);
  const [chartHeight, setChartHeight] = useState(350);
  const [screenWidth, setScreenWidth] = useState(0); // Initialize with a default value

  // This effect will run only after the component is mounted on the client side
  useEffect(() => {
    const updateChartSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width); // Update screenWidth with window.innerWidth
      setFontSize(width >= 1024 ? 20 : width >= 768 ? 16 : 12);
      setChartHeight(width >= 1024 ? 350 : width >= 600 ? 300 : 280);
    };

    window.addEventListener('resize', updateChartSize);
    updateChartSize(); // Call it immediately to set initial values

    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  useEffect(() => {
    const xValues = [
      "Client Retention",
      "Budget Growth",
      "ROI",
      "Service Demand",
      "Agency Growth"
    ];
    const yValues = [90, 56, 82, 79, 65];

    const ctx = chartRef.current.getContext('2d');

    const chartInstance = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: '#eeede4', // Solid fill for bars
          data: yValues,
          borderWidth: 0,
          borderRadius: 8,
          barPercentage: 0.7,
          categoryPercentage: 0.6,
          hoverBorderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: { bottom: 30 }
        },
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            font: {
              size: fontSize + 4,
              weight: 'bold',
              family: 'Poppins, sans-serif'
            },
            color: '#333',
            padding: {
              top: 10,
              bottom: 20,
            }
          },
          datalabels: {
            anchor: 'end',
            align: 'top',
            offset: 4,
            color: '#004d40',
            font: {
              size: fontSize,
              weight: 'bold',
              family: 'Poppins',
            },
            formatter: (value) => {
              // Hide the "100%" text on smaller screens
              if (screenWidth < 768) return `${value}%`; // Only show value without "/100%" on smaller screens
              return `${value}% / 100%`;
            },
          },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#000',
            bodyColor: '#333',
            borderColor: '#00c9a7',
            borderWidth: 1,
            cornerRadius: 6,
            padding: 10
          },
        },
        scales: {
          y: { display: false },
          x: {
            ticks: {
              color: '#444',
              font: {
                size: fontSize * 0.8,
                weight: '500',
              },
              callback: function (val, index) {
                const label = this.getLabelForValue(val);
                return label.length > 14 ? label.split(" ") : label;
              },
              maxRotation: screenWidth < 768 ? 90 : 0,  // Rotate text 90 degrees on small screens
              minRotation: screenWidth < 768 ? 90 : 0,  // Rotate text 90 degrees on small screens
              autoSkip: false,
            },
            grid: { display: false }
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeOutBack',
        }
      },
      plugins: [
        {
          id: 'greenTopCap',
          afterDatasetsDraw(chart) {
            const { ctx } = chart;
            chart.data.datasets.forEach((dataset, i) => {
              const meta = chart.getDatasetMeta(i);
              ctx.save();
              ctx.fillStyle = "#00c9a7"; // Green top cap
              meta.data.forEach((bar) => {
                const { x, y, width } = bar;
                const capHeight = 6; // height of the green top
                ctx.beginPath();
                ctx.roundRect(x - width / 2, y, width, capHeight, 4); // draw a small rounded rectangle
                ctx.fill();
              });
              ctx.restore();
            });
          }
        }
      ]
    });

    return () => {
      chartInstance.destroy();
    };
  }, [fontSize, chartHeight, screenWidth]);  // Including screenWidth here ensures the chart updates when window size changes

  return (
    <div
      style={{
        width: "100%",
        padding: "20px 10px 30px",
        borderRadius: "12px",
        boxShadow: "0 4px 18px rgba(0, 0, 0, 0.05)",
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <canvas
        ref={chartRef}
        style={{
          width: "100%",
          height: `${chartHeight}px`,
          transition: 'height 0.4s ease'
        }}
      />
    </div>
  );
};

export default AnChart;
