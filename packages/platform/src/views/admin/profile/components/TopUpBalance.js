import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightAddon,
  Alert,
  AlertIcon,
  Flex,
} from '@chakra-ui/react';
import Card from "components/card/Card.js";

export default function TopUpBalance() {
  const [amount, setAmount] = useState('');
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bgColor = useColorModeValue("white", "navy.700");

  const handleTopUp = () => {
    // Handle the top-up logic here
    console.log('Top up amount:', amount);
  };

  return (
    <Card>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'
      >
        Top Up Balance
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Add funds to your account using USDC
      </Text>

      <Stack spacing={6}>
        <FormControl>
          <FormLabel>Amount to Top Up</FormLabel>
          <InputGroup size="lg">
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <InputRightAddon children="USDC" />
          </InputGroup>
        </FormControl>

        <Alert status="info" borderRadius="md">
          <AlertIcon />
          Funds will be added to your account after the transaction is confirmed
        </Alert>

        <Flex justify="space-between" align="center">
          <Text color={textColorSecondary}>Current Balance:</Text>
          <Text color={textColorPrimary} fontSize="lg" fontWeight="bold">
            12 345 USDC
          </Text>
        </Flex>

        <Button
          bg="brand.500"
          color="white"
          size="lg"
          _hover={{
            bg: 'brand.600',
          }}
          onClick={handleTopUp}
        >
          Top Up Balance
        </Button>
      </Stack>
    </Card>
  );
} 