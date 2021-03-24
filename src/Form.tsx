import React, { useState} from 'react';
import {goods} from "./data";
import {AddCallback} from "./App";

interface FormProps {
  addGood: AddCallback
}

const Form = ({addGood}: FormProps) => {

  const [inputValues, setInputValues] = useState({name: '', quantity: 0, price: 0})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const submitHandler = (event: React.SyntheticEvent )=> {
    event.preventDefault();
    addGood(inputValues.name, inputValues.quantity, inputValues.price)
    setInputValues({name: '', quantity: 0, price: 0})
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter'){
      submitHandler(event)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group input-group mb-3">
        <input
          name = 'name'
          type="text"
          className="form-control"
          placeholder="Enter product name..."
          value={inputValues.name}
          onChange={handleChange}
          onKeyDown={handleKeyPress}

        />
        <input
          name = 'quantity'
          type="number"
          className="form-control"
          placeholder="Enter product quantity..."
          onChange={handleChange}
          value={inputValues.quantity}
          onKeyDown={handleKeyPress}
        />
        <input
          name = 'price'
          type='number'
          className="form-control"
          placeholder="Enter product price..."
          onChange={handleChange}
          value={inputValues.price}
          onKeyDown={handleKeyPress}
        />
        <button type='submit'>Add</button>
      </div>
    </form>
  )
}

export default Form;
