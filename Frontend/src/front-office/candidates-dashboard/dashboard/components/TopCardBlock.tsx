import React, { useState, useEffect } from 'react';

interface CardItem {
  id: number;
  icon: string;
  countNumber: string;
  metaName: string;
  uiClass: string;
}

const TopCardBlock = () => {
  const [appliedJobsCount, setAppliedJobsCount] = useState('22');
  const [jobAlertsCount, setJobAlertsCount] = useState('9382');
  const [interviewsCount, setInterviewsCount] = useState('74');
  const [shortlistedJobsCount, setShortlistedJobsCount] = useState('32');

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      console.error('No userId found in local storage');
      return;
    }

    const fetchApplicationCount = async () => {
      try {
        const response = await fetch(`http://localhost:5000/stat-cand/candidate/${userId}/count`);
        if (!response.ok) {
          throw new Error('Failed to fetch application count');
        }
        const data = await response.json();
        setAppliedJobsCount(data.totalApplications.toString());
      } catch (error) {
        console.error('Error fetching application count:', error);
      }
    };

    const fetchJobAlertsCount = async () => {
      try {
        const response = await fetch(`http://localhost:5000/stat-cand/jobalert/${userId}/count`);
        if (!response.ok) {
          throw new Error('Failed to fetch job alerts count');
        }
        const data = await response.json();
        setJobAlertsCount(data.totalJobAlerts.toString());
      } catch (error) {
        console.error('Error fetching job alerts count:', error);
      }
    };

    const fetchInterviewsCount = async () => {
      try {
        const response = await fetch(`http://localhost:5000/stat-cand/interview/${userId}/count`);
        if (!response.ok) {
          throw new Error('Failed to fetch interviews count');
        }
        const data = await response.json();
        setInterviewsCount(data.totalInterviews.toString());
      } catch (error) {
        console.error('Error fetching interviews count:', error);
      }
    };

    const fetchShortlistedJobsCount = async () => {
      try {
        const response = await fetch(`http://localhost:5000/stat-cand/shortlisted/${userId}/count`);
        if (!response.ok) {
          throw new Error('Failed to fetch shortlisted jobs count');
        }
        const data = await response.json();
        setShortlistedJobsCount(data.totalShortlistedJobs.toString());
      } catch (error) {
        console.error('Error fetching shortlisted jobs count:', error);
      }
    };

    fetchApplicationCount();
    fetchJobAlertsCount();
    fetchInterviewsCount();
    fetchShortlistedJobsCount();
  }, []);

  const cardContent: CardItem[] = [
    {
      id: 1,
      icon: 'flaticon-briefcase',
      countNumber: appliedJobsCount,
      metaName: 'Applied Jobs',
      uiClass: 'ui-blue',
    },
    {
      id: 2,
      icon: 'la-file-invoice',
      countNumber: jobAlertsCount,
      metaName: 'Job Alerts',
      uiClass: 'ui-red',
    },
    {
      id: 3,
      icon: 'la-comment-o',
      countNumber: interviewsCount,
      metaName: 'Interviews',
      uiClass: 'ui-yellow',
    },
    {
      id: 4,
      icon: 'la-bookmark-o',
      countNumber: shortlistedJobsCount,
      metaName: 'Shortlist',
      uiClass: 'ui-green',
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>{item.countNumber}</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;