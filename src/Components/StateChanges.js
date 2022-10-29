import React, { useState } from 'react';

let nextId = 0;

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];
const StateList = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);



    //                         ADDING  data into an Array


    // push() will mutate an array, which you don’t want: at line 23.

    // Instead, create a new array which contains the existing items and a new item at the end. 
    // There are multiple ways to do this, but the easiest one is to use the ... array spread syntax:

    //                                   example

    // setArtists(                        // Replace the state
    //   [ // with a new array
    //     ...artists,                   // that contains all the old items
    //     { id: nextId++, name: name } // and one new item at the end
    //   ]
    // );


    //    The array spread syntax also lets you prepend an item by placing it before the original ...artists:

    // setArtists([
    //     { id: nextId++, name: name },
    //     ...artists //                             Put old items at the end
    //   ]);


    // In this way, spread can do the job of both push() by adding to the end of an array and unshift() 
    // by adding to the beginning of an array.




    //                                    Removing elements from an Array by using Filter

    // The easiest way to remove an item from an array is to filter it out. 
    // In other words, you will produce a new array that will not contain that item.



    const HandleRemove = (e, artist) => {
        // Here, artists.filter(a => a.id !== artist.id) means “create an array that consists of those artists
        // whose IDs are different from artist.id”. In other words, each artist’s “Delete” button will filter
        // that artist out of the array, and then request a re-render with the resulting array.
        //  Note that filter does not modify the original array.

        e.preventDefault()
        setArtists(
            artists.filter((a) => {
                return a.id !== artist.id
            })

        )
    }

    //                                     Reverse the items.

    // There are some things you can’t do with the spread syntax and non-mutating methods 
    // like map() and filter() alone. For example, you may want to reverse or sort an array. 
    // The JavaScript reverse() and sort() methods are mutating the original array,
    // so you can’t use them directly.

    // However, you can copy the array first, and then make changes to it.
    const ReverseItem = () => {
        // we used the [...artists] spread syntax to create a copy of the original array first.
        //  Now that you have a copy, you can use mutating methods like nextList.reverse() or 
        //  nextList.sort(), or even assign individual items with nextList[0] = "something".

        const reverseData = [...artists]
        reverseData.reverse()
        setArtists(reverseData)
    }
    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <button onClick={() => {
                setName('');

                // artists.push({
                //   id: nextId++,
                //   name: name,
                // });

                setArtists([
                    ...artists,
                    {
                        id: nextId++,
                        name: name
                    }
                ]);

                // setArtists([
                //     { 
                //       id: nextId++,
                //       name: name
                //     },
                //     ...artists                              // Put old items at the end
                //   ]);
            }}>Add</button>

            <button
                onClick={() => ReverseItem()}>Reverse</button>

            <>
                <ul>
                    <>
                        {artists.map(artist => (
                            <li key={artist.id}>
                                {artist.name}
                                <button
                                    onClick={(e) => HandleRemove(e, artist)}>Remove</button>
                            </li>

                        ))}
                    </>
                </ul>

            </>

        </>
    );
}
export default StateList;