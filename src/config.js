import React from 'react';
import { Bought, Insured, Claims, TotalClaims } from "images/svgs";

const config = {
  baseURL: 'http://test.natterbase.com:5050',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg',
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
  cards: {
    totalInsurancesBought: {
      icon: <Bought />,
      total: '06',
      description: 'Total Insurance Bought'
    },
    totalInsuranceAmount: {
      icon: <Insured />,
      total: '₦21, 400, 000',
      description: 'Total Amount of Insurance',
    },
    totalInsuranceClaims: {
      icon: <Claims />,
      total: '03',
      description: 'Total Insurance Claims'
    },
    totalClaimsAmount: {
      icon: <TotalClaims />,
      total: '₦1,400,000',
      description: 'Total Amount of Claims'
    }
  },
  applications: {
    title: 'Insurance Applications',
    header: [
      'S.N',
      'Insurance',
      'Amount',
      'Date',
      'Status',
      'Action',
      '',
    ],
    content: [
      {
        id: 1,
        type: 'Travel insurance',
        amount: '₦21,400,000',
        date: '14 0ct 2019',
        status: 'Completed',
      },
      {
        id: 2,
        type: 'Life Insurance',
        amount: '₦21,400,000',
        date: '14 0ct 2019',
        status: 'Completed',
      },
      {
        id: 3,
        type: 'Health Insurance',
        amount: '₦21,400,000',
        date: '14 0ct 2019',
        status: 'Incomplete',
      },
      {
        id: 4,
        type: 'Motor Insurance',
        amount: '₦21,400,000',
        date: '14 0ct 2019',
        status: 'Incomplete',
      },
      {
        id: 5,
        type: 'Third Party Motor Insurance',
        amount: '₦21,400,000',
        date: '14 0ct 2019',
        status: 'Completed',
      },
    ]
  },
  account: {
    title: 'Account Settings',
    options: [
      'Make a claim',
      'View Policy'
    ]
  }
}

export default config;