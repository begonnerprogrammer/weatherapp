import React, { useEffect, useState } from 'react'

const Weathercard = ({  temp,
  name,
  main,
  speed,
  country,
  sunset,
  humidity,
  pressure,}) => {
  const [weatheratate,setWeatherstate]=useState("");
   

    let sec=sunset;
    let data=new Date(sec*1000);
    var timestr=`${data.getHours()}:${data.getMinutes()}`


useEffect(()=>{
  if(main){
    switch(main){
          case "Clouds":setWeatherstate("wi wi-day-cloudy")
          break;
          case "Haze":setWeatherstate("wi wi-day-fog")
          break;
          case "Clear":setWeatherstate("wi wi-day-sunny")
          break;
          case "Rain":setWeatherstate("wi wi-day-rain")
          break;
          default :setWeatherstate("wi wi-day-sunny");
          break;

    }
  }
},[main])


  return (
    <>
       {/* temp card */}
       <article className='widget'>
            <div className="weatherIcon">
                <i className={`wi ${weatheratate}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className="temperature">
                    <span> {temp}&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">
                       {main}
                    </div>
                    <div className="place">
                       {name}
                    </div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>

            {/* Column Section */}
            <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
             <br />
                {timestr} PM
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
              {humidity}<br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
               {pressure}<br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
              {speed}<br />
                Speed
              </p>
            </div>
          </div>
        </div>


        </article>
      
    </>
  )
}

export default Weathercard
