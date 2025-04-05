import React from 'react';
import { Box } from '@chakra-ui/react';
import { CampaignsWidget } from '../widgets/AdvertisingWidgets';

export default function NFTMarketplace() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <CampaignsWidget />
    </Box>
  );
} 