import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ApexOptions } from 'apexcharts';

interface Count {
  _id: number; // Year
  count: number; // Count of candidates
}

const CandidatesOverview: React.FC = () => {
  const [chartData, setChartData] = useState({
    years: [] as number[],
    totalCandidates: [] as number[],
    hiredCandidates: [] as number[],
  });
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error message

    try {
      const url = 'http://localhost:5000/api/user/count-per-year'; // Fetch all data
      const response = await axios.get(url);
      
      console.log('API Response:', response.data); // Log the full response

      if (!response.data || !response.data.counts) {
        throw new Error('Invalid response structure');
      }

      const counts: Count[] = response.data.counts;
      console.log('Counts:', counts); // Log the counts data

      const years = counts.map(item => item._id); // Extract years dynamically
      const totalCandidates = counts.map(item => item.count);
      const hiredCandidates = totalCandidates.map(count => Math.floor(count * 0.25)); // Example logic

      console.log('Processed Years:', years);
      console.log('Total Candidates:', totalCandidates);
      console.log('Hired Candidates:', hiredCandidates);

      setChartData({ years, totalCandidates, hiredCandidates });
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      console.error('Fetch error:', error); // Log the error to the console for debugging
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter data based on the selected year
  const filteredData = selectedYear !== null
    ? chartData.years
        .map((year, index) => ({
          year,
          total: chartData.totalCandidates[index],
          hired: chartData.hiredCandidates[index],
        }))
        .filter(item => item.year === selectedYear) // Only keep items that match the selected year
    : chartData.years.map((year, index) => ({
        year,
        total: chartData.totalCandidates[index],
        hired: chartData.hiredCandidates[index],
      }));

  const candidatesOverviewOptions: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ['#1E90FF', '#FF6347'], // Blue for total candidates, red for hired
    xaxis: {
      categories: filteredData.length > 0 ? filteredData.map(data => data.year) : [], // Dynamic categories based on filtered data
    },
    series: [
      {
        name: 'Total Candidates',
        data: filteredData.length > 0 ? filteredData.map(data => data.total) : [], // Total candidates from filtered data
      },
      {
        name: 'Hired Candidates',
        data: filteredData.length > 0 ? filteredData.map(data => data.hired) : [], // Hired candidates from filtered data
      },
    ],
  };

  return (
    <div className="col-xl-12 d-flex">
      <div className="card flex-fill">
        <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
          <h5 className="mb-2">Candidates Overview</h5>
          <div className="d-flex align-items-center">
            <div className="dropdown mb-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white border-0 btn-sm d-inline-flex align-items-center fs-13 me-2"
                data-bs-toggle="dropdown"
              >
                Candidates by Year
              </Link>
              <ul className="dropdown-menu dropdown-menu-end p-3">
                {chartData.years.map(year => (
                  <li key={year}>
                    <Link
                      to="#"
                      className="dropdown-item rounded-1"
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                    onClick={() => setSelectedYear(null)}
                  >
                    All Years
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body pb-0">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <ReactApexChart
              id="candidates-overview"
              options={candidatesOverviewOptions}
              series={candidatesOverviewOptions.series}
              type="bar"
              height={270}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidatesOverview;