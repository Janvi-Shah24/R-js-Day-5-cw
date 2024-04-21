import React from 'react';
import './Style/userinput.css';

export default function UserInput(prop) {
    const callOnSubmit =(e)=> prop.getDataFromUser(e);
    const addOnClick = ()=> prop.addItem();
  return (
    <>
    <form action="" className="form" onSubmit={callOnSubmit}>
        <input type="text" placeholder='Subject'/>
        <input type="number" placeholder='Hour'/>
        <input type="submit" value="Add" />
    </form>
    </>
  )
}