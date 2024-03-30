import React from 'react'
import "./Cancel.css"
import { Link } from 'react-router-dom'

function Cancel() {
  return (
<div className="containerr">
  <div className="row justify-content-center">
    <div className="col-md-5">
      <div className="message-box _success _failed">
        <i className="fa fa-times-circle" aria-hidden="true" />
        <h2> Your payment failed </h2>
        <Link to="/meals">
        <button className='btnnn btn'> Try again later </button>
        </Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default Cancel