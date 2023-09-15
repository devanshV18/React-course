import React from 'react'

function alert(props) {
  return (
    <div>
       <div className="alert alert warning alert-dismissable fade show" role ="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
            <button type='button' class='btn-close' data-bs-dismiss = "alert" aria-label="close"></button>
        </div>
    </div>
  )
}

export default alert

