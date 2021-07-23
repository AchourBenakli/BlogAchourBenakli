import { Container, CssBaseline } from "@material-ui/core";
import React from 'react';
import Blog from './Blog';
import Footer from "./Footer";
import Header from './Header';
import Presentation from './Presentation';
import Skills from "./Skills";


const blogPosts = [
  {
    title: 'Portfolio React',
    description:
      'Pro Portfolio you can book me through a Planning and a Contact me.',
  },
  {
    title: 'Hotel Website',
    description:
      'Hotel Website designed in a Full Html/Css. The very first project i start.',
  },
  // {
  //   title: 'Blog (React and Material UI)',
  //   description:
  //     'Current Project. Using Material UI and React, Im still developping new features.',
  // },
];


const App = () => {
  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" />
        <Presentation />
        <Container justify="center" style={{ marginTop: '20px', marginBottom: '150px' }} >
          <Blog post={blogPosts} />
        </Container>
        <Skills />
      </Container>
      <Footer />
    </>
  );
}

export default App;


