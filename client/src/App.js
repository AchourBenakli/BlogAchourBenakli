import { Container, CssBaseline } from "@material-ui/core";
import React from 'react';
import Footer from "./Footer";
import Blog from './Home/Blog';
import Header from './Home/Header';
import Presentation from "./Home/Presentation";
import Skills from "./Home/Skills";


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


const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
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


// const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Router>
//           <Link path="/" component={Header} exact />
//           <Presentation />
//           {/* <Container justify="center" style={{ marginTop: '20px', marginBottom: '150px' }} /> 
//           </Container> */}
//           <Link path="/Blog" component={Blog} post={blogPosts} />
//           <Link path="/Skills" component={Skills} />
//         </Router>
//         <Footer />
//       </Container>
//     </>
//   )
// }
export default App;


