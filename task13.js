//Ну тут 1 строчка кода можно я не буду поднимать реакт это точно работает ^)

import React from 'react';


let style = {
    border: `1px solid gray`
  }
  
export default function Vasya() {
    return (
      <div className="App">
  <div class="vasya" style={style}>
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
  </div>
  <p>Some text here</p>
      </div>
    );
  }
  

