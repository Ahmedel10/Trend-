import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Tv() {
  const [movie1,setMovie1]=useState([])

 async function MovieApi(){
   let {data}=await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`)
    console.log(data.results);
    setMovie1(data.results)
    
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        MovieApi()
    },[])

  return <>
<div className="container">
  <h1 className='my-5 bg text-center text-white'> Trend Tv</h1>
    <div className="row">
{movie1.map((x)=><div className="col-md-3">
  <Link to={`/dettv/${x.id}`}>   <div className=" position-relative">
      <img src={'https://image.tmdb.org/t/p/w500/'+x.poster_path} className='w-100 rounded rounded-5 borderimg' alt="" />
      <div className="imglayer rounded rounded-5 ">
        <div className="imgInfo">
            <h3>{x.name}</h3>
        </div>
      </div>
      {x.vote_average?<div className='bg p-2 text-white position-absolute top-0 end-0'>{x.vote_average?.toFixed(1)}</div>:""}
  </div>
           
  </Link>
            <h1 className='n'>{x.
name}</h1>
        </div>
 )}
    </div>
       </div>
  </>
}



