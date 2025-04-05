import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdPerson,
  MdHome,
  MdOutlinePeople,
  MdCampaign,
  MdAttachMoney
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default/index';
import Campaigns from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import Audience from 'views/admin/audience';

// Auth Imports
import Finances from 'views/admin/finances';

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
    component: <Campaigns />,
    secondary: true,
  },
  {
    name: 'Finances',
    layout: '/admin',
    icon: <Icon as={MdAttachMoney} width="20px" height="20px" color="inherit" />,
    path: '/finances',
    component: <Finances />,
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
