import logo from './logo.svg';
import React, { useState,useEffect } from 'react'
import './App.css';

function App() {

  const initialValues = {email:"",password:"",term:false};
  const [formValues,setFormValues]= useState(initialValues);
  const [formErrors,setFormErrors]= useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const handleChange = (e) => {
   
    const { target } = e;
    const { name } = target;
    const value = name === 'term' ? target.checked : target.value;
    setFormValues({...formValues,[name]:value})
   
  }


  const onSubmit = async (e) => {
     e.preventDefault()
     setFormErrors(validate(formValues));
     setIsSubmit(true)
     console.log(formValues)
  }


  useEffect(() =>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      
    }
  },[formErrors])
 
  const validate = (values)=>{
    const errors =  {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if(!values.email){
      errors.email = "กรุณากรอกอีเมล"
    }else if(!regex.test(values.email)) {
      errors.email = "กรุณากรอกอีเมลให้ถูกต้อง"
    }
    if(!values.password){
      errors.password = "กรุณากรอกรหัสผ่าน"
    }
    if(values.term === false ){
      errors.term = "กรุณารับเงื่อนไข"
    }


    return errors;
  }

  
  return (
    <div className="container">
    <div className="row mt-4">
      <div className="col-12 col-md-6 offset-md-3">
        <h2 className="my-4 text-center">LOGIN</h2>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formValues.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
            <p className="text-danger">{formErrors.email}</p>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={formValues.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
             <p className="text-danger">{formErrors.password}</p>
          </div>
          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="term"
              onChange={handleChange}
              value={formValues.term}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Accept term and conditions
            </label>
             <p className="text-danger">{formErrors.password}</p>
          
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
