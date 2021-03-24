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
  let sum = 0;

  goods.forEach(good =>{
    sum += good.price * good.quantity
    return sum
  } )

  return (
    <table className="table table-hover table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Actions</th>
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
          {`Total cost: `}
        </td>
        <td className='table-col' colSpan={3}>
          {`${sum} $`}
        </td>
      </tr>
      </tbody>
    </table>
  )
}
