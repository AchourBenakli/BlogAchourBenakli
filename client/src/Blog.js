import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';



const useStyles = makeStyles(theme => ({
  color: {
    color: 'black'
  },
  cardArea: {
    position: 'relative',
    top: '50px',
    paddingBottom: 0,
  },
  cardOpacity: {
    opacity: '0.8',
    '&:hover': {
      opacity: "1",
    },
  },
  gridContainer: {
    flexGrow: 1,
  },
  gridBlog: {
    position: 'relative',
    top: '30px'
  }
  // [theme.breakpoints.down("sm")]: {
  //   grid: {
  //     top: '20px'
  //   },
  //   cardArea: {
  //     width: '200px',
  //     height: '180px'
  //   }
  // },
}));
export default function Blog(props) {
  const classes = useStyles();
  const { post } = props;
  return (
    <>
      <div className={classes.container}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item sm={6} xs={12}  >
            <Card className={classes.cardArea} >
              <CardActionArea >
                <CardMedia className={classes.cardOpacity}
                  component="img"
                  alt="Portfolio"
                  height="150"
                  image="assets/Portfolio.png"
                  title="Portfolio"
                  onClick={() => { alert('Please click on Demo to check my work') }}
                />
                <CardContent style={{ padding: '10px' }}>
                  <Typography gutterBottom variant="h6" component="h2" className={classes.typoTitle}>{
                    [post[0]].map(title0 => <div key={title0.title}>{title0.title}</div>)
                  }
                  </Typography>
                  <Typography component="h1" variant="subtitle1" color="inherit" gutterBottom>
                    {
                      [post[0]].map(title0 => <div key={title0.description}>{title0.description}</div>)
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions >
                <Button size="small"
                  onClick={(e) => {
                    e.preventDefault(e);
                    window.open('http://achour.tmmz3250.odns.fr/', '_blank')
                  }}
                >
                  demo
                </Button>
                <Button
                  size="small"
                  onClick={(e) => {
                    e.preventDefault(e);
                    window.open('https://github.com/AchourBenakli/Portfolio', '_blank')
                  }}>
                  gitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12}  >
            <Card className={classes.cardArea}>
              <CardActionArea className={classes.cardMain}>
                <CardMedia className={classes.cardOpacity}
                  component="img"
                  alt="hotel"
                  height="150"
                  image="assets/hotel.PNG"
                  title="hotel"
                  onClick={() => { alert('Please click on Demo to check my work') }}
                />
                <CardContent style={{ padding: '10px' }}>
                  <Typography gutterBottom variant="h6" component="h2" className={classes.typoTitle}>
                    {
                      [post[1]].map(title1 => <div key={title1.title}>{title1.title}</div>)
                    }
                  </Typography>
                  <Typography component="h4" variant="subtitle1" color="inherit" gutterBottom>
                    {
                      [post[1]].map(title1 => <div key={title1.description}>{title1.description}</div>)
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small"
                  onClick={(e) => {
                    e.preventDefault(e);
                    window.open('https://hotelwebsitebyachour.herokuapp.com/', '_blank')
                  }}
                >
                  demo
                </Button>
                <Button
                  size="small"
                  onClick={(e) => {
                    e.preventDefault(e);
                    window.open('https://github.com/AchourBenakli/HotelWebsite', '_blank')
                  }}>
                  gitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* <Grid item sm={12} className={classes.gridBlog}>
            <Card className={classes.cardArea}>
              <CardActionArea className={classes.cardMain}>
                <CardMedia className={classes.cardOpacity}
                  component="img"
                  alt="Blog"
                  height="150"
                  image="assets/blog.PNG"
                  title="Blog"
                />
                <CardContent style={{ padding: '10px' }}>
                  <Typography gutterBottom variant="h6" component="h2" className={classes.typoTitle}>
                    {
                      [post[2]].map(title2 => <div key={title2.title}>{title2.title}</div>)
                    }
                  </Typography>
                  <Typography component="h1" variant="subtitle1" color="inherit" gutterBottom>
                    {
                      [post[2]].map(title2 => <div key={title2.description}>{title2.description}</div>)
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ padding: '0px' }}>
                <Button
                  size="small"
                  onClick={(e) => {
                    e.preventDefault(e);
                    window.open('https://github.com/AchourBenakli/BlogAchourBenakli', '_blank')
                  }}>
                  gitHub
                </Button>
              </CardActions>
            </Card>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
}

Blog.propTypes = {
  blogPost: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
};



