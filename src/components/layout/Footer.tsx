import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

const Footer = () => {
  return (
    <footer className='absolute bottom-2 w-full flex justify-center text-gray-700'>
      © {new Date().getFullYear()} By&nbsp;
      <UnderlineLink href='/contact'>innodigi.net</UnderlineLink>
    </footer>
  );
};

export default Footer;
