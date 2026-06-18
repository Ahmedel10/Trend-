import React, { useEffect, useState } from 'react'
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Component/Layout'
import Home from './Component/Home'
import Tv from './Component/Tv'
import Register from './Component/Register'
import Login from './Component/Login'
import Movie from './Component/Movie'
import Detailmovie from './Component/Detailmovie'
import Detailstv from './Component/Detailstv'
import { Toaster } from 'react-hot-toast'
import {jwtDecode} from 'jwt-decode'


export default function App() {
let[logindata,setlogindata]=useState(null)

function savelogindata() {
  let encoded=localStorage.getItem("token");
  let decoded=jwtDecode(encoded)
  console.log(decoded); 
  setlogindata(decoded)
  
}
useEffect(()=>{
  if (localStorage.getItem("token")) {
  savelogindata()
}

},[] )

  let x= createBrowserRouter([
    {path:"",element:<Layout logindata={logindata}/>,children:[
      {path:"home",element:<Home/>},
      {path:"mo",element:<Movie/>},
      {path:"tv",element:<Tv/>},
      {path:"detmoive/:id",element:<Detailmovie/>},
      {path:"dettv/:id",element:<Detailstv/>},
      {path:"login",element:<Login savelogindata={savelogindata}/>},
{path:"re",element:<Register/>},
{index:true,element:<Login savelogindata={savelogindata}/>},


    ]}
  ])
  return <>
  <Toaster/>
<RouterProvider router={x}></RouterProvider>
  </>
}


