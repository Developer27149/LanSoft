import { Box, Flex, Tag, TagLabel } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineApple } from "react-icons/ai";
import { FcDatabase, FcTabletAndroid } from "react-icons/fc";
import { SiWindows } from "react-icons/si";

export default function Navbar() {
  return (
    <Box marginTop={4} paddingY={3}>
      <Box borderLeft="3px solid #eee" paddingLeft={2}>
        分类
      </Box>
      <Flex as="nav">
        <Box paddingX={3} paddingY={2}>
          <Tag>
            <FcDatabase fontSize={18} />
            <TagLabel paddingLeft={1} paddingY={2}>
              <Link href="/">总览</Link>
            </TagLabel>
          </Tag>
        </Box>
        <Box paddingX={3} paddingY={2}>
          <Tag>
            <SiWindows color="skyblue" fontSize={18} />
            <TagLabel paddingLeft={1} paddingY={2}>
              <Link href="/">Windows</Link>
            </TagLabel>
          </Tag>
        </Box>
        <Box paddingX={3} paddingY={2}>
          <Tag>
            <AiOutlineApple fontSize={18} />
            <TagLabel paddingLeft={1} paddingY={2}>
              <Link href="/">macOS</Link>
            </TagLabel>
          </Tag>
        </Box>
        <Box paddingX={3} paddingY={2}>
          <Tag>
            <FcTabletAndroid fontSize={18} />
            <TagLabel paddingLeft={1} paddingY={2}>
              <Link href="/">Phone</Link>
            </TagLabel>
          </Tag>
        </Box>
      </Flex>
    </Box>
  );
}
