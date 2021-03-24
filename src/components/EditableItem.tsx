import React, {useState} from "react";
import {IEditableItemProps, IGood} from "../types";


export const EditableItem = ({good, updateGood, setToEdit}: IEditableItemProps) => {

  const [inputValues, setInputValues] = useState<IGood>(good)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setInputValues({...inputValues, [name]: value});
  };

  const clickHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    updateGood(good.id, inputValues.name, inputValues.quantity, inputValues.price)
    setToEdit(0);
  }

  return (
      <>
        <td className='first-col'>
          <input
            type='text'
            value={inputValues.name}
            name='name'
            onChange={handleChange}
            className="form-control"
          />
        </td>
        <td className='table-col'>
          <input
            min='1'
            type='number'
            value={inputValues.quantity}
            name='quantity'
            onChange={handleChange}
            className="form-control"
          />
        </td>
        <td className='table-col'>
          <input
            min='0'
            type='number'
            name='price'
            value={inputValues.price}
            onChange={handleChange}
            className="form-control"
          />
        </td>
        <td>
          <div className='button-container'>
            <button
              type="button"
              className="btn  btn-outline-success btn-sm ml-1"
              onClick={clickHandler}
            >
              update
            </button>
          </div>
        </td>
      </>
  )
}
