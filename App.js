import React from "react";
import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Message from "./components/Message";

function App() {
  const BtnClick = () =>{
 console.log("кнопка натиснута");

  }
  return (
    <div>
      <Greeting name="Дмитро" />
      <Message text="Гарного вечора" />
      <Button onClick={BtnClick} /> 
      
    </div>
  );
}

export default App;
