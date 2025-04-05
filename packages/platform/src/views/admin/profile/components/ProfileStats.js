import React from 'react';
import {
  Box,
  Button,
  Flex,
  Avatar,
  AvatarBadge,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  Divider,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import Card from "components/card/Card.js";

export default function ProfileStats() {
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bgColor = useColorModeValue("white", "navy.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Card>
      <Stack spacing={6}>
        {/* Username Section */}
        <FormControl>
          <FormLabel color={textColorSecondary}>Username</FormLabel>
          <Input 
            defaultValue="@johndoe"
            size="lg"
            fontWeight="600"
            variant="filled"
            bg={useColorModeValue("gray.50", "gray.700")}
          />
        </FormControl>

        {/* Balance Section */}
        <Box 
          p={4} 
          bg={useColorModeValue("gray.50", "gray.700")}
          borderRadius="lg"
        >
          <Text 
            fontSize="md" 
            color={textColorSecondary}
            mb={1}
          >
            Account Balance
          </Text>
          <Text 
            fontSize="3xl" 
            fontWeight="bold" 
            color={textColorPrimary}
          >
            12,345 USDC
          </Text>
        </Box>

        <Divider />

        {/* Avatar Section */}
        <Flex align="center" direction="column">
          <Box position="relative">
            <Avatar
              size="2xl"
              src="https://bit.ly/sage-adebayo"
            >
              <AvatarBadge
                as={IconButton}
                size="sm"
                rounded="full"
                top="-10px"
                colorScheme="brand"
                aria-label="Change Image"
                icon={<SmallCloseIcon />}
              />
            </Avatar>
          </Box>
          <Button
            mt={4}
            size="sm"
            colorScheme="brand"
            variant="outline"
          >
            Change Avatar
          </Button>
        </Flex>

        {/* Stats Section */}
        <SimpleGrid columns={2} spacing={4} w="100%">
          <Stat
            px={4}
            py={3}
            bg={bgColor}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <StatLabel color={textColorSecondary}>Total Spent</StatLabel>
            <StatNumber color={textColorPrimary} fontSize="2xl">
              2,450 USDC
            </StatNumber>
          </Stat>

          <Stat
            px={4}
            py={3}
            bg={bgColor}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <StatLabel color={textColorSecondary}>Active Campaigns</StatLabel>
            <StatNumber color={textColorPrimary} fontSize="2xl">
              3
            </StatNumber>
          </Stat>
        </SimpleGrid>
      </Stack>
    </Card>
  );
} 