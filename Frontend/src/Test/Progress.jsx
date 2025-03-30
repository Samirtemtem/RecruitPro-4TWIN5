import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import TextField from '@mui/material/TextField';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22, // Align with the center of the icon
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
  color: isActive ? 'red' : '#eaeaf0', // Red for the active step only
  display: 'flex',
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  animation: isActive ? 'blink 1s infinite' : 'none', // Blink effect for active step
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0.3, transform: 'scale(1.2)' }, // Reduced scale for blink
    '100%': { opacity: 1 },
  },
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 24, // Larger circle for better visibility
    height: 24,
    borderRadius: '50%',
    backgroundColor: isActive ? 'red' : 'currentColor', // Red circle for active step
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

export default function DynamicProgressBar() {
  const steps = [
    'SUBMITTED',
    'REVIEWED',
    'INTERVIEWED',
    'REJECTED',
    'ACCEPTED',
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (event) => {
    const selectedStep = event.target.value;
    const index = steps.indexOf(selectedStep);
    if (index !== -1) {
      setActiveStep(index);
    }
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <TextField
        select
        label="Select Step"
        variant="outlined"
        SelectProps={{
          native: true,
        }}
        onChange={handleStepChange}
      >
        <option value="" disabled>Select a step</option>
        {steps.map((step) => (
          <option key={step} value={step}>
            {step}
          </option>
        ))}
      </TextField>

      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
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
    </Stack>
  );
}