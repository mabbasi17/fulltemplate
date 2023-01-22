import { Box,  Grid } from '@mui/material';
import React from 'react'
import NavBar from '../Global/NavBar';
import SideBar from '../Global/SideBar';


export default function DashBoardLayout({ children }) {

  return (
    
    <Grid component="main" display={'flex'} sx={{minHeight: '100vh'}} >
      <SideBar  />
      <Grid item flex={10} sx={{ padding: '0px 20px'}}  >
        <NavBar />
        <Box sx={{ marginTop: '50px' }}>
          {children}
          </Box>
      </Grid>
      </Grid>
)
}
