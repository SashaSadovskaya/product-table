import React from "react";
import editIcon from "./assets/edit.png";
import deleteIcon from "./assets/delete1.png"
import {IGood} from "./data";
import {RemoveCallback} from "./App";
import './Item.scss'

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
      </td>
      <td className='table-col'>{good.quantity}</td>
      <td className='table-col'>{`${good.price} $`}</td>
      <td>
        <div className='button-container'>
          <button onClick={() => {editGood(good.id)}} type="button" className="btn edit-btn">
            <img className='icon-edit' alt='edit' src={editIcon}/>
          </button>
          <button onClick={() => {
            removeGood(good.id)
          }} type="button" className="btn">
            <img className='icon-delete' alt='delete' src={deleteIcon}/>
          </button>
        </div>
      </td>
    </>
  )
}
