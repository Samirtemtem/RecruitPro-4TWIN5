import React, { useState } from 'react';
import { DateRangePicker } from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.css';

const PredefinedDateRanges: React.FC = () => {
  const [state, setState] = useState({
    start: moment().subtract(6, 'days'),
    end: moment(),
  });

  const { start, end } = state;

  const handleCallback = (start: moment.Moment, end: moment.Moment) => {
    setState({ start, end });
  };

  // Format to "MM/DD/YYYY"
  const label = `${start.format('MM/DD/YYYY')} - ${end.format('MM/DD/YYYY')}`;

  return (
    <DateRangePicker
  
      initialSettings={{
        startDate: start.toDate(),
        endDate: end.toDate(),
        ranges: {
          Today: [moment().toDate(), moment().toDate()],
          Yesterday: [moment().subtract(1, 'days').toDate(), moment().subtract(1, 'days').toDate()],
          'Last 7 Days': [moment().subtract(6, 'days').toDate(), moment().toDate()],
          'Last 30 Days': [moment().subtract(29, 'days').toDate(), moment().toDate()],
          'This Month': [moment().startOf('month').toDate(), moment().endOf('month').toDate()],
          'Last Month': [
            moment().subtract(1, 'month').startOf('month').toDate(),
            moment().subtract(1, 'month').endOf('month').toDate(),
          ],
        },
      }}
      onCallback={handleCallback}
    >
      <div
        id="reportrange daterangepicker"
        className='new-date'
      >
        <span>{label}</span>
      </div>
    </DateRangePicker>
  );
};

export default PredefinedDateRanges;
