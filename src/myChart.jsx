import React, { useRef, useEffect } from "react";
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
   BarElement, // bar chart uchun kerak
} from "chart.js";

ChartJS.register(
   LineElement,
   PointElement,
   CategoryScale,
   LinearScale,
   Title,
   Tooltip,
   Legend,
   BarElement
);

const MyChart = () => {
   const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

   const data = {
      labels: xValues,
      datasets: [
         {
            data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
            borderColor: "red",
            pointRadius: 2,
            tension: 0.4,
         },
         {
            data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
            borderColor: "green",
            pointRadius: 2,
            tension: 0.4,
         },
         {
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            pointRadius: 2,
            tension: 0.4,
         },
         {
            data: [500, 300, 3000, 4000, 5000, 2000, 4000, 2000, 500, 200],
            borderColor: "yellow",
            pointRadius: 2,
            tension: 0.4,
         },

      ],
   };

   const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
         legend: { display: false },
      },
   };

   const chartRef = useRef(null);
   const chartInstance = useRef(null);

   useEffect(() => {
      const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
      const yValues = [55, 49, 44, 24, 15];
      const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

      if (chartInstance.current) {
         chartInstance.current.destroy();
      }

      chartInstance.current = new ChartJS(chartRef.current, {
         type: "bar", // 🍀 endi bar chart
         data: {
            labels: xValues,
            datasets: [
               {
                  backgroundColor: barColors,
                  data: yValues,
               },
            ],
         },
         options: {
            scales: {
               y: {
                  beginAtZero: true,
                  ticks: {
                     stepSize: 10,
                  },
               },
            },
            plugins: {
               legend: { display: false },
               title: {
                  display: true,
                  text: "World Wine Production 2018",
                  font: { size: 16 },
               },
            },
         },
      });
   }, []);

   return (
      <>
         {/* Line chart */}
         <div
            style={{
               maxWidth: "1200px",
               height: "700px",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               paddingTop: "100px",
               margin: "0 auto",
            }}
         >
            <Line data={data} options={options} />
         </div>

         {/* Bar chart */}
         <div
            style={{
               maxWidth: "1200px",
               height: "700px",
               margin: "170px auto",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <canvas ref={chartRef}></canvas>
         </div>
      </>
   );
};

export default MyChart;
