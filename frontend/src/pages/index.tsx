import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  AboutUsDesigns,
  ContactFormDesigns,
} from '../components/WebPageComponents/designs';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../components/WebPageComponents/TestimonialsComponent';

import AboutUsSection from '../components/WebPageComponents/AboutUsComponent';

import ContactFormSection from '../components/WebPageComponents/ContactFormComponent';

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
      name: 'Unified Dashboard',
      description:
        'Access all your departmental data in one place. Streamline operations and improve decision-making with a comprehensive view.',
      icon: 'mdiViewDashboard',
    },
    {
      name: 'Lead Tracking',
      description:
        'Efficiently track and manage leads from initial contact to conversion. Stay informed with real-time updates and status changes.',
      icon: 'mdiAccountMultiple',
    },
    {
      name: 'Collaborative Tools',
      description:
        'Enhance team collaboration with integrated tools. Share notes, assign tasks, and communicate effectively across departments.',
      icon: 'mdiAccountGroup',
    },
  ];

  const testimonials = [
    {
      text: "${projectName} has transformed our workflow. It's intuitive and has significantly improved our team's efficiency.",
      company: 'Legal Solutions Inc.',
      user_name: 'John Doe, Operations Manager',
    },
    {
      text: "The lead tracking feature is a game-changer. We've seen a 30% increase in conversions since using ${projectName}.",
      company: 'Advocate Partners',
      user_name: 'Jane Smith, Sales Director',
    },
    {
      text: 'Our departments are more connected than ever. ${projectName} has made communication seamless and effective.',
      company: 'Justice League LLP',
      user_name: 'Michael Brown, Department Head',
    },
    {
      text: 'I love how user-friendly ${projectName} is. It has simplified our processes and saved us countless hours.',
      company: 'Law \u0026 Order Co.',
      user_name: 'Emily White, Customer Service Lead',
    },
    {
      text: 'The integration capabilities of ${projectName} are outstanding. It fits perfectly with our existing systems.',
      company: 'Barrister Associates',
      user_name: 'David Green, IT Specialist',
    },
    {
      text: "${projectName} has been a vital tool in our growth strategy. It's reliable, efficient, and easy to use.",
      company: 'Counsel Connect',
      user_name: 'Sarah Johnson, CEO',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM Solution for the Legal Industry | Connect & Organize`}</title>
        <meta
          name='description'
          content={`Discover our CRM app designed for the law industry, connecting sales, customer service, and marketing departments. Streamline your operations and track leads efficiently.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Law professionals collaborating efficiently']}
          mainText={`Revolutionize Your Legal Operations Today`}
          subTitle={`Introducing ${projectName}, the CRM solution tailored for the legal industry. Seamlessly connect departments, track leads, and enhance productivity.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'Editor test'}
          image={['Dashboard showcasing CRM features']}
          withBg={0}
          features={features_points}
          mainText={`Discover ${projectName} Features`}
          subTitle={`Explore how ${projectName} enhances your legal operations with seamless integration and efficient management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'Editor test'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <AboutUsSection
          projectName={'Editor test'}
          image={['Team collaborating in modern office']}
          mainText={`Empowering Legal Teams with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to revolutionizing the legal industry with our innovative CRM solution. Our mission is to connect departments, streamline operations, and enhance productivity for law firms worldwide.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <ContactFormSection
          projectName={'Editor test'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime. Our team is ready to assist you with any inquiries or support you need. Expect a prompt response from ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
