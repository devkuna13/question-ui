import React from 'react'

export const TextArea = (props) => {
  const { name, lbl } = props
  return (
    <>
      <div className='row'>
        <div className='col-sm-5 text-end'
          style={{
            // border: "2px solid red"
          }}
        >
          <label>{lbl}</label>
        </div>
        <div className='col-sm-3 text-start'>

          <textarea name={name} className='form-control'>
       </textarea>
        </div>
           <div className='col-sm-4 text-start'>
          <small>this is the for the validation </small>
          </div>

      </div>
    </>
  )
}
