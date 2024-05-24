import React,{useEffect, useState} from 'react';
import axios from "axios";


const Pokemon = () => {

const[num, setnum] = useState();
const[name, setname] = useState();
const[moves, setmoves] = useState();

useEffect(()=>{
  async function getdata(){
    const response  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setname(response.data.name);
      setmoves(response.data.moves.length);
      console.log(response.data.moves);
  }

getdata();

});

  return (
    <>
    <h1>Pokemon</h1>

<h2>you choose the value <span style={{color:'red'}}>{num}</span> </h2>
<h3>pokemon name is <span style={{color:'red'}}>{name}</span></h3>
<h3>pokemon id is  <span style={{color:'red'}}>{moves}</span></h3>



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