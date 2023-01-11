import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import SingleChampion from './SingleChampion'

const ChampionList = () => {
    const [champions,setChampions] = useState({})
const fetchChampions = async() =>{
    const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
    setChampions(response.data.data)
}
useEffect(()=>{
    fetchChampions()
},[])
  return (
    Object.keys(champions).map((x,idx)=>(
        <div>
            <h1><SingleChampion/>{x}</h1>
        </div>
    ))
    
)}

export default ChampionList