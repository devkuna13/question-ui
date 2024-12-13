 import { fnInputValidation } from "./Validation";

 export const fnOnChange = (eve,inputValues) => {
    const { value, name } = eve.target
   const _inputValues = [...inputValues];

   let input_Obj = _inputValues.find((obj) => obj.name === name);

  //  if (input_Obj) {
  //   console.log("Object keys: ", Object.keys(input_Obj));
  //   console.log("Descriptors: ", Object.getOwnPropertyDescriptors(input_Obj));
  //  } else {
  //    console.warn(`No match found for name: ${name}`);
  //  }
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
      dataObj[obj.name] = obj.value
      if (obj.required) {
        fnInputValidation(obj)
      }
      console.log("dataobject",dataObj)
    })
    const isValid = _inputValues.some((obj) => obj.errorMsg)
    return [isValid,_inputValues,dataObj]
  }