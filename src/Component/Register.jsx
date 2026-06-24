import React from 'react'
import Auth from '../assets/Side Image (10).png'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Register() {

  let navigate=useNavigate();

async function AuthApi(values) {
  try {
    let {data}=await axios.post(
      `https://note-sigma-black.vercel.app/api/v1/users/signUp`,
      values
    )

    toast.success("Welcome To Login",{position:"top-right"})
    navigate("/")

  } catch (error) {
    console.log(error.response.data)
    toast.error(error.response.data.message)
  }
}






  //async function AuthApi(values) {
 // let {data}=await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,values)
 // console.log(data);
  //toast.success("Welcome To Login",{position:"top-right"})
  //navigate("/login")}

  let validationSchema=Yup.object({
    name:Yup.string().min(4,"name should be big that 4").max(15,"name should be less that 15").required("Name is required"),
    email:Yup.string().email("Email Invaild").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/,"Password must start with a capital letter and contain 6-9 characters and no special character").required("Password is required"),
 rePassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm Password is required"),

    age:Yup.number().max(80,"Age should be less that 80").min(18,"Age should be big that 18").required("Age is required "),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Phone is Invaild").required("Phone is Required")

  })

  let formilAuth=useFormik({
initialValues:{
  name:"",
  email:"",
  password:"",
   rePassword:"", 
  age:"",
  phone:"",
},
validationSchema:validationSchema,
onSubmit:(value)=>AuthApi(value)

  })

  return<>
   <div className="container">
      <div className="row">
        <div className="col-md-6">
  <img src={Auth} className='w-100 mt-5 mb-5' alt="" />
        </div>
        <div className="col-md-6 mt-5">
  <h3 className='text-center text-white py-2 mb-3 auth'>Register</h3>
  <form onSubmit={formilAuth.handleSubmit}>
  <div className="form-group">
      <label htmlFor="Name" className='mb-2 h5 notfound color'>Name</label>
      <input className='form-control trend bord' id='Name'
       type="text" name='name' placeholder='Name'
       value={formilAuth.values.name}
       onChange={formilAuth.handleChange}
       onBlur={formilAuth.handleBlur}
       />
       {formilAuth.errors.name&&formilAuth.touched.name?<div className='alert alert-danger'>{formilAuth.errors.name}</div>:""}
    </div>
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

<div className="form-group">
  <label className='mb-2 h5 notfound mt-2 color'>Confirm Password</label>
  <input
    className='form-control trend bord'
    type="password"
    name='rePassword'
    placeholder='Confirm Password'
    value={formilAuth.values.rePassword}
    onChange={formilAuth.handleChange}
    onBlur={formilAuth.handleBlur}
  />
  {formilAuth.errors.rePassword && formilAuth.touched.rePassword ?
    <div className='alert alert-danger'>{formilAuth.errors.rePassword}</div>
  : ""}
</div>


    <div className="form-group">
      <label htmlFor="Age" className='mb-2 h5 notfound mt-2 color'>Age</label>
      <input className='form-control trend bord' id='Age'
       type="number" name='age' placeholder='Age'
       value={formilAuth.values.age}
       onChange={formilAuth.handleChange}
       onBlur={formilAuth.handleBlur}
       />
            {formilAuth.errors.age&&formilAuth.touched.age?<div className='alert alert-danger'>{formilAuth.errors.age}</div>:""}
  
    </div>

    <div className="form-group">
      <label htmlFor="Phone" className='mb-2 h5 notfound mt-2 color'>Phone</label>
      <input className='form-control trend bord' id='Phone'
       type="tel" name='phone' placeholder='phone'
       value={formilAuth.values.phone}
       onChange={formilAuth.handleChange}
       onBlur={formilAuth.handleBlur}
       />
            {formilAuth.errors.phone&&formilAuth.touched.phone?<div className='alert alert-danger'>{formilAuth.errors.phone}</div>:""}
  
    </div>
  
  <div className=" d-flex justify-content-center mt-3">
  <button type='submit' className=' border border-none p-2 px-4 rounded rounded-2 auth text-white '>Register</button>
  </div>
  </form>
        </div>
      </div>
    </div>
  
  </>
}

