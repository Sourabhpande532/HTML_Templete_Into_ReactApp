import React from 'react'
import CardT from '../CardT'

const Card = () => {
  return (
    <section class="contact bg-success ">
    <div class="container ">
      <h2 class="text-white">
        We love new friends!
      </h2>
      <div class="row">
        <div class="col-4">
        <CardT title='Udymy' buttonText='Go ➡️' text=' Some quick example text to build on the card title and make on'/>
        </div>
        <div class="col-4">
        <CardT title='Learn' buttonText='Button ➡️' text=' Some quick example text to build on'/>
        </div>
        <div class="col-4">
        <CardT title='YouTube' buttonText='Explore ➡️' text=' Some quick example text to build on' />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Card