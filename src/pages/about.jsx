import React from "react";
import { AnimatePresence } from 'framer-motion';
import Layout from "../layouts/Layout";
import GreetingSection from "../components/About/GreetingSection/GreetingSection";
import AboutSection from "../components/About/AboutSection/AboutSection";


const AboutPage = ({ location }) => {

  console.log('Inside AboutPage, location is: ', location);
  //MOZE DA GO ISKORISTAM KOGA KJE PRAVAM REFACTOR ZA 1 PAGE
  let noSlashes = location.pathname.replace(/\//g,'');
  console.log('Inside AboutPage, noSlashes is: ', noSlashes);

  return (
    <AnimatePresence>
      <Layout>
        {/* <GreetingSection /> */}
        <AboutSection />
      </Layout>
    </AnimatePresence>
  )
}

export default AboutPage;