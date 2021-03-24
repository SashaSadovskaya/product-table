import React, {useState} from 'react';
import './App.scss';
import {Table} from "./Table";
import Form from "./Form";
import {IGood} from "./data";

export type RemoveCallback = (id: number) => void;
export type AddCallback = (inputName: string, inputQuantity: number, inputPrice: number) => void;
export type UpdateCallback = (id: number, inputName: string, inputQuantity: number, inputPrice: number) => void;

function App() {
  const now = new Date();

  const [goods, setGoods] = useState<Array<IGood>>([])

  const removeGood: RemoveCallback = (id: number) => {
    setGoods([...goods.filter((good) => good.id !== id)])
  }

  const updateGood: UpdateCallback = (id, inputName, inputQuantity, inputPrice) => {

    if (id && inputName && inputQuantity && inputPrice) {

      let good: IGood;
      let key: number;
      for(let i = 0; i <= goods.length; i++) {
        if(goods[i].id === id) {
          good = goods[i];
          key = i;
          break;
        }
      }

      // @ts-ignore
      if(good === undefined || key === undefined) return;

      good.name = inputName;
      good.quantity = inputQuantity;
      good.price = inputPrice;
      goods[key] = good;
      setGoods([...goods]);
    }
  }


  const addGood: AddCallback = (inputName: string, inputQuantity: number, inputPrice: number) => {

    if (inputName && inputQuantity && inputPrice) {
      const newGood: IGood = {
        id: now.getTime(),
        name: inputName,
        quantity: inputQuantity,
        price: inputPrice
      }

      setGoods([...goods, newGood]);
    }
  }


  return (
    <div className="app-container">
      <Form addGood={addGood}/>
      <Table updateGood={updateGood} removeGood={removeGood} goods={goods}/>
    </div>
  );
}

export default App;
