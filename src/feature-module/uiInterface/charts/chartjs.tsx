import React, { useEffect } from "react";
import { Bar, Line, Doughnut, Pie, Radar, Scatter, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartJSExample = () => {
  // Bar Chart Data
  const barData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // Doughnut Chart Data
  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: ["Apple", "Banana", "Grapes"],
    datasets: [
      {
        data: [120, 150, 180],
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF"],
      },
    ],
  };

  // Radar Chart Data
  const radarData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Scores",
        data: [65, 59, 90, 81, 56],
        backgroundColor: "rgba(179, 181, 198, 0.2)",
        borderColor: "rgba(179, 181, 198, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Scatter Chart Data
  const scatterData = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          { x: 20, y: 30 },
          { x: 25, y: 45 },
          { x: 30, y: 50 },
        ],
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  // Polar Area Chart Data
  const polarData = {
    labels: ["Red", "Green", "Blue", "Yellow"],
    datasets: [
      {
        data: [11, 16, 7, 3],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  useEffect(() => {
    // Example for dynamically updating charts using Chart.js API if needed
  }, []);

  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Chart JS</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Bar Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Bar Chart</div>
              </div>
              <div className="card-body">
                <div style={{ width: "434px", height: "300px" }}>
                  <Bar data={barData} />
                </div>
              </div>
            </div>
          </div>
          {/* /Bar Chart */}

          {/* Line Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Line Chart</div>
              </div>
              <div className="card-body">
                <div style={{ width: "434px", height: "300px" }}>
                  <Line data={lineData} />
                </div>

              </div>
            </div>
          </div>
          {/* /Line Chart */}

          {/* Doughnut Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Doughnut Chart</div>
              </div>
              <div className="card-body">
                <div style={{ width: "434px", height: "300px" }}>
                  <Doughnut data={doughnutData} />
                </div>
              </div>
            </div>
          </div>
          {/* /Doughnut Chart */}

          {/* Pie Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Pie Chart</div>
              </div>
              <div className="card-body">
                <div style={{ width: "434px", height: "300px" }}>
                  <Pie data={pieData} />
                </div>

              </div>
            </div>
          </div>
          {/* /Pie Chart */}

          {/* Radar Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Radar Chart</div>
              </div>
              <div className="card-body">
                <div style={{ width: "434px", height: "300px" }}>
                  <Radar data={radarData} />
                </div>
              </div>
            </div>
          </div>
          {/* /Radar Chart */}

          {/* Scatter Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Scatter Chart</div>
              </div>
              <div className="card-body">
                <div style={{ width: "434px", height: "300px" }}>
                  <Scatter data={scatterData} />
                </div>
              </div>
            </div>
          </div>
          {/* /Scatter Chart */}

          {/* Polar Area Chart */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Polar Area Chart</div>
              </div>
              <div className="card-body">
                <div style={{ width: "434px", height: "300px" }} >
                  <PolarArea data={polarData} />
                </div>

              </div>
            </div>
          </div>
          {/* /Polar Area Chart */}
        </div>
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2014 - 2025 © SmartHR.</p>
        <p>
          Designed &amp; Developed By <Link to="#" className="text-primary">
              Dreams
            </Link>
        </p>
      </div>
    </div>
  );
};

export default ChartJSExample;
