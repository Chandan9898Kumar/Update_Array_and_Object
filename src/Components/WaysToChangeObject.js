
import React, { useState } from "react";
const objectData = {
  name: "as",
  age: 9090,
  num: 99999999,
  home: {
    address: "usa",
    place: "new jersey",
    length: 0
  }
};
const ObjectFunction = () => {
  const[inputdata,setInputData]=useState('')
  const [count, setCount] = useState(objectData);

  console.log(count, "count");
  const HandleAdd=(e)=>{
    e.preventDefault()
    //  in an Object, we can append(Add) data by 3 ways(should be key :value):   Console it.

    // 1. count.lunch=inputdata
    // 2. count['lunch']=inputdata

    // 3.
    setCount({
      ...count,
      Lunch:inputdata,
      Time:inputdata.length
    })
    setInputData('')

  }
  return (
    <>
      Name: {count.name}
      <br />
      Age: {count.age}
      <br />
      Number: {count.num}
      <br />
      Home Addres: {count.home.address}
      <br />
      Address Place: {count.home.place}
      <br />
      Length Of Home Address: {count.home.length}
      <br />
      <input
      type="text"
      value={inputdata}
      onChange={(e)=>setInputData(e.target.value)}/><br />
      <button
      onClick={(e)=>HandleAdd(e)}
      
      >Add</button>
    </>
  );
};
export default ObjectFunction;
