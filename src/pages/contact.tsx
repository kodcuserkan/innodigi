import React, { useEffect, useState } from 'react';

import { ContactForm } from '@/components/ContactForm';
import Seo from '@/components/Seo';
const CLEAR_TIMEOUT = 5000;

const Contact = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setSubmitted(false);
    }, CLEAR_TIMEOUT);
  }, [submitted]);

  return (
    <div className='layout tems-center dropped-height flex min-h-screen flex-col justify-center pr-1 pl-1'>
      <div className='tems-center mx-auto flex max-w-md flex-col justify-center overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl'>
        <Seo templateTitle='Contact us' />

        {submitted ? (
          <>
            <div className='text-2xl'>Thank you!</div>
            <div className='text-md'>We&apos;ll be in touch to you soon.</div>
          </>
        ) : (
          <>
            <div className='mb-3 pt-0'>
              <h3 className='text-s text-center text-gray-400'>Contact Us</h3>
            </div>
            <ContactForm setSubmitted={setSubmitted} />
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
