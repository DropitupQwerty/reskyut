import { AppBar, Drawer, Toolbar, Typography, Box, IconButton, ButtonBase, ListItem, List, ListItemIcon, ListItemText, Divider, Avatar, Tooltip } from '@mui/material'
import React from 'react'
import Image from "next/image";
import { Head } from 'next/head';
import global from '../styles/global';
import { useState } from "react";
import { useRouter } from "next/router";
export default function AdminLayout({children}) {

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const setDrawerOpen = () => {
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
  };
  const drawerGotoPage = (url)=> {
    setOpen(false);
    router.push(url);
  }
  return (
<Box>
  <head>
    <title>Admin-Dashboard</title>
  </head>
  <AppBar>
    <Toolbar color="primary">
      <IconButton onClick={setDrawerOpen}>
        <Image src="/assets/svg/bars.svg" alt="bars" width={30} height={30}/>
      </IconButton>
      <Typography sx={{marginLeft: "12px"}}>Reskyut</Typography>
    </Toolbar>
  </AppBar>
  <Drawer anchor="left" open={open} onClose={handleClose}>
    <Box sx={{minWidth: "200px", display: "flex", flexDirection: "column", height: "100vh"}}>
      <Box sx={{padding: "12px", display: "flex"}}>
      <Avatar />
      <Box>
        <Tooltip title="sws@gmail.com">
         <Typography color="primary" noWrap sx={{maxWidth: "150px"}}>sws@gmail.com</Typography>
        </Tooltip>
      <Typography color="secondary">Admin</Typography>
      </Box>
      </Box>
      <List sx={{marginTop: "55px", flexGrow: 1}}>
        <Divider/>
        <ListItem button onClick={()=>drawerGotoPage("/dashboard")}
          selected={router.pathname.includes("dashboard")}>
        <ListItemIcon>
          <Image src="/assets/svg/dashboard.svg" alt="dashboard" width="20px" height={20}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard"/>
      </ListItem>
      <ListItem button onClick={()=>drawerGotoPage("/AnimalListing")}
        selected={router.pathname.includes("AnimalListing")}>
        <ListItemIcon>
          <Image src="/assets/svg/list.svg" alt="users" width="20px" height={20}/>
        </ListItemIcon>
        <ListItemText primary="Animal Listing"/>
      </ListItem>
      <ListItem button onClick={()=>drawerGotoPage("/Adoption")}
        selected={router.pathname.includes("Adoption")}>
        <ListItemIcon >
          <Image src="/assets/svg/adopt.svg" alt="AdoptionPage" width="20px" height={20}/>
        </ListItemIcon>
        <ListItemText primary="Adoption Page"/>
      </ListItem>
      <Divider/>
      <Divider/>

      </List>
      <List>
      <ListItem button onClick={()=>drawerGotoPage("/profile")}
        selected={router.pathname.includes("profile")}>
        <ListItemIcon>
          <Image src="/assets/svg/profile.svg" alt="settings" width="20px" height={20}/>
        </ListItemIcon>
        <ListItemText primary="Profile"/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Image src="/assets/svg/signout.svg" alt="signout" width="20px" height={20}/>
        </ListItemIcon>
        <ListItemText primary="Sign Out"/>
      </ListItem>
      </List>
    </Box>
  </Drawer>

  <Box sx={{marginTop: "120px"}}>{children}</Box>
</Box>
  )
}
