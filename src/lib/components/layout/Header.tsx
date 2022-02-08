import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justify="space-between">
      <Heading as="h1" size="lg" fontWeight="700">
        <Link href="/">岚软</Link>
      </Heading>

      <Box>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
