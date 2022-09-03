import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';
const CLEAR_TIMEOUT = 5000;

const Contact = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setSubmitted(false);
    }, CLEAR_TIMEOUT);
  }, [submitted]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clientId = process?.env?.NEXT_PUBLIC_EMAILJS_PUBLIC_ID;
    const serviceId = process?.env?.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process?.env?.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!(form.current && clientId && serviceId && templateId))
      throw new Error('There is an error with the form');

    emailjs.sendForm(serviceId, templateId, form.current, clientId).then(
      () => {
        setSubmitted(true);
      },
      (error) => {
        setSubmitted(false);
        throw new Error(error.text);
      }
    );
  };

  return (
    <div className='layout min-h-screen flex flex-col tems-center justify-center dropped-height pr-1 pl-1'>
      <Seo templateTitle='Contact us' />

      {submitted ? (
        <>
          <div className='text-2xl'>Thank you!</div>
          <div className='text-md'>We&apos;ll be in touch to you soon.</div>
        </>
      ) : (
        <>
          <div className='mb-3 pt-0'>
            <h3 className='text-center text-gray-400 text-s'>Contact Us</h3>
          </div>
          <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='mb-3 pt-0'>
              <input
                type='text'
                placeholder='Your name'
                name='name'
                className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
                required
              />
            </div>
            <div className='mb-3 pt-0'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
                required
              />
            </div>
            <div className='mb-3 pt-0'>
              <textarea
                placeholder='Your message'
                name='message'
                className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
                required
              />
            </div>
            <div className='mb-3 pt-0'>
              <Button type='submit'>Send a Message</Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
