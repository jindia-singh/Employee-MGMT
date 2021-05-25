import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Employee Management System
          </Typography>
          <AccountCircleIcon fontSize="large"/>
          {/* <Button color="inherit" variant="outlined">Logout</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
