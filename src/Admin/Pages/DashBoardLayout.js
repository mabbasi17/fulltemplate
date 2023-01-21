import { Box, Container, Grid, Stack } from '@mui/material';
import { calculateNewValue } from '@testing-library/user-event/dist/utils/edit/calculateNewValue';
import React from 'react'
import NavBar from '../Global/NavBar';
import SideBar from '../Global/SideBar';
import DashBoard from './Dashboard';

export default function DashBoardLayout({ children }) {

  return (
    
    <Grid component="main" display={'flex'} >


    <SideBar/>

      
      <Grid item flex={10}  >
        <NavBar />
        <Box sx={{height: 'calc(100vh - 50px)',  position: 'absolute', top: '50px'}}>
          {children}
          </Box>
      </Grid>

      </Grid>
)
}
