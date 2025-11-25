import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutFitness from "./components/AboutFitness";
import ClassesCards from "./components/ClassesCards";
import SubPayment from "./components/SubPayment";
import ExpertTrainers from "./components/ExpertTrainers";
import WordPag from "./components/WordPag";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <HeroSection />
        <AboutFitness />
        <ClassesCards />
        <SubPayment />
        <ExpertTrainers />
        <WordPag />
        <ContactPage />
      </div>
    </>
  );
}

export default App;
