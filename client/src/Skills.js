import { Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Skills() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography component="h1" variant="h3" align="center" className={classes.color} gutterBottom>
          My Skills defger
        </Typography>
      </div>
      <Toolbar style={{ marginTop: '"0px' }} className={classes.toolbar} ></Toolbar>




    </>
  );
}