import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>
        About{' '}
        <Link href="/">
          <a>innodigi.net</a>
        </Link>
        <p>We specialize in custom-tailored software solutions</p>
      </h1>
    </div>
  );
};

export default About;
