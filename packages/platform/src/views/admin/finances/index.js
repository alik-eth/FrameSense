import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { TransactionsWidget, FinancesWidget } from '../widgets/AdvertisingWidgets';

export default function Finances() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} px={0}>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={4}
        width="100%"
        mx="auto"
        maxW="100%"
      >
        <Box width="100%">
          <TransactionsWidget />
        </Box>
        <Box width="100%">
          <FinancesWidget />
        </Box>
      </Grid>
    </Box>
  );
} 