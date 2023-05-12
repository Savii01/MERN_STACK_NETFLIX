import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'
import Featured from '../../Components/Featured/Featured'
import List from '../../Components/List/List'
import Navbar from '../../Components/Navbar/Navbar'
import './home.scss'

const Home = ({type}) => {
  const[lists, setLists] = useState([]);
  const[genre, setGenre] = useState(null);


  useEffect(()=>{
    const getRandomLists = async()=>{
      try{
        const res = await axios.get(
          `list${type ? '?type=' + type : ''}${ genre ? '&genre=' + genre : ''}`, {
          headers : {
            token : 
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmVjMjZjZGQ1NjljOWY5NWJhNzdhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTM4NjMyMywiZXhwIjoxNjY1ODE4MzIzfQ.U-2EqahCrp2eEAqjudgFXsWTf6nodbZb1hX6iB1gVn8"
          }
        })
        // console.log(res.data)
        setLists(res.data);
      }catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  },[type, genre])
  return (
    <div className='home'>
      <Navbar/>
      <Featured type= {type}/>
      {lists.map((list)=>(
        <List list={list}/>
      ))}
     
    </div>
  )
}

export default Home

