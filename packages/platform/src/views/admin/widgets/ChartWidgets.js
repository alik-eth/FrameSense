import React from 'react';
import { Box, Text, useColorModeValue, SimpleGrid, Grid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

export const CampaignCharts = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Campaign Balance Chart
  const campaignBalanceOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Casino', 'Dating', 'Education'],
    },
    yaxis: {
      title: {
        text: 'USDC',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' USDC';
        },
      },
    },
    colors: ['#422AFB', '#1B2559', '#7551FF'],
  };

  const campaignBalanceSeries = [
    {
      name: 'Balance',
      data: [5000, 3500, 2800],
    },
  ];

  // Campaign Progress Charts
  const campaignProgressData = [
    {
      name: 'Casino frame',
      progress: 75,
      color: '#00E396'
    },
    {
      name: 'Dating frame',
      progress: 45,
      color: '#FF4560'
    },
    {
      name: 'Education frame',
      progress: 90,
      color: '#008FFB'
    }
  ];

  const getProgressOptions = (campaign) => ({
    chart: {
      type: 'radialBar',
      height: 400,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '70%',
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: textColor,
            fontSize: '13px',
          },
          value: {
            color: textColor,
            fontSize: '30px',
            show: true,
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10
      }
    },
    colors: [campaign.color],
    labels: [campaign.name],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
  });

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="100%">
      <Box
        bg={bgColor}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
        width="100%"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4} color={textColor}>
          Campaign Balances
        </Text>
        <Chart
          options={campaignBalanceOptions}
          series={campaignBalanceSeries}
          type="bar"
          height={400}
          width="100%"
        />
      </Box>

      <Box
        bg={bgColor}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
        width="100%"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4} color={textColor}>
          Overall Campaign Progress
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {campaignProgressData.map((campaign) => (
            <Box key={campaign.name}>
              <Chart
                options={getProgressOptions(campaign)}
                series={[campaign.progress]}
                type="radialBar"
                height={400}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </SimpleGrid>
  );
};

export const CampaignStats = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing="20px" width="100%">
      <Box
        bg={bgColor}
        p={6}
        borderRadius="lg"
        border="1px solid"
        borderColor={borderColor}
      >
        <Stat>
          <StatLabel fontSize="md" color={textColor}>Casino Frame</StatLabel>
          <StatNumber fontSize="3xl" color={textColor}>412</StatNumber>
          <StatHelpText>Avg. clicks/day</StatHelpText>
        </Stat>
      </Box>

      <Box
        bg={bgColor}
        p={6}
        borderRadius="lg"
        border="1px solid"
        borderColor={borderColor}
      >
        <Stat>
          <StatLabel fontSize="md" color={textColor}>Dating Frame</StatLabel>
          <StatNumber fontSize="3xl" color={textColor}>285</StatNumber>
          <StatHelpText>Avg. clicks/day</StatHelpText>
        </Stat>
      </Box>

      <Box
        bg={bgColor}
        p={6}
        borderRadius="lg"
        border="1px solid"
        borderColor={borderColor}
      >
        <Stat>
          <StatLabel fontSize="md" color={textColor}>Education Frame</StatLabel>
          <StatNumber fontSize="3xl" color={textColor}>536</StatNumber>
          <StatHelpText>Avg. clicks/day</StatHelpText>
        </Stat>
      </Box>
    </SimpleGrid>
  );
};

export const DashboardCampaignSection = () => {
  return (
    <Box width="100%">
      <Text fontSize="xl" fontWeight="bold" mb={4}>Campaign Performance</Text>
      <CampaignStats />
    </Box>
  );
};