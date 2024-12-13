import React, { Fragment } from 'react';

export const Input = (props) => {
  const { type, name,lbl, radioFields,fnChange,required,errorMsg } = props;

  const fnGetInputControl = () => {
    switch (type) {
      case "input":
        return <input onChange={fnChange} className="form-control" type="text" name={name} />;
      case "radio":
        return (
          <Fragment>
            {radioFields.map((field, ind) => (  
              <React.Fragment key={ind}>
                <div className="col-sm-3 text-start">
                  <input onChange={fnChange} type="radio" value={field.value} name={field.name} />
                  <span>{field.lbl}</span>
                </div>
              </React.Fragment>
            ))}
          </Fragment>
        );
      // case "input": // Handle input type
      //   return <input onChange={fnChange} className="form-control" type="text" name={name} />;
      default:
        return <span>Unsupported field type</span>; // Fallback for debugging
    }
  };
  

return (
    <div className='row'>
       <div className='col-sm-5 text-end'>
          <b>{lbl}</b>{required?<span className='text-danger'>*</span>:<></>}
       </div>
       <div className='col-sm-3 text-start'
         >
         {fnGetInputControl()} 
       </div>
        <div className='col-sm-4 text-start'>
          <small>{errorMsg}</small>
        </div>
    </div>
  
  )
};
