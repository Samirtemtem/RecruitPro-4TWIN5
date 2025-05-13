import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Job Applications Per Year',
    },
    tooltip: {
      position: 'nearest' as const,
      mode: 'index' as const,
      intersect: false,
      yPadding: 10,
      xPadding: 10,
      caretSize: 4,
      backgroundColor: 'rgba(72, 241, 12, 1)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 4,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Number of Applications',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Year',
      },
    },
  },
};

const ProfileChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Applications',
        data: [],
        borderColor: '#1967d2',
        backgroundColor: '#1967d2',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const fetchApplicationsPerYear = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          console.error('No userId found in local storage');
          return;
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/stat-cand/candidate/${userId}/applications-per-year`);
        if (!response.ok) {
          throw new Error('Failed to fetch applications per year');
        }
        const data = await response.json();

        const labels = data.applicationsPerYear.map((item: { year: number }) => item.year.toString());
        const counts = data.applicationsPerYear.map((item: { count: number }) => item.count);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Applications',
              data: counts,
              borderColor: '#1967d2',
              backgroundColor: '#1967d2',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching applications per year:', error);
      }
    };

    fetchApplicationsPerYear();
  }, []);

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Job Applications Per Year</h4>
        <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 years</option>
          </select>
        </div>
      </div>

      <div className="widget-content">
        <Line options={options} data={chartData} className="w-100" />
      </div>
    </div>
  );
};

export default ProfileChart;