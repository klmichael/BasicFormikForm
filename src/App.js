/* This is an assignment from week 13 of bootcamp - part of our introduction to React and forms, including forms using Formik. We were given the starter files and asked to complete three tasks in this file, App.js:
  TODO: import useFormik from formik library
  TODO: add a const called formik assigned to useFormik() to App()
  TODO: build the form

  The assignment specified the required fileds, validation rules and details.

  I utilised the email format validation string from https://formik.org/docs/overview in my code.

  I learned how to check if a variable element is currently visible in the DOM from https://stackoverflow.com/questions/5629684/how-can-i-check-if-an-element-exists-in-the-visible-dom/16820058#16820058
*/
import React from 'react';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      emailField:'',
      pswField:''
    },
    onSubmit: values => {
      if (document.contains(document.getElementById("emailError")) === false && document.contains(document.getElementById("pswError")) === false ){
        alert("Login Successful!");
      }
        console.log(values);
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) errors.emailError = "Field required";
      else if(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField)
      ) {
        errors.emailError="Username should be an email"
      }
      if(!values.pswField) errors.pswError = "Field required";
      
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email/Username</div>
        <input
          id="emailField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {
          formik.errors.emailError ?
          <div id="emailError" style={{ color: 'red'}}>{formik.errors.emailError}</div>:
          null
        }
        <div>Password</div>
        <input
          id="pswField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {
          formik.errors.pswError ?
          <div id="pswError" style={{ color: 'red'}}>{formik.errors.pswError}</div>:
          null
        }
        <br/>
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;