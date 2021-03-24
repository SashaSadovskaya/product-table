import {IGood} from "./data";
import React from "react";

export type RemoveCallback = (id: number) => void;
export type AddCallback = (inputName: string, inputQuantity: number, inputPrice: number) => void;
export type UpdateCallback = (id: number, inputName: string, inputQuantity: number, inputPrice: number) => void;


export interface TableProps {
  goods: IGood[]
  removeGood: RemoveCallback
  updateGood: UpdateCallback
}

export interface IItemProps {
  good: IGood;
  removeGood: RemoveCallback
  editGood: RemoveCallback
}
export interface ItemProps {
  good: IGood;
  removeGood: RemoveCallback
  editGood: RemoveCallback
  updateGood: UpdateCallback
  setToEdit: React.Dispatch<React.SetStateAction<number>>
}
