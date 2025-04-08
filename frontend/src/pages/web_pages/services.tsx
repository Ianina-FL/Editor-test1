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
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const features_points = [
    {
      name: 'Automated Document Management',
      description:
        'Simplify your document handling with automated workflows. Reduce manual tasks and ensure accuracy in all your legal documents.',
      icon: 'mdiFileDocument',
    },
    {
      name: 'Client Relationship Management',
      description:
        'Enhance client interactions with a comprehensive CRM. Track communications, manage appointments, and build stronger client relationships.',
      icon: 'mdiAccountHeart',
    },
    {
      name: 'Secure Data Storage',
      description:
        'Keep your data safe with our secure storage solutions. Protect sensitive information with advanced encryption and access controls.',
      icon: 'mdiLock',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has revolutionized our document management. The automation features have saved us countless hours.',
      company: 'Legal Pioneers',
      user_name: 'Anna Thompson, Senior Partner',
    },
    {
      text: 'The CRM capabilities of ${projectName} are unparalleled. Our client relationships have never been stronger.',
      company: 'Justice Advocates',
      user_name: 'Mark Stevens, Client Relations Manager',
    },
    {
      text: 'We trust ${projectName} for secure data storage. It gives us peace of mind knowing our information is protected.',
      company: 'Barrister Solutions',
      user_name: 'Linda Carter, IT Director',
    },
    {
      text: 'The user-friendly interface of ${projectName} makes it easy for our team to navigate and utilize its full potential.',
      company: 'Counsel Connect',
      user_name: 'James Wilson, Operations Lead',
    },
    {
      text: "Our firm has seen a significant increase in efficiency since implementing ${projectName}. It's a must-have tool for any legal practice.",
      company: 'Advocate Alliance',
      user_name: 'Rachel Green, Managing Director',
    },
    {
      text: 'The support team at ${projectName} is exceptional. They are always ready to assist and ensure we get the most out of the platform.',
      company: 'Law Innovators',
      user_name: 'Michael Brown, Support Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services | ${projectName} - Elevate Your Legal Practice`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by ${projectName} to enhance your legal operations. Discover how our CRM solutions can streamline your workflow and boost productivity.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Law firm team in discussion']}
          mainText={`Transform Your Practice with ${projectName}`}
          subTitle={`Discover the range of services offered by ${projectName} to streamline your legal operations. Our solutions are designed to enhance efficiency and drive success.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'Editor test'}
          image={['Features displayed on a tablet']}
          withBg={0}
          features={features_points}
          mainText={`Unleash the Power of ${projectName}`}
          subTitle={`Explore the robust features of ${projectName} designed to elevate your legal practice and streamline operations.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'Editor test'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
