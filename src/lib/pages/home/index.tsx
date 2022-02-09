import { Box } from "@chakra-ui/react";

import SoftwareTags from "../../components/public/SoftwareTags";
import SomeText from "lib/components/samples/SomeText";

import HomepageImage from "./HomepageImage";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <HomepageImage />
      <Box>
        <SomeText />
        <Navbar />
        <SoftwareTags />
      </Box>
    </Box>
  );
};

export default Home;
