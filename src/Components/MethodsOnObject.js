import React from "react";

class Myobject extends React.Component {
  constructor(props) {
    super(props);
    // here all properties which are  inside state,act as separate(single or different)
    // state.ex: name is separate,age and num , data  and home are separate.

    // note here in home,it is also a single state but inside we have two property
    // if we change one then other will be erased.so here we have to take
    //  previous values.
    this.state = {
      name: "lp",
      age: 90,
      num: 88888,
      data: [],
      home: {
        address: "usa",
        pincode: 700
      }
    };
  }

  //                          Different ways to set state in an Object.


  NameCHanage = (e) => {
    // every property  working as a single state.name working as single state.
    // there is no need to take previous values.
    this.setState({
      name: e.target.value
    });
  };

  AgeCHanage = (e) => {
    // it will work without giving prev beacuse it is a separate
    // property.
    this.setState((prev) => {
      return {
        ...prev,
        age: e.target.value
      };
    });
  };

  NumCHanage = (e) => {
    // it will work without giving prev beacuse it is a single/Separate
    // property.
    this.setState((prev) => ({
      ...prev,
      num: e.target.value
    }));
  };

  HandleAdd = (e) => {
    const { data } = this.state;
    this.setState({
      data: [...data, "hello"]
    });
    //               'OR'

    // this.setState((prev) => ({
    //   data: [...prev.data, "hello"]
    // }));
  };

  AddresChange = (e) => {
    // Here we need previous value to maintain state.
    // We deStructured home from state.using ... spred syntax to retain previous values.
    const { home } = this.state;
    this.setState({
      home: {
        ...home,
        address: e.target.value
      }
    });
  };

  PinChange = (e) => {
    // Here we need previous value to maintain state and to get all property
    // which is present inside home property.
    const { home } = this.state;
    this.setState({
      home: {
        ...home,
        pincode: e.target.value
      }
    });
  };
  // Here we deStructed first home from state and then desrtuct address and pincode from home.
  render() {
    const {
      name,
      age,
      num,
      data,
      home: { address, pincode }
    } = this.state;
    return (
      console.log(this.state, "state"),
      (
        <>
          Name:{name}
          <br />
          age:{age}
          <br />
          num:{num}
          <br />
          Home Addres:{address}
          <br />
          pinCode :{pincode}
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => this.NameCHanage(e)}
          />
          <br />
          <input type="text" value={age} onChange={(e) => this.AgeCHanage(e)} />
          <br />
          <input type="text" value={num} onChange={(e) => this.NumCHanage(e)} />
          <br />
          <input
            type="text"
            value={address}
            onChange={(e) => this.AddresChange(e)}
          />
          <br />
          <input
            type="text"
            value={pincode}
            onChange={(e) => this.PinChange(e)}
          />
          <br />
          <button onClick={(e) => this.HandleAdd()}>Add</button>
          {data.map((item) => (
            <li>{item}</li>
          ))}
        </>
      )
    );
  }
}
export default Myobject;
