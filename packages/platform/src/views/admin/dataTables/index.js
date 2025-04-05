import React from 'react';
import { Box, VStack, Spacer } from '@chakra-ui/react';
import { AudienceWidget, FinancesWidget } from '../widgets/AdvertisingWidgets';

export default function DataTables() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <VStack spacing={8}>
        <AudienceWidget />
        <FinancesWidget />
      </VStack>
    </Box>
  );
} 