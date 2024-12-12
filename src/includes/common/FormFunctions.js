 import { fnInputValidation } from "./Validation";

 export const fnOnChange = (eve,inputValues) => {
    const { value, name } = eve.target
    console.log("value:"+value+"----"+"name:"+name)
    const _inputValues = [...inputValues];
    let input_Obj = _inputValues.find((obj) => name === obj.name)
    input_Obj.value = value
    if(input_Obj.required)
    {
      input_Obj=fnInputValidation(input_Obj)
      // setInputValues(_inputValues)
      return _inputValues
    }
  }

  export const formValidate = (inputValues) =>{
    const dataObj = {}
    const _inputValues = [...inputValues]
    _inputValues.forEach((obj) => {
      dataObj.name = obj.value
      if (obj.required) {
        fnInputValidation(obj)
      }
    })
    const isValid = _inputValues.some((obj) => obj.errorMsg)
    return [isValid,_inputValues,dataObj]
  }