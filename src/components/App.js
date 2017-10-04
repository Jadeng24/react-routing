import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Cart from './Cart/Cart';

import router from '../router.js';

var obj1 = {
  name: "foo",
  age: 2,
  color: "red"
}

var ob1Copy = Object.assign({},obj1)

export default function App() {
  return (
    <div>
      <Nav />
      <div id="App__mainContainer">
        <div id="App__routerContainer">
         { router }
          <Cart />
        </div>
      </div>
    </div>
  )
}