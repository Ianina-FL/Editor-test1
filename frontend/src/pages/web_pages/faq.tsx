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
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} offers a range of features including automated document management, client relationship management, and secure data storage. These features are designed to streamline your legal operations and enhance productivity.',
    },
    {
      question: 'How does ${projectName} ensure data security?',
      answer:
        '${projectName} employs advanced encryption and access controls to protect your data. We prioritize security to ensure that your sensitive information remains confidential and secure.',
    },
    {
      question: 'Can ${projectName} integrate with existing systems?',
      answer:
        'Yes, ${projectName} is designed to seamlessly integrate with your existing systems. This ensures a smooth transition and enhanced functionality without disrupting your current operations.',
    },
    {
      question: 'Is there a trial period available for ${projectName}?',
      answer:
        'Yes, we offer a trial period for new users to explore the features and benefits of ${projectName}. This allows you to experience the value it brings to your legal practice before committing.',
    },
    {
      question: 'How can I get support if I encounter issues?',
      answer:
        'Our support team is available to assist you with any issues you may encounter. You can reach out to us via email or phone, and we will respond promptly to ensure your concerns are addressed.',
    },
    {
      question: 'What pricing plans are available for ${projectName}?',
      answer:
        '${projectName} offers flexible pricing plans to suit different needs and budgets. Contact our sales team for detailed information on the plans and to find the best fit for your practice.',
    },
    {
      question: 'How does ${projectName} improve client relationships?',
      answer:
        '${projectName} enhances client relationships by providing a comprehensive CRM that tracks communications, manages appointments, and helps build stronger connections with your clients.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions | ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, services, and how we can assist your legal practice.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Person reading FAQ on tablet']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. We're here to help you understand our services better.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'Editor test'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
