import React from 'react'
import './WatchPage.scss'
import {ArrowBackOutlined} from '@material-ui/icons'
import { useLocation } from 'react-router-dom'


export default function WatchPage () {
  const location = useLocation();
  
  console.log(location);

  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
       <video
            src= {''}
            className="video"
            autoPlay = {true}  progress = "true" controls
        /> 

    </div>
  )
}
