import { atom } from "recoil";

import type { SearchResultType } from "lib/types/index";

export const searchState = atom({
  key: "searchState",
  default: {
    text: "",
    isSearching: false,
    result: [] as SearchResultType,
  },
});
