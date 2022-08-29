import { useState } from 'react'
import './App.css'
import Card from "./components/Card"
import Info from "./components/Info"

export default function App() {
  const [card, setCard] = useState({
    name: "Jane Appleseed",
    number: "0000 0000 0000 0000",
    mounth: "00",
    year: "00",
    cvc: "000"
  })

  function handleChange(event) {
    const {name, value} = event.target
    setCard(prevCard => {
      return {...prevCard, [name]: value}
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const box = event.target
    console.log(box)
    if(card.name === "" || card.number === "" || card.mounth === "" || card.year === "" || card.cvc === "") {
      console.log("campo vazio")
    }
  }

  return (
    <main className="App">
      <div className="Bg__app"></div>
      <Card
      card={card}
      />
      <Info
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
    </main>
  )
}
