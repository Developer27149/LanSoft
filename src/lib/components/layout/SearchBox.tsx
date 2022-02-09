import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import { useRecoilState } from "recoil";

import { searchState } from "./searchStatus";

export default function SearchBox() {
  const [searchData, setSearchData] = useRecoilState(searchState);
  const handleChangeSearchKeyword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchData((oldData) => ({
      ...oldData,
      text: e.target.value,
    }));
  };
  return (
    <Flex mr={4}>
      <InputGroup>
        <Input
          pr="2rem"
          placeholder="软件卸载工具"
          type="text"
          focusBorderColor="teal.200"
          value={searchData.text}
          onChange={handleChangeSearchKeyword}
        />
        <InputRightElement bg="teal.100" borderRightRadius="4px">
          <Button
            size="sm"
            h="1.75em"
            bg="teal.100"
            color="blue.800"
            _hover={{ backgroundColor: "transparent" }}
          >
            <FcSearch />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
