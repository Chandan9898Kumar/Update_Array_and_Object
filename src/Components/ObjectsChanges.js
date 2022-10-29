import React, { useState } from "react";

const data = {
    name: 'as',
    age: 9090,
    num: 99999999,
    home: {
        address: 'usa',
        place: 'new jersey',
        length: 0
    }
}
const ObjectForm = () => {
    const [count, setCount] = useState(data)


// You can use the ... object spread syntax so that you don’t need to copy every property separately.
// ... spread syntax will copy entire property.    

// To see this effect just remove the ...count from every event then you can see the disparity.
    const NameCHange = (e) => {
        setCount({
            ...count,
            name: e.target.value,
            // you cant do it like this  count.name:e.target.value.   wrong approach.
        })
    }

    const AgeCHange = (e) => {
        setCount({
            ...count,
            age: e.target.value
        })
    }

    const NumberCHange = (e) => {
        setCount({
            ...count,
            num: e.target.value
        })
    }
    const AddresCHange = (e) => {
        // Here length is in inside home,so to change it this is how it is be done.
        setCount({
            ...count,
            home: {
                ...count.home,
                address: e.target.value,
                length: count.home.length + 1
            }

        })
    }

    const AddresPlaceCHange = (e) => {
        setCount({
            ...count,
            home: {
                ...count.home,
                place: e.target.value
            }
        })
    }

//                                      Note  

// Treat all state in React as immutable.
// When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
// Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
// You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
// Spread syntax is shallow: it only copies one level deep.
// To update a nested object, you need to create copies all the way up from the place you’re updating.


    return (
        <>
            <br />
            Name: {count.name}<br />
            Age: {count.age}<br />
            Number: {count.num}<br />
            Home Addres: {count.home.address}<br />
            Address Place: {count.home.place}<br />
            Length Of Home Address: {count.home.length}<br />
            <hr />

            Name :<input
                type="text"
                value={count.name}
                onChange={(e) => NameCHange(e)}
            /><br />
            Age :
            <input
                type="text"
                value={count.age}
                onChange={(e) => AgeCHange(e)}
            /><br />
            Number :
            <input
                type="text"
                value={count.num}
                onChange={(e) => NumberCHange(e)}
            /><br />
            Home Address :
            <input
                type="text"
                value={count.home.address}
                onChange={(e) => AddresCHange(e)}
            /><br />
            Addres place :
            <input
                type="text"
                value={count.home.place}
                onChange={(e) => AddresPlaceCHange(e)}
            /><br />
        </>
    )
}
export default ObjectForm;