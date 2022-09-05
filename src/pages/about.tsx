import React from 'react';

import { AboutContent } from '@/components/AboutContent';
import Seo from '@/components/Seo';

const About = () => {
  return (
    <>
      <Seo templateTitle='About Us' />
      <AboutContent />
    </>
  );
};

export default About;
