import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatHelpText,
  StatGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" justify="end">
      <Box marginRight="auto">
        <Button
          marginTop={2}
          as="a"
          href="https://github.com/youyiqin/LanSoft"
          target="_blank"
          size="sm"
          leftIcon={<AiOutlineGithub />}
        >
          赏个 Star
        </Button>
      </Box>
      <StatGroup gap={16}>
        <Stat>
          <StatLabel>今日访客</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>今日下载量</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Flex>
  );
};

export default Footer;
