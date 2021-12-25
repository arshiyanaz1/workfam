import React from 'react'
import Header from "../Components/Header/Header.js";
import Card from '../Components/Card/Card'


function Main() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
        <Card />
      </div>

    </div>
  )
}
export default Main
