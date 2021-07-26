import { Box, Container, LinearProgress, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

function LinearProgressWithLabel(props) {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography component='h6'>
        HTML/CSS
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
      setProgress((prevProgress) => (prevProgress >= 80 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [progress1, setProgress1] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress1((prevProgress) => (prevProgress >= 80 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const [progress2, setProgress2] = useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 80 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <>
      <div className={classes.root}>
        <Typography component="h1" variant="h3" align="center" className={classes.color} gutterBottom>
          My Skills
        </Typography>
      </div>
      <Toolbar style={{ marginTop: '"0px' }} className={classes.toolbar} ></Toolbar>

      <Container>
        <div className={classes.rootLinear}>
          <LinearProgressWithLabel value={progress} />
          <LinearProgressWithLabel value={progress1} />
          <LinearProgressWithLabel value={progress2} />
        </div>
      </Container>
    </>
  );
}