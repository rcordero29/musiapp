import React, { useEffect } from 'react';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function Dashboard() {
  useEffect(() => {
    

  }, []);

  return (
    <div className="Dashboard">
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >    <Paper elevation={3}  /></Box>
    

      <div>this is the dashboard</div>
    </div>
  );
}

export default Dashboard;
