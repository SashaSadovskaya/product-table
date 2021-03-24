export const goods: Array<IGood> = [
  {
    id: new Date().getTime(),
    name: "pen",
    quantity: 43,
    price: 2.2
  },
  {
    id: new Date().getTime(),
    name: "pencil",
    quantity: 54,
    price: 1.5
  },
  {
    id: new Date().getTime(),
    name: "notebook",
    quantity: 4,
    price: 5.5
  }
]

export interface IGood {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

