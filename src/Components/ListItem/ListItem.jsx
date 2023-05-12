import React from 'react'
import './ListItem.scss'
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from '@material-ui/icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
//import Trailer from '../../images/sonic_the_hedgehog_2_movie_trailer (360p).mp4'


export default function ListItem  ({index, item}) {
  const[isHovered, setIsHovered] = useState(false);
  const[movie, setMovie] = useState({});
  
  useEffect(()=>{
    const getMovies = async () =>{
      try{
        const res = await axios.get( "/movies/find/" + item, {
          headers : {
            token : 
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmVjMjZjZGQ1NjljOWY5NWJhNzdhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTM4NjMyMywiZXhwIjoxNjY1ODE4MzIzfQ.U-2EqahCrp2eEAqjudgFXsWTf6nodbZb1hX6iB1gVn8"
          }
        });
        
        setMovie(res.data);
      }catch(err){
        console.log(err)
      }
    };
    getMovies();
  },[item])
  
  return (
    <Link to = {{ pathname: '/watch', movie: movie.video }} className ='links'>
    <div 
        className='listItem'
        style={{left:isHovered && index * 200 - 50 + index * 10}}
        onMouseEnter = {()=>setIsHovered(true)} 
        onMouseLeave = {()=>setIsHovered(false)}
    >
        <img src={movie.img} alt="" className='rowImage'/>
        {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true}  loop className='video' />
              <div className="itemInfo"> 
                <div className="icons">
                  <PlayArrow className='icon'/>
                  <Add className='icon'/>
                  <ThumbUpAltOutlined className='icon'/>
                  <ThumbDownAltOutlined className='icon'/>
                </div>
                  <div className="itemInfoTop">
                      <span>{movie.duration}</span>
                      <span className='limit'>+ {movie.limit}</span>
                      <span>{movie.year}</span>
                  </div>
                  <div className="desc">
                 {movie.desc}
                  </div>
                  <div className="genre">
                   {movie.genre}
                  </div>
                
              </div>
            </>
          )}
    </div>
</Link>
  )
}

