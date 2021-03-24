import React, {useState} from "react";
import {IGood} from "./data";
import {AddCallback, UpdateCallback, RemoveCallback} from "./App";
import './Table.scss'
import {Item} from "./Item";
import {EditableItem} from "./EditableItem";

interface TableProps {
  goods: IGood[]
  removeGood: RemoveCallback
  updateGood: UpdateCallback
}

export const Table = ({goods, removeGood, updateGood}: TableProps) => {

  const [toEdit, setToEdit] = useState(0)

  const editGood = (id: number) => {
    setToEdit(id)
  }

  return (
    <table className="table table-hover table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {goods.map((good: IGood, key) => (
        <tr key={key}>
          {good.id === toEdit ?
            <EditableItem good={good} removeGood={removeGood} editGood={editGood} updateGood={updateGood} setToEdit={setToEdit}/> :
            <Item good={good} removeGood={removeGood} editGood={editGood}/>
          }
        </tr>
      ))}
      <tr>
        <td>
          Total cost:
        </td>
      </tr>
      </tbody>
    </table>
  )
}
