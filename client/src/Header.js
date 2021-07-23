import { Button, Drawer, Grid, IconButton, Link, List, ListItem, Paper, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';


//Styling classes


const useStyles = makeStyles((theme) => ({
  main: {
    height: '400px',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '500px,cover',
    backgroundPosition: 'right ',
    backgroundAttachment: 'local',
    top: '40px',
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '550px, contain',
      backgroundPosition: 'center '
    }
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  typography: {
    color: 'black',
    flexGrow: 1,
    padding: '0px',
    margin: '0px 15px 0px 70px',
    fontSize: '40px'
  },
  title: {
    position: 'relative',
    color: theme.palette.common.black,
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    },
  },
  typoTitle: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  menuIcon: {
    color: 'black',
  },
  arrowIcon: {
    color: '#2E4053',
    margin: '0 200px'
  },
  drawer: {
    width: '20%',
    margin: '0px 70rem',
    color: 'black',
    transitionDelay: '1s'

  },
  close: {
    cursor: 'pointer',
    margin: '20px 20px',
    color: 'black'
  },
  List: {
    background: 'white'
  },
  ListItem: {
    color: 'black',
    cursor: 'pointer'
  },
  link: {
    display: 'none'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleClick = () => {
    setOpenDrawer(true);
  };

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button >Home</Button>
        <Button >Projects</Button>
        <Button >Skills</Button>
        <Button>Contact</Button>
        <Typography variant='h3' align="center" className={classes.typography} >
          {title}
        </Typography >
        <IconButton className={classes.iconButton} onClick={handleClick}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Drawer anchor='right' open={openDrawer} transitionDuration={0} className={classes.drawer}>
          <ChevronRightIcon anchor='right' open={openDrawer} onClick={handleClose} className={classes.close}></ChevronRightIcon>
          <List className={classes.List} >
            <ListItem className={classes.ListItem}>
              <GitHubIcon onClick={(e) => {
                e.preventDefault(e);
                window.open('https://github.com/AchourBenakli', '_blank')
              }}></GitHubIcon>
            </ListItem>
          </List>
          <List className={classes.List} >
            <ListItem className={classes.ListItem}>
              <FacebookIcon onClick={(e) => {
                e.preventDefault(e);
                window.open('https://www.facebook.com/achour.b', '_blank')
              }}></FacebookIcon>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>



      <Paper className={classes.main} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Achour.jpg'})`
      }} >
        <div className={classes.title}>
          <Grid item md={6} container wrap="nowrap" >
            <Typography className={classes.typoTitle} component="h1" variant="h4" color="inherit" gutterBottom>
              Hi, I'm Achour and Welcome to my Universe
            </Typography>

          </Grid>
          <Link className={classes.link} variant="subtitle2" color="inherit" href="#" onClick={() => {
            alert('Hello World')
          }}>
            Send me a Message...</Link>
        </div>
      </Paper>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
};



