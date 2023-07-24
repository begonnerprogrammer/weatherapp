import React, { useEffect, useState } from 'react'
import Weathercard from "./weathercard"
export const Temp = () => {
const [tempinfo,settempinfo]=useState({})
const [serachvalue,setSearchvalue]=useState("pune");
const getApi=async()=>{
try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${serachvalue}&units=metric&appid=d1a98a54273f7339a699f4c2be749eae`;
const res= await fetch(url);
const data=await res.json();
const {temp,humidity,pressure}=data.main;
const {name}=data;
const {speed}=data.wind;
const {country,sunset}=data.sys;
const {main}=data.weather[0];
const weatherinfo={
  temp,
  name,
  speed,
  country,
  sunset,
  humidity,
  pressure,
 main
}
settempinfo(weatherinfo);
}
catch(e){
console.log(e)
}
};
useEffect(()=>{
getApi();
},[])
 
    return <>
        <div className='wrap'>
            <div className="search">
                <input type="search" placeholder='Search'
                    autoFocus id='search' className='searchTerm'  value={serachvalue} onChange={(e)=>setSearchvalue(e.target.value)}/>
                <button className='searchButton' type='button' onClick={getApi}>Search</button>
            </div>
        </div>
       


       <Weathercard {...tempinfo}/>
    </>

}

export default Temp;
