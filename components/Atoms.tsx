import { atom } from "recoil";

export const contractState = atom({
  key: "contract",
  default: "",
});

export const searchTermState = atom({
  key: "searchTerm",
  default: "",
})