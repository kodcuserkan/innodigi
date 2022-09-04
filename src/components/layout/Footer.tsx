import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 flex w-full justify-center bg-white  py-2 text-gray-700 shadow-sm shadow-slate-900 '>
      © {new Date().getFullYear()} By&nbsp;
      <UnderlineLink href='/contact'>innodigi.net</UnderlineLink>
    </footer>
  );
};

export default Footer;
