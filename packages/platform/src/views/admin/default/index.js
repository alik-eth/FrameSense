import React from 'react';
import { Box } from '@chakra-ui/react';
import { MainStatsWidget } from '../widgets/AdvertisingWidgets';

export default function Default() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <MainStatsWidget />
    </Box>
  );
} 