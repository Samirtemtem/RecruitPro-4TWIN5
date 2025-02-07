import React from "react";
import { Chart } from "primereact/chart";
import { Link } from "react-router-dom";

const PrimeReactChart = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40, 60, 75],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1
      }
    ]
  };

  const areaData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Product A',
        data: [30, 40, 45, 50, 55, 70, 80],
        fill: true,
        borderColor: '#66BB6A',
        backgroundColor: 'rgba(102, 187, 106, 0.2)',
        tension: 0.4
      },
      {
        label: 'Product B',
        data: [40, 50, 55, 60, 65, 80, 95],
        fill: true,
        borderColor: '#FF7043',
        backgroundColor: 'rgba(255, 112, 67, 0.2)',
        tension: 0.4
      }
    ]
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [40, 60, 90, 100, 110, 130, 150],
        backgroundColor: '#42A5F5'
      }
    ]
  };

  const stackedBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Product A',
        data: [65, 59, 80, 81, 56],
        backgroundColor: '#66BB6A'
      },
      {
        label: 'Product B',
        data: [28, 48, 40, 19, 96],
        backgroundColor: '#FF7043'
      },
      {
        label: 'Product C',
        data: [40, 20, 50, 40, 30],
        backgroundColor: '#FFEB3B'
      }
    ]
  };

  const mixedData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        type: 'bar',
        label: 'Website Visits',
        data: [40, 80, 60, 90, 100],
        backgroundColor: '#42A5F5'
      },
      {
        type: 'line',
        label: 'Bounce Rate',
        data: [10, 20, 30, 20, 10],
        fill: false,
        borderColor: '#FF7043'
      }
    ]
  };

  const donutData = {
    labels: ['Apple', 'Orange', 'Banana', 'Grapes'],
    datasets: [
      {
        data: [300, 50, 100, 200],
        backgroundColor: ['#FF7043', '#66BB6A', '#42A5F5', '#FFEB3B']
      }
    ]
  };

  const radialData = {
    labels: ['Red', 'Green', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ['#FF7043', '#66BB6A', '#42A5F5', '#FFEB3B']
      }
    ]
  };

  const polarData = {
    labels: ['Red', 'Green', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [40, 20, 30, 10],
        backgroundColor: ['#FF7043', '#66BB6A', '#42A5F5', '#FFEB3B']
      }
    ]
  };

  return (
    <>
      <div className="page-wrapper cardhead">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Prime Charts</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Line Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Line Chart</h5>
                </div>
                <div className="card-body">
                  <Chart type="line" data={lineData} style={{ width: '400px', height: '300px' }} />
                </div>
              </div>
            </div>
            {/* Area Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Area Chart</h5>
                </div>
                <div className="card-body">
                  <Chart type="line" data={areaData} />
                </div>
              </div>
            </div>
            {/* Column Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Bar Chart</h5>
                </div>
                <div className="card-body">
                  <Chart type="bar" data={barData} />
                </div>
              </div>
            </div>
            {/* Stacked Bar Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Stacked Bar Chart</h5>
                </div>
                <div className="card-body">
                  <Chart type="bar" data={stackedBarData} options={{ scales: { x: { stacked: true }, y: { stacked: true } } }} style={{ width: '400px', height: '300px' }} />
                </div>
              </div>
            </div>
            {/* Mixed Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Mixed Chart</h5>
                </div>
                <div className="card-body">
                  <Chart type="line" data={mixedData} style={{ width: '400px', height: '300px' }} />
                </div>
              </div>
            </div>
            {/* Donut Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Donut Chart</h5>
                </div>
                <div className="card-body">
                  <Chart type="doughnut" data={donutData} style={{ width: '400px', height: '300px' }}/>
                </div>
              </div>
            </div>
            {/* Radial Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Radial Chart</h5>
                </div>
                <div className="card-body">
                  <Chart type="radar" data={radialData}style={{ width: '400px', height: '300px' }} />
                </div>
              </div>
            </div>
            {/* Polar Area Chart */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Polar Area Chart</h5>
                </div>
                <div className="card-body">
                  <Chart type="polarArea" data={polarData} style={{ width: '400px', height: '300px' }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default PrimeReactChart;
