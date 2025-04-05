import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Progress,
  Badge,
} from '@chakra-ui/react';
import { MdCampaign, MdPeople, MdAttachMoney, MdAccountBalance } from 'react-icons/md';

// Main Dashboard Widgets
export const MainStatsWidget = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={4}>
      <Box
        bg={bgColor}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Stat>
          <StatLabel>Total Campaigns</StatLabel>
          <StatNumber>24</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </Box>
      <Box
        bg={bgColor}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Stat>
          <StatLabel>Active Users</StatLabel>
          <StatNumber>1,234</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            12.5%
          </StatHelpText>
        </Stat>
      </Box>
      <Box
        bg={bgColor}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Stat>
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>12,345 USDC</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            8.2%
          </StatHelpText>
        </Stat>
      </Box>
      <Box
        bg={bgColor}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Stat>
          <StatLabel>Average Balance</StatLabel>
          <StatNumber>1,234 USDC</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5.1%
          </StatHelpText>
        </Stat>
      </Box>
    </SimpleGrid>
  );
};

// Campaigns Widget
export const CampaignsWidget = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bgColor}
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>Campaigns Overview</Text>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Campaign</Th>
            <Th>AD Creative Image</Th>
            <Th>Balance</Th>
            <Th>Status</Th>
            <Th>Progress</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Casino frame</Td>
            <Td>
              <Box 
                w="200px" 
                h="120px" 
                bg="white" 
                border="1px solid" 
                borderColor="gray.200" 
                borderRadius="md"
                overflow="hidden"
                position="relative"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.50"
                >
                  <Text 
                    fontSize="xs" 
                    textAlign="center" 
                    color="gray.500"
                    p={2}
                  >
                    Spin & Win! Get 10 USDC for joining our casino frame. Your luck starts here!
                  </Text>
                </Box>
              </Box>
            </Td>
            <Td>5,000 USDC</Td>
            <Td><Badge colorScheme="green">Active</Badge></Td>
            <Td><Progress value={75} size="sm" colorScheme="green" /></Td>
          </Tr>
          <Tr>
            <Td>Dating frame</Td>
            <Td>
              <Box 
                w="200px" 
                h="120px" 
                bg="white" 
                border="1px dashed" 
                borderColor="gray.300" 
                borderRadius="md"
                overflow="hidden"
                position="relative"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.50"
                >
                  <Text 
                    fontSize="xs" 
                    textAlign="center" 
                    color="gray.500"
                    p={2}
                  >
                    Find your match! Join our dating frame and get 10 USDC to start your journey
                  </Text>
                </Box>
              </Box>
            </Td>
            <Td>3,500 USDC</Td>
            <Td><Badge colorScheme="red">Waiting for approval</Badge></Td>
            <Td><Progress value={45} size="sm" colorScheme="red" /></Td>
          </Tr>
          <Tr>
            <Td>Education frame</Td>
            <Td>
              <Box 
                w="200px" 
                h="120px" 
                bg="white" 
                border="1px solid" 
                borderColor="gray.200" 
                borderRadius="md"
                overflow="hidden"
                position="relative"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.50"
                >
                  <Text 
                    fontSize="xs" 
                    textAlign="center" 
                    color="gray.500"
                    p={2}
                  >
                    Learn & Earn! Get 10 USDC for joining our educational frame. Knowledge pays!
                  </Text>
                </Box>
              </Box>
            </Td>
            <Td>2,800 USDC</Td>
            <Td><Badge colorScheme="green">Active</Badge></Td>
            <Td><Progress value={90} size="sm" colorScheme="green" /></Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

// Audience Widget
export const AudienceWidget = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bgColor}
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>Top Users by Balance</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Balance</Th>
            <Th>Campaigns</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>John Doe</Td>
            <Td>12,345 USDC</Td>
            <Td>5</Td>
            <Td><Badge colorScheme="green">Active</Badge></Td>
          </Tr>
          <Tr>
            <Td>Jane Smith</Td>
            <Td>8,765 USDC</Td>
            <Td>3</Td>
            <Td><Badge colorScheme="green">Active</Badge></Td>
          </Tr>
          <Tr>
            <Td>Mike Johnson</Td>
            <Td>6,543 USDC</Td>
            <Td>4</Td>
            <Td><Badge colorScheme="yellow">Pending</Badge></Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

// Finances Widget
export const FinancesWidget = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bgColor}
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>Campaign Finances</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Campaign</Th>
            <Th>Budget</Th>
            <Th>Spent</Th>
            <Th>Remaining</Th>
            <Th>ROI</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Summer Sale 2024</Td>
            <Td>10,000 USDC</Td>
            <Td>7,500 USDC</Td>
            <Td>2,500 USDC</Td>
            <Td>+25%</Td>
          </Tr>
          <Tr>
            <Td>New Product Launch</Td>
            <Td>5,000 USDC</Td>
            <Td>2,250 USDC</Td>
            <Td>2,750 USDC</Td>
            <Td>+15%</Td>
          </Tr>
          <Tr>
            <Td>Holiday Special</Td>
            <Td>8,000 USDC</Td>
            <Td>7,200 USDC</Td>
            <Td>800 USDC</Td>
            <Td>+18%</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}; 