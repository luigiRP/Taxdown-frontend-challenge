import React, {Fragment, useContext} from 'react';
import inputFields from '../inputs.json'
import {inputContext} from '../context'
import { Link } from "react-router-dom";

export default function Form() {

  const [contextInputs,setInputs] = useContext(inputContext)  

  const inputs = inputFields.inputFields.map(function(input,index) {
    return (
      <div className="form-group" key={index}>
        <label>{input.label}</label>
        <input className="form-control" {...input} />
      </div>
    )
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let submission={}
    let key = ""
    let form=document.querySelector("#form").elements
    for (let i=0; i<form.length; i++) {
      key=form[i].id.charAt(0).toUpperCase() + form[i].id.slice(1)
      submission[key]=form[i].value
    }
    setInputs([...contextInputs, submission]);
    alert("Submitted!")
  }
  return (
    <Fragment>
    <div className="container">
      <div className="row bg-primary rounded text-white justify-content-center my-5">
        <h2>Taxdown Frontend Challenge!</h2>
      </div>
    </div>
    <form className="container" id="form">
      {inputs}
    </form>
    <div className="d-flex justify-content-center">
    <button className="btn btn-success" onClick={(e)=> handleSubmit(e)}>submit</button>
    <Link to="/submits" className="btn btn-primary ml-3">Check Submissions</Link>
    </div>
    
    </Fragment>
  );
}

