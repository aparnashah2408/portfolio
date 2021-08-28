import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import BlogPage from "./components/BlogPage";
import AddProject from "./components/AddProject";
import AddBlog from "./components/AddBlog";
import {Provider} from "./components/Context";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Provider>
          <BrowserRouter>
          <ScrollToTop />
      <Navbar />
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/write-a-recommendation" component={WriteRecommendation} />
        <Route path="/AllProjects" component={AllProjects} />
        <Route path="/AllBlogs" component={AllBlogs} />
        <Route path="/addproject" component={AddProject} />
        <Route path="/addblog" component={AddBlog} />
        <Route path="/project/:id" component={ProjectPage} />
        <Route path="/blog/:id" component={BlogPage} />
        {/* <Route component={NotFound} /> */}
      </switch>
    <Footer />
    </BrowserRouter>
    </Provider>
  );
  
}

export default App;