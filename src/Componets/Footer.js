import React from 'react'

const Footer = ({title}) => {
  return (
    <section class="footer  bg-dark text-white">
      <p class="lead container">Contact us at Instagram</p>
      <p class="lead container">You can react via email too</p>
      <p class="lead container">{title}</p>
    </section>
  )
}

export default Footer