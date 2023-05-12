import React, { useState } from 'react'
import './List.scss'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons'
import ListItem from '../ListItem/ListItem'
import { useRef } from 'react'

export default function List ({list}) {
  const[slideNumber, setSlideNumber] = useState(0)
  const[isMoved, setIsMoved] = useState(false)
  const listRef = useRef()
  
  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x -50
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber -1)
      listRef.current.style.transform = `translateX(${220 + distance}px)`
    }
    if(direction === "right" && slideNumber < 5){
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-190 + distance}px)`
    }
    console.log(distance)
  }
  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
          <ArrowBackIosOutlined className='sliderArrow left' onClick = {()=>handleClick("left")} style = {{display: !isMoved && 'none'}} />
          <div className="movie-container"ref ={listRef}>
            { list.content.map((item, i) =>(
              <ListItem index ={i} item={item}/>
                ))}
          </div>
          <ArrowForwardIosOutlined className='sliderArrow right' onClick = {()=>handleClick("right")} />
        </div>
    </div>
  )
}


