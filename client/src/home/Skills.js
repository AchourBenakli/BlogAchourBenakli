import { Box, Container, LinearProgress, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

function LinearProgressWithLabel(props) {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography component='h6'>
        {props.languages}
      </Typography>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </Container>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  rootLinear: {
    width: '100£%'
  }
}));

export default function Skills() {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 60 ? 0 : prevProgress + 60));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);


  const [progress1, setProgress1] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress1((prevProgress) => (prevProgress >= 40 ? 0 : prevProgress + 40));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [progress2, setProgress2] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 50 ? 0 : prevProgress + 50));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [progress3, setProgress3] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress3((prevProgress) => (prevProgress >= 50 ? 0 : prevProgress + 50));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <>
      <div className={classes.root}  >
        <Typography component="h1" variant="h3" align="center" className={classes.color} gutterBottom>
          My Skills
        </Typography>
      </div>
      <Toolbar style={{ marginTop: '"0px' }} className={classes.toolbar} ></Toolbar>

      <Container style={{ marginBottom: '100px', marginTop: '80px' }} >
        <div className={classes.rootLinear}>
          <LinearProgressWithLabel value={progress} languages='HTML/CSS' />
          <LinearProgressWithLabel value={progress1} languages='JAVASCRIPT' />
          <LinearProgressWithLabel value={progress2} languages='REACT' />
          <LinearProgressWithLabel value={progress3} languages='MATERIAL-UI' />
        </div>
      </Container>
    </>
  );
}