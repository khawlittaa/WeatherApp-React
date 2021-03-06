import React, { Component } from 'react';

class CurrentDay extends Component
{
  getWeekday(date)
   {
    const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = date.getDay();
    return dayNames[weekday];
  }
    render() {
       // const index = params[0];
        const city = this.props.city;
        const day = this.props.day;
        const w = day.weather[0];
        const date = new Date(day.dt * 1000);
        const weekday = this.getWeekday(date);
        return  ( 
        <div className="current-day">
            <h1 className="day-header">{weekday} in {city.name}</h1>
            <div className="weather">
            <p> 
            <img src='http://openweathermap.org/img/w/{w.icon}.png' alt=''/>
            {w.description}
            </p>
            
          </div>
          <div className="details flex-parent">
            <div className="temperature-breakdown">
              <p>Morning Temperature: {day.temp.morn}&deg;C</p>
              <p>Day Temperature: {day.temp.day}&deg;C</p>
              <p>Evening Temperature: {day.temp.eve}&deg;C</p>
              <p>Night Temperature: {day.temp.night}&deg;C</p>
            </div>
            <div className="misc-details">
              <p>Atmospheric Pressure: {day.pressure} hPa</p>
              <p>Humidity: {day.humidity}%</p>
              <p>Wind Speed: {day.speed} Kmph</p>
            </div>
          </div>
        </div>
        );
       // this.currentDay.innerHTML = dayHTML;
      }
    
}

export default CurrentDay