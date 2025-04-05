import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlinePeople,
  MdCampaign,
  MdAttachMoney
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Campaigns',
    layout: '/admin',
    path: '/campaigns',
    icon: (
      <Icon
        as={MdCampaign}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Audience',
    layout: '/admin',
    icon: <Icon as={MdOutlinePeople} width="20px" height="20px" color="inherit" />,
    path: '/audience',
    component: <DataTables />,
  },
  {
    name: 'Finances',
    layout: '/admin',
    icon: <Icon as={MdAttachMoney} width="20px" height="20px" color="inherit" />,
    path: '/finances',
    component: <DataTables />,
  },
  {
    name: 'Account Settings',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  }
];

export default routes;
