import React from 'react';

import { AboutContent } from '@/components/AboutContent';
import Seo from '@/components/Seo';

const About = () => {
  // const scrollToTop = () => {
  //   if (window) window.scrollTo({ top: 0, behavior: 'smooth' });
  //   return null;
  // };

  return (
    <>
      <Seo templateTitle='About us' />
      <AboutContent />
    </>
  );
};

export default About;
