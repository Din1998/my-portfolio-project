import React from 'react';
import './HeroUi.css';
import Particles from 'react-particles-js'

function Particless() {
  return (
    <div>
      <Particles className="particless-css"
      params = {{
       particles: {
         number: {
           value:100,
           density: {
              enable: true,
              value_area: 1000
           }
         },
         color: {
            value: 'rgb(247, 236, 236)'
         },
         opacity: {
           value: 0.5,
           anim: {
             enable: true
           }
         },
         size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 5
           }
         },
         line_linked: {
           enable: true,
           color: 'rgb(139, 204, 230)'
         },
         move : {
           speed: 0.5
         },
      }   
    }}
       />
    </div>
  )
}

export default Particless