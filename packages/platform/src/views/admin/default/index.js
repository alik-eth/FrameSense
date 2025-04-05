import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { MainStatsWidget } from '../widgets/AdvertisingWidgets';
import { CampaignCharts } from '../widgets/ChartWidgets';

export default function MainDashboard() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} px={0}>
      <VStack spacing={8} width="100%">
        <MainStatsWidget />
        <CampaignCharts />
      </VStack>
    </Box>
  );
} 