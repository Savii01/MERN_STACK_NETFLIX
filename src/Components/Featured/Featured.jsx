import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './Featured.scss'

const Featured = ({type}) => {
  return (
    <div className='featured'>
 
        <img className='banner' src="https://image.tmdb.org/t/p/original//jsoz1HlxczSuTx0mDl2h0lxy36l.jpg" alt="" />
            <div className="info">
                <h1>THOR:Love and Thunder</h1>
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Repellendus eligendi non, qui ad quae velit quas maiores, commodi, 
                    modi repudiandae minima cumque quo perspiciatis 
                    delectus debitis consectetur? Veniam, aliquam iste!
                </span>
               
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
                 {type && (
            <div className="categories">
                <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                <select name="genre" id="genre" className='select'>
                    <option>Genre</option>
                    <option value='adventure'>Adventure</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='historical'>Historical</option>
                    <option value='horror'>Horror</option>
                    <option value='romance'>Romance</option>
                    <option value='sci-fi'>Sci-fi</option>
                    <option value='thriller'>Thriller</option>
                    <option value='animation'>Animation</option>
                    <option value='drama'>Drama</option>
                    <option value='documentation'>Documentation</option>
                   
                </select>
            </div>
        )}
            <div className="banner--fadebottom"></div>
        </div>
  )
}

export default Featured
