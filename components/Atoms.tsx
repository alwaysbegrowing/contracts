import { atom } from "recoil";

export const contractState = atom<{ name: string; chain: string }>({
  key: "contract",
  default: {
    name: "",
    chain: "",
  },
});

export const searchTermState = atom({
  key: "searchTerm",
  default: "",
});
