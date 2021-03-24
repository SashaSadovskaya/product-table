import {IGood} from "./types";

export const goods: Array<IGood> = [
  {
    id: new Date().getTime(),
    name: "pen",
    quantity: 43,
    price: 2.2
  },
  {
    id: new Date().getTime() + 1,
    name: "pencil",
    quantity: 54,
    price: 1.5
  },
  {
    id: new Date().getTime() + 2,
    name: "notebook",
    quantity: 4,
    price: 5.5
  }
]


