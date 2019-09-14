import React from 'react';
import { Bought, Insured, Claims, TotalClaims } from "images/svgs";

const config = {
  user: 'Lois Durello',
  date: 'Monday, July 22, 2019.',
  navItems: [
    {
      name: 'Dashboard',
      link: '/'
    },
    {
      name: 'Buy insurance',
      link: '/buy-insurance'
    },
    {
      name: 'Account Settings',
      link: '/account-settings'
    }
  ],
  cards: [
    {
      icon: <Bought />,
      total: '06',
      description: 'Total Insurance Bought'
    },
    {
      icon: <Insured />,
      total: '₦21, 400, 000',
      description: 'Total Amount of Insurance',
    },
    {
      icon: <Claims />,
      total: '03',
      description: 'Total Insurance Claims'
    },
    {
      icon: <TotalClaims />,
      total: '₦1,400,000',
      description: 'Total Amount of Claims'
    }
  ],
}

export default config;