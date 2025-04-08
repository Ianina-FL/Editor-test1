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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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
      name: 'Seamless Integration',
      description:
        'Easily integrate ${projectName} with your existing systems. Enjoy a smooth transition and enhanced functionality without disruption.',
      icon: 'mdiLinkVariant',
    },
    {
      name: 'Advanced Analytics',
      description:
        'Gain insights with our advanced analytics tools. Track performance, identify trends, and make data-driven decisions effortlessly.',
      icon: 'mdiChartLine',
    },
    {
      name: 'Customizable Workflows',
      description:
        'Tailor ${projectName} to fit your unique needs. Customize workflows to align with your processes and improve efficiency.',
      icon: 'mdiTune',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our firm. The integration was seamless, and the support team is fantastic!',
      company: 'Legal Innovators LLC',
      user_name: 'Alice Johnson, IT Manager',
    },
    {
      text: 'Our productivity has soared since adopting ${projectName}. The customizable workflows fit our needs perfectly.',
      company: 'Justice Partners',
      user_name: 'Robert Smith, Operations Director',
    },
    {
      text: 'The analytics feature in ${projectName} provides invaluable insights. We can now make informed decisions with confidence.',
      company: 'Advocate Solutions',
      user_name: 'Emily Davis, Data Analyst',
    },
    {
      text: 'I appreciate how user-friendly ${projectName} is. It has simplified our processes and improved team collaboration.',
      company: 'Law Connect',
      user_name: 'Michael Brown, Team Lead',
    },
    {
      text: 'The customer service is top-notch. ${projectName} has exceeded our expectations in every way.',
      company: 'Barrister Group',
      user_name: 'Sarah Wilson, Customer Service Manager',
    },
    {
      text: "${projectName} has transformed our approach to client management. It's reliable, efficient, and easy to use.",
      company: 'Counsel Alliance',
      user_name: 'David Green, CEO',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us | ${projectName} - Innovating Legal CRM`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, and how we are transforming the legal industry with our cutting-edge CRM solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Team brainstorming in modern office']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`At ${projectName}, we are committed to transforming the legal industry with our innovative CRM solutions. Learn about our journey, values, and the team driving change.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Meet Our Team`}
        />

        <AboutUsSection
          projectName={'Editor test'}
          image={['Team celebrating a milestone']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`${projectName} is more than just a CRM; it's a revolution in legal operations. Discover our mission, values, and the passionate team behind our success.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'Editor test'}
          image={['Features displayed on a screen']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover the powerful features of ${projectName} that streamline legal operations and enhance productivity.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'Editor test'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied ${projectName} Users `}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
