import React from 'react'

export const TextArea = (props) => {
  const { name, lbl,fnChange,errorMsg } = props
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

          <textarea onChange={fnChange} name={name} className='form-control'>
       </textarea>
        </div>
           <div className='col-sm-4 text-start'>
          <small>{errorMsg}</small>
          </div>

      </div>
    </>
  )
}
