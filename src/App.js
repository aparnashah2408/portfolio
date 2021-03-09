import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";

import RecommendationSection from "./components/RecommendationSection";
import SkillsSection from "./components/SkillSection";

function App() {
  return (
    <div>
      <Navbar />
      <Title name="Aparna Shah" leadText="I am a freelancer from India" />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
      <BlogSection />
      <Footer />
    </div>
  );
  
}

export default App;