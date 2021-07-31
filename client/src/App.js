import { Container, CssBaseline } from "@material-ui/core";
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Blog from './Blog';
import Footer from "./Footer";
import Header from './Header';
import Presentation from "./Presentation";
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
      'Hotel Website designed in a Full Html/Css. The very first project i did',
  },
];


// const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Header />
//         <Presentation />
//         <Container justify="center" style={{ marginTop: '20px', marginBottom: '150px' }} >
//           <Blog post={blogPosts} />
//         </Container>
//         <Skills />
//       </Container>
//       <Footer />
//     </>
//   );
// }


const App = () => {
  return (
    <>
      <Router>

        <CssBaseline />
        <Container maxWidth="lg">
          <Route path="/" component={Header} exact />
          <Container justify="center" style={{ marginTop: '20px', marginBottom: '150px' }} >
            <Presentation />
            <Route path="/Blog" component={Blog} post={blogPosts} />
          </Container>
          <Route path="/Skills" component={Skills} />
        </Container>
        <Footer />

      </Router>
    </>
  )
}
export default App;


