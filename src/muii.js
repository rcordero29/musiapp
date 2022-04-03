import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import App from './App.js'

export default function MenuBar( ) {
  return (<div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            music app
          </Typography>
          {/* <Button variant="contained" onClick={(clicked)}>{status ? 'Log Out': 'log in'}</Button> */}
          {/* <Button variant="contained" onClick={clicked}>{status ? 'Log Out': 'log in'}</Button> */}

        </Toolbar>
      </AppBar>
    </Box>
  </div>

  );
}
