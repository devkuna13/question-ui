import React from 'react'

const Select = (props) => {
  const { name, options, lbl,fnChange,errorMsg } = props
  return (
    <>
      <div className='row'>
        <div className='col-sm-5 text-end'>
          <label>{lbl}</label>
        </div>
        <div className='col-sm-3 text-start'>
          <select onChange={fnChange} name={name} className='form-control'>
            {
              options.map((opt, ind) => {
                return <option key={ind + "opt"} value={opt}>{opt}</option>
              })
            }
          </select>  
        </div>
        <div className='col-sm-4 text-start'>
          <small>{errorMsg}</small>
        </div>
      </div>
    </>
  )
}

export default Select