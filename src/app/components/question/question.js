import React, { useState } from 'react'
import { configFile } from './configValues'
import { TextArea } from '../resuable/textArea'
import { Input } from '../resuable/input'
import Select from '../resuable/select/select'
import { fnOnChange,formValidate } from '@/includes/common/FormFunctions'
import { ServerCall } from '@/includes/common/ServerCall'
const Question = () => {
  const [inputValues, setInputValues] = useState(configFile)
  const fnChange = (eve) => {
    // console.log("thi is the event ",e.target.value,e.target.name)
    const afterinputChanedValues=fnOnChange(eve,inputValues)
    setInputValues(afterinputChanedValues)
  }

  const fnSubmit = () => {
    const [isValid,_inputValues,dataObj]=formValidate(inputValues)
    if (isValid) {
      setInputValues(_inputValues)
      return;
    }
    console.log("thi is the data object",dataObj)
    ServerCall.sendPost(`que/save`,{"data":dataObj})
    .then((res)=>{
      const {acknowledged,insertedId} = res.data
      if(acknowledged && insertedId){
        alert("data inserted successfully")
      }
      else{
        alert("failed to insert the data")
        // console.log("response",res)
      }
    })
    .catch((res)=>{
      alert("something went wrong..")
    })
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