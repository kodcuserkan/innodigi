import React from 'react';

import { AboutContent } from '@/components/AboutContent';
import Seo from '@/components/Seo';

const About = () => {
  return (
    <>
      <Seo templateTitle='About us' />
      <AboutContent />
    </>
  );
};

export default About;
