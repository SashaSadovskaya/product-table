import React, {useState} from "react";
import './Table.scss'
import {Item} from "../Item/Item";
import {EditableItem} from "../EditableItem";
import {IGood, ITableProps} from "../../types";


export const Table = ({goods, removeGood, updateGood}: ITableProps) => {

  const [toEdit, setToEdit] = useState(0)

  const editGood = (id: number) => {
    setToEdit(id)
  }

  let sum = 0;

  goods.forEach(good =>{
    sum += Math.round(good.price * 100) * good.quantity
  })
  sum /= 100;

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
