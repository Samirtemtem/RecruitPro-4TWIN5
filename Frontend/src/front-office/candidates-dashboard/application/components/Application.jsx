import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom'; // Import useParams to get the ID from the URL

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, isActive }) => ({
  color: isActive ? 'red' : '#eaeaf0',
  display: 'flex',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  animation: isActive ? 'blink 1s infinite' : 'none',
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0.3, transform: 'scale(1.2)' },
    '100%': { opacity: 1 },
  },
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: isActive ? 'red' : 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className, isActive } = props;

  return (
    <QontoStepIconRoot className={className} isActive={isActive}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#f9f9f9',
  border: 'none',
}));

const ResponsiveTable = styled(Table)(({ theme }) => ({
  '@media (max-width: 600px)': {
    fontSize: '0.8rem',
  },
}));

export default function DynamicProgressBar() {
  const steps = [
    'SUBMITTED',
    'REVIEWED',
    'INTERVIEWED',
    'REJECTED',
    'ACCEPTED',
  ];

  const { id } = useParams(); // Get the ID from the URL
  const [activeStep, setActiveStep] = useState(0);
  const [applicationData, setApplicationData] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await fetch(`http://localhost:5000/app/applications/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApplicationData(data);
        const currentStepIndex = steps.indexOf(data.status); // Set current step based on status
        setActiveStep(currentStepIndex);
      } catch (error) {
        console.error('Error fetching application:', error);
      }
    };

    fetchApplication();
  }, [id]);

  if (!applicationData) {
    return <Typography variant="h6">Loading...</Typography>; // Loading state
  }

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <br />
      <br />
    

      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
        {steps.map((label, index) => (
          <Step key={label} onClick={() => setActiveStep(index)}>
            <StepLabel StepIconComponent={(props) => (
              <QontoStepIcon {...props} isActive={activeStep === index} />
            )}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Additional Information Section with Styled Card */}
      <StyledCard variant="outlined">
        <CardContent>
          <Typography variant="h6" className="mb-2" gutterBottom>
            Application Details
          </Typography>
          <TableContainer component={Paper}>
            <ResponsiveTable>
              <TableHead>
                <TableRow>
                  <TableCell>Detail</TableCell>
                  <TableCell align="right">Information</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Applied Date</TableCell>
                  <TableCell align="right"><strong>{new Date(applicationData.submissionDate).toLocaleDateString()}</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Applied Job</TableCell>
                  <TableCell align="right"><strong>{applicationData.jobPost.title}</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Status</TableCell>
                  <TableCell align="right"><strong>{applicationData.status}</strong></TableCell>
                </TableRow>
              
              </TableBody>
            </ResponsiveTable>
          </TableContainer>
        </CardContent>
      </StyledCard>
    </Stack>
  );
}