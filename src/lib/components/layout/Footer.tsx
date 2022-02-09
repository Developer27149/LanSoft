import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatHelpText,
  StatGroup,
  Button,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" justify="end">
      <Flex marginRight="auto" flexDir="column">
        <Button
          marginTop={2}
          as="a"
          href="https://github.com/youyiqin/LanSoft"
          target="_blank"
          size="sm"
          leftIcon={<AiOutlineGithub />}
        >
          赏个 ⭐️
        </Button>
        <Button
          marginTop={2}
          as="a"
          href="mainto:rivenqinyy@gmail.com"
          target="_blank"
          size="sm"
          leftIcon={<AiOutlineMail />}
        >
          提个建议
        </Button>
      </Flex>
      <StatGroup gap={16}>
        <Stat>
          <StatLabel>今日访客</StatLabel>
          <StatNumber>1,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>日下载量</StatLabel>
          <StatNumber>345</StatNumber>
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
