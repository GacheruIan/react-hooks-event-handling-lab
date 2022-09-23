// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    function click(){
        console.log("Good!")
    }
    function clicked(){
        console.log("Hey! Eyes on me!")
    }
  return (
    <div>
        <button onFocus={click} onBlur={clicked}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe