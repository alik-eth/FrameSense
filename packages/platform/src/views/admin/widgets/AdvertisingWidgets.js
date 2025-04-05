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
  Flex,
  Stack,
  Button,
  InputGroup,
  Input,
  InputRightAddon,
  Icon,
} from '@chakra-ui/react';
import { MdCampaign, MdPeople, MdAttachMoney, MdAccountBalance } from 'react-icons/md';
import { FaWallet, FaEthereum, FaPlus } from 'react-icons/fa';

// Main Dashboard Widgets
export const MainStatsWidget = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={4} width="100%">
      <Box
        bg={bgColor}
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <Stat>
          <StatLabel>Total Campaigns</StatLabel>
          <StatNumber>3</StatNumber>
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
          <StatLabel>Average clicks today</StatLabel>
          <StatNumber>54</StatNumber>
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
          <StatLabel>Total Balance</StatLabel>
          <StatNumber>12,345 USDC</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            8.2%
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
            <Th>Targeted Audience</Th>
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
            <Td>
              <Stack>
                <Badge colorScheme="purple">Speculator</Badge>
                <Badge colorScheme="purple">Pragmatist</Badge>
              </Stack>
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
            <Td>
              <Stack>
                <Badge colorScheme="purple">Pragmatist</Badge>
              </Stack>
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
            <Td>
              <Stack>
                <Badge colorScheme="purple">Builder</Badge>
                <Badge colorScheme="purple">Decentralist</Badge>
              </Stack>
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

// Renamed from AudienceWidget to TransactionsWidget for clarity
export const TransactionsWidget = () => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";

  return (
    <Box
      bg={bgColor}
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
    >
      {/* Balance Section */}
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Text fontSize="md" color={textColorSecondary}>Current Balance</Text>
          <Text fontSize="3xl" fontWeight="bold" color={textColorPrimary}>
            12,345 USDC
          </Text>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            leftIcon={<Icon as={FaWallet} />}
            colorScheme="purple"
            variant="solid"
            size="md"
          >
            Connect Farcaster Wallet
          </Button>
        </Stack>
      </Flex>

      {/* Top Up Section */}
      <Box mb={6} p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
        <Text fontSize="lg" fontWeight="semibold" mb={4}>
          Top Up Balance
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <InputGroup size="md">
            <Input
              type="number"
              placeholder="Enter amount"
              borderRadius="md"
            />
            <InputRightAddon children="USDC" />
          </InputGroup>
          <Button
            colorScheme="green"
            leftIcon={<Icon as={FaPlus} />}
          >
            Top Up
          </Button>
        </Stack>
      </Box>

      {/* Transactions Section */}
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4}>Recent Transactions</Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Campaign</Th>
              <Th>Amount</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Apr 5, 2024</Td>
              <Td>Casino frame</Td>
              <Td>-500 USDC</Td>
              <Td>
                <Badge colorScheme="red">Spend</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>Apr 4, 2024</Td>
              <Td>Top Up via Farcaster</Td>
              <Td>+1,000 USDC</Td>
              <Td>
                <Badge colorScheme="green">Top Up</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>Apr 3, 2024</Td>
              <Td>Dating frame</Td>
              <Td>-300 USDC</Td>
              <Td>
                <Badge colorScheme="red">Spend</Badge>
              </Td>
            </Tr>
            <Tr>
              <Td>Apr 2, 2024</Td>
              <Td>Education frame</Td>
              <Td>-200 USDC</Td>
              <Td>
                <Badge colorScheme="red">Spend</Badge>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
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
            <Th>Daily Budget</Th>
            <Th>Finish Date</Th>
            <Th>Status</Th>
            <Th>Progress</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Casino frame</Td>
            <Td>500 USDC</Td>
            <Td>Apr 30, 2024</Td>
            <Td><Badge colorScheme="green">Active</Badge></Td>
            <Td><Progress value={75} size="sm" colorScheme="green" /></Td>
          </Tr>
          <Tr>
            <Td>Dating frame</Td>
            <Td>350 USDC</Td>
            <Td>May 15, 2024</Td>
            <Td><Badge colorScheme="red">Waiting for approval</Badge></Td>
            <Td><Progress value={45} size="sm" colorScheme="red" /></Td>
          </Tr>
          <Tr>
            <Td>Education frame</Td>
            <Td>280 USDC</Td>
            <Td>Apr 20, 2024</Td>
            <Td><Badge colorScheme="green">Active</Badge></Td>
            <Td><Progress value={90} size="sm" colorScheme="green" /></Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}; 