import {useState} from 'react'
import { Avatar, Box, Divider, IconButton, List, ListItem, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function SideBar() {
  const [expanded,ToggleExpanded]=useState(true)

  return (
    <Stack flex={expanded ? 2 : 0.5} sx={{ bgcolor: 'primary.light', position: 'relative', width: '200px', left: 0, top: 0, height: '100vh' }} display={'flex'}  alignItems={'center'} >
     
    

<IconButton color="secondary" onClick={() => { ToggleExpanded(!expanded) }} sx={{alignSelf:'start'}}>
  <MenuIcon />
</IconButton>
  

 
      <Avatar  sx={{ bgcolor: 'error.light', width: '70px', height: '70px' , margin: '10px' }}>N</Avatar>
      <Typography variant='h5' gutterBottom>Admin</Typography>

      <Divider sx={{ width: '100%'}} />
      
      <List  sx={{width: '100%',alignItems: 'center'}}>
        <ListItem  sx={{ alignItems: 'center'}}>
          <MenuIcon />
          <Typography variant='h5' gutterBottom>Products</Typography>
        </ListItem>
        <Divider sx={{width: '100%'}} />
        
        <ListItem  sx={{ alignItems: 'center'}}>
          <MenuIcon />
          <Typography variant='h5' gutterBottom>Orders</Typography>
        </ListItem>
        <Divider sx={{width: '100%'}} />
</List>
         
    </Stack>
  )
}

export default SideBar