import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { FrameSenseLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import { Link } from "react-router-dom";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Link href='/'>
        <FrameSenseLogo h='26px' w='175px' my='32px' color={logoColor} />
      </Link>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
