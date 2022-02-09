import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import SearchBox from "./SearchBox";
import ThemeToggle from "./ThemeToggle";
import UserStatus from "./UserStatus";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justify="space-between">
      <Heading as="h1" size="lg" fontWeight="700">
        <Link href="/">岚软</Link>
      </Heading>

      <Flex gap={2}>
        <SearchBox />
        <UserStatus />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
