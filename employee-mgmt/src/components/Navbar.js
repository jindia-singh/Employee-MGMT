import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid, Container} from '@material-ui/core';
import Searchbar from './Searchbar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:"center"
  },
  container:{
      padding:"5px 10px"
  },
  addHolder:{
    marginTop:'auto',
    marginBottom:"auto"
  },
  btn:{
    float:"right"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Employee Management System
          </Typography>
          <Button color="inherit" variant="outlined">Logout</Button>
        </Toolbar>
      </AppBar>
      {/* <Container> */}
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Searchbar/>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.addHolder}>
                <Button color="primary" variant='contained' className={classes.btn}>Add User</Button>
            </Grid>
        </Grid>
      {/* </Container> */}
        
    </div>
  );
}
