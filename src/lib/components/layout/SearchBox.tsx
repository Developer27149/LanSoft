import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState } from "recoil";

import { searchState } from "./searchStatus";

export default function SearchBox() {
  const [searchData, setSearchData] = useRecoilState(searchState);
  const handleSearchAction = () => {
    console.log("search target:", searchData);
  };
  const handleChangeSearchKeyword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchData((oldData) => ({
      ...oldData,
      text: e.target.value,
    }));
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    // 为全局注册一个快捷键搜索
    function handleFocusSearch(e: React.KeyboardEvent<HTMLElement>) {
      if (e.ctrlKey && e.key === "k") {
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keypress", handleFocusSearch as any);
    return () => {
      document.removeEventListener("keypress", handleFocusSearch as any);
    };
  }, []);

  return (
    <Flex mr={4}>
      <InputGroup>
        <Input
          pr="2rem"
          placeholder="ctrl+k 快速搜索"
          type="text"
          focusBorderColor="teal.200"
          value={searchData.text}
          onChange={handleChangeSearchKeyword}
          ref={inputRef}
          onPointerEnter={handleSearchAction}
        />
        <InputRightElement
          bg="teal.100"
          borderRightRadius="4px"
          onClick={handleSearchAction}
          cursor="pointer"
        >
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
