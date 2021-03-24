import React, {useState} from 'react';
import './App.scss';
import {Table} from "./Table";
import Form from "./Form";
import {IGood} from "./data";

export type RemoveCallback = (id: any) => void;
export type AddCallback = (inputName: string, inputQuantity: number, inputPrice: number) => void;

function App() {
  const now = new Date();

  const [key, setKey] = useState(1);
  const [goods, setGoods] = useState<Array<IGood>>([])
  console.log(goods)

  const removeGood: RemoveCallback = (id: number) => {
    console.log(id)
    // @ts-ignore
    setGoods([...goods.filter((good) => good.id !== id)])
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
      <Table removeGood={removeGood} goods={goods} key={key}/>
    </div>
  );
}

export default App;
