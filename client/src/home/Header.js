import { Button, Drawer, Grid, IconButton, List, ListItem, Paper, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
    top: '30px',
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '550px, contain',
      backgroundPosition: 'center'
    }
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    flexGrow: 1,
  },
  typography: {
    color: 'black',
    flexGrow: 1,
    padding: '0px',
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
  button: {
    flexGrow: 1,
  },
  link: {
    [theme.breakpoints.down('xs')]: {
      color: 'white',
      position: 'relative',
      top: '320px'
    }
  },
  buttonSize: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    }
  }

}));

function Header(props) {
  const classes = useStyles();
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
        <div className={classes.button}>
          <Button className={classes.buttonSize}>Home</Button>
          <Button className={classes.buttonSize} >Dashboard</Button>
          <Button className={classes.buttonSize}>Market</Button>
          <Button className={classes.buttonSize}>Subscription</Button>
        </div>

        <IconButton className={classes.iconButton} onClick={handleClick} >
          <MenuIcon align='right' className={classes.menuIcon} />
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
          <List className={classes.List} >
            <ListItem className={classes.ListItem}>
              <LinkedInIcon onClick={(e) => {
                e.preventDefault(e);
                window.open('https://www.linkedin.com/in/achour-benakli-280231100/', '_blank')
              }}></LinkedInIcon>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>


      <Paper className={classes.main} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/achour2.jpeg'})`
      }} >
        <div className={classes.title}>
          <Grid item md={6} container wrap="nowrap" >
            <Typography className={classes.typoTitle} component="h1" variant="h4" color="inherit" gutterBottom>
              Hi, I'm Achour and Welcome to my Universe
            </Typography>
          </Grid>

          <Button className={classes.link} align="center" onClick={(e) => {
            e.preventDefault(e);
            window.open('http://achour.tmmz3250.odns.fr/Contact', '_blank')
          }}>
            Send me a Message...</Button>
        </div>
      </Paper>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header


