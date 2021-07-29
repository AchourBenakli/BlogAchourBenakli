import { Toolbar, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';




const useStyles = makeStyles((theme) => ({
  description: {
    position: 'relative',
    top: '80px',
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));
const Presentation = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.description}>
        <Typography component="h1" variant="h3" align="center" className={classes.color} gutterBottom>
          My Projects
        </Typography>
        <Typography variant="h6" align="center" className={classes.color} paragraph>
          Please have a look at all my projects. They are all GitHub free with a demo you can use.
        </Typography>
      </div>
      <Toolbar style={{ marginTop: '100px' }} className={classes.toolbar} ></Toolbar>
    </>

  );
}

export default Presentation;