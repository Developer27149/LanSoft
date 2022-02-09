import { Box, Flex, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import {AiOutlineTags} from 'react-icons/ai';
import { GrSystem } from 'react-icons/gr';
import {MdContentCut} from "react-icons/md";

export default function SoftwareTags() {
  return <Box paddingY={3}>    
    <Box borderLeft="3px solid #eee" paddingLeft={2}>标签</Box>
    <Flex paddingTop={2} flexWrap="wrap">
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={AiOutlineTags}/>
        <TagLabel>文件</TagLabel>
      </Tag>
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={MdContentCut}/>
        <TagLabel>截图</TagLabel>
      </Tag>
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={GrSystem}/>
        <TagLabel>系统</TagLabel>
      </Tag>
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={AiOutlineTags}/>
        <TagLabel>文件</TagLabel>
      </Tag>
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={MdContentCut}/>
        <TagLabel>截图</TagLabel>
      </Tag>
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={GrSystem}/>
        <TagLabel>系统</TagLabel>
      </Tag>
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={AiOutlineTags}/>
        <TagLabel>文件</TagLabel>
      </Tag>
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={MdContentCut}/>
        <TagLabel>截图</TagLabel>
      </Tag>
      <Tag colorScheme="green" margin="6px 8px">
        <TagLeftIcon as={GrSystem}/>
        <TagLabel>系统</TagLabel>
      </Tag>
    </Flex>
  </Box>;
}
