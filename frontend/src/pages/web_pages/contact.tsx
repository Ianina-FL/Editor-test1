import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Editor test';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us | ${projectName} - Get in Touch`}</title>
        <meta
          name='description'
          content={`Reach out to ${projectName} for any inquiries or support. Our team is here to assist you with all your legal CRM needs.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Customer support team assisting clients']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`Have questions or need assistance? Our team at ${projectName} is here to help. Reach out to us for any inquiries or support.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Contact Us Now`}
        />

        <ContactFormSection
          projectName={'Editor test'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`We're here to assist you. Contact us anytime, and our team will respond promptly to your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
