import React,{useState} from 'react';


const Pokemon = () => {

const[num, setnum] = useState();

  return (
    <>
    <h1>Pokemon</h1>

<h2>you choose the value {num} </h2>

    <select name="" id="" value={num} onChange={ (Event) =>{setnum(Event.target.value)} }>
        <option value="" hidden>Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>

    </>
  );
};

export default Pokemon;