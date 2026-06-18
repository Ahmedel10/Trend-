import React from 'react'
import Auth from '../assets/Side Image (10).png'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Login({savelogindata}) {
let navigate=useNavigate();

async function AuthApi(values) {
  let {data}=await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,values)
  console.log(data);
  localStorage.setItem("token",data.token)
  savelogindata()
  toast.success("Welcome To Home",{position:"top-right"})
  navigate("/home")
  
}

  let validationSchema=Yup.object({
    email:Yup.string().email("Email Invaild").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/,"Password Should Start With Capital").required("Password is required")
  })

  let formilAuth=useFormik({
initialValues:{
  email:"",
    password:"",
},
validationSchema:validationSchema,
onSubmit:(value)=>AuthApi(value)

  })
  return <>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
<img src={Auth} className='w-100 mt-5 mb-5' alt="" />
      </div>
      <div className="col-md-6 mt-5">
<h3 className='text-center text-white py-2 mb-3 auth'>Login</h3>
<form onSubmit={formilAuth.handleSubmit}>
  <div className="form-group">
    <label htmlFor="Email" className='mb-2 h5 notfound color'>Email</label>
    <input className='form-control trend bord' id='Email'
     type="email" name='email' placeholder='Email'
     value={formilAuth.values.email}
     onChange={formilAuth.handleChange}
     onBlur={formilAuth.handleBlur}
     />
     {formilAuth.errors.email&&formilAuth.touched.email?<div className='alert alert-danger'>{formilAuth.errors.email}</div>:""}
  </div>
  <div className="form-group">
    <label htmlFor="Password" className='mb-2 h5 notfound mt-2 color'>Password</label>
    <input className='form-control trend bord' id='Password'
     type="password" name='password' placeholder='Password'
     value={formilAuth.values.password}
     onChange={formilAuth.handleChange}
     onBlur={formilAuth.handleBlur}
     />
          {formilAuth.errors.password&&formilAuth.touched.password?<div className='alert alert-danger'>{formilAuth.errors.password}</div>:""}

  </div>

<div className=" d-flex justify-content-center mt-3">
<button type='submit' className=' border border-none p-2 px-4 rounded rounded-2 auth text-white '>Login</button>
</div>
</form>
      </div>
    </div>
  </div>
  
  </>
}

