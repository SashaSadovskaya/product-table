import React from "react";
import edit from "./edit.png";
import {IGood} from "./data";
import {RemoveCallback} from "./App";

interface ItemProps {
  good: IGood;
  removeGood: RemoveCallback
  editGood: RemoveCallback
}

export const Item = ({good, removeGood, editGood}: ItemProps) => {


  return (
    <>
      <td className='first-col'>
        {good.name}
        <div className='button-container'>
          <button onClick={() => {editGood(good.id)}} type="button" className="btn edit-btn">
            <img className='edit-img' alt='edit' src={edit}/>
          </button>
          <button onClick={() => {
            removeGood(good.id)
          }} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
        </div>
      </td>
      <td className='table-col'>{good.quantity}</td>
      <td className='table-col'>{good.price}</td>
    </>
  )
}
