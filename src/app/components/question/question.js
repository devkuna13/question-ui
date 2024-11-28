import React, { useState } from 'react'
import { configFile } from './configValues'
import { TextArea } from '../resuable/textArea'
import { Input } from '../resuable/input'
import Select from '../resuable/select/select'
const Question = () => {
  const [inputValues,setInputValues] = useState(configFile)
  return (
    <>
      {
        inputValues.map((obj, ind) => {
          switch (obj.tag) {
            case "textArea":
              return <TextArea key={ind + "textarea"} {...obj} />
            case "input":
              return <Input key={ind + "input"}{...obj} />

            case "radio":
              return <Input key={ind + "input"}{...obj} />

            case "select":
              return <Select key={ind + "input"}{...obj} />
          }

        })
      }
      <div><button>Submit</button></div>
      

    </>
  )
}

export default Question