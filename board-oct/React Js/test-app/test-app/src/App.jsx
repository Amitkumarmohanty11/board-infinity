//import { Component } from 'react'
import React from 'react'
import './App.css'
import NewBurger from './components/NewBurger/NewBurger'
import { BurgerComponents } from './data'





function App() {
  

  return (
    <div className="App">
      
    <NewBurger ingredients={
      [BurgerComponents.LETTUCE,
        BurgerComponents.ONIONS,
        BurgerComponents.MAYO,
        BurgerComponents.LETTUCE,
        BurgerComponents.ONIONS
      ]

    }/>
    </div>
  )
}

export default App
