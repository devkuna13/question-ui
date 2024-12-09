import React, { useState } from 'react'
import { configFile } from './configValues'
import { TextArea } from '../resuable/textArea'
import { Input } from '../resuable/input'
import Select from '../resuable/select/select'
import { fnInputValidation } from '@/includes/common/Validation'
const Question = () => {
  const [inputValues, setInputValues] = useState(configFile)
  const fnChange = (eve) => {
    const { value, name } = eve.target
    console.log("value:"+value+"----"+"name:"+name)
    const _inputValues = [...inputValues];
    let input_Obj = _inputValues.find((obj) => name === obj.name)
    input_Obj.value = value
    if(input_Obj.required)
    {
      input_Obj=fnInputValidation(input_Obj)
      setInputValues(_inputValues)
    }
  }

  const fnSubmit=()=>{
    const _inoutValues = [...inputValues]
    _inoutValues.forEach((obj)=>{
      if(obj.required){
        console.log(obj.name+"...."+obj.creteria+"......"+obj.tag)
        fnInputValidation(obj)
      }
    })
    const isValid=_inoutValues.some((obj)=>obj.errorMsg)
    if(isValid){
      setInputValues(_inoutValues)
      return;
    }

    alert("send to request to the server and save into mongodb")
  }
  return (
    <div className='mt-5 container-fluid'>
      {
        inputValues.map((obj, ind) => {
          const attr = { ...obj, fnChange }
          switch (obj.tag) {
            case "textArea":
              return <TextArea key={ind + "textarea"}  {...attr} />
            case "input":
              return <Input key={ind + "input"} {...attr} />

            case "radio":
              return <Input key={ind + "radio"} {...attr} />

            case "select":
              return <Select key={ind + "select"} {...attr} />
          }

        })
      }
      <div className='offset-5 col-7'>
        <button onClick={fnSubmit} className='btn btn-primary'>Submit</button>
      </div>


    </div>
  )
}

export default Question