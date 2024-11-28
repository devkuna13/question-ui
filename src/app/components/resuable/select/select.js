import React from 'react'

const Select = (props) => {
  const { name, options, lbl } = props
  return (
    <>
      <div className='row'>
        <div className='col-sm-5 text-end'>
          <label>{lbl}</label>
        </div>
        <div className='col-sm-3 text-start'>
          <select name={name} className='form-control'>
            {
              options.map((opt, ind) => {
                return <option key={ind + "opt"} value={opt}>{opt}</option>
              })
            }
          </select>  
        </div>
        <div className='col-sm-4 text-start'>
          <small>this is for validation</small>
        </div>
      </div>
    </>
  )
}

export default Select