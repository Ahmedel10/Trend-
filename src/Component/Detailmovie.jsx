import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Detailmovie() {
    const[detailes,setdetailes]=useState({})
let{id}=useParams()

    async function detmo(id) {
        let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`)
        console.log(data);
setdetailes(data)
        
    }
    useEffect(()=>{

   detmo(id)
    },[])
  return <>
  <div className="container">
    <div className="row">
        <div className="col-md-4 my-4">
             <img src={'https://image.tmdb.org/t/p/w500/'+detailes.poster_path} className='w-100 rounded rounded-5 borderimg' alt="" />
        </div>
        <div className="col-md-8 mt-5">
            <h3 className="">TiTle : <span className="color">{detailes.title}</span></h3>
    <p className="py-2 h5">TagLine : <span className="color">{detailes.tagline}</span></p>
    <ul className=" list-unstyled d-flex">{detailes.genres?.map((x)=><div className="p-3 mx-2 rounded rounded-2 bg text-white" key={detailes.id}>{x.name}</div>)}</ul>
    <p className="py-2 h5">Vote_Average : <span className="color">{detailes.vote_average?.toFixed(1)}</span></p>
    <p className="py-2 h5">Vote_Count : <span className="color">{detailes.vote_count?.toFixed(1)}</span></p>
    <p className="py-2 h5">Date : <span className="color">{detailes.release_date}</span></p>
    <p className="py-2 h5">Overview : <span className="color">{detailes.overview}</span></p>
        </div>
    </div>
  </div>
  </>
}
