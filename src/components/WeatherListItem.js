import React, { Component } from 'react';

class WeatherListItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedDate: ""
        };
        this.onDayClick = this.onDayClick.bind(this);
        
    }

    onDayClick() 
    { 
        this.props.onDayClick(this.props.index);
    }

    render () 
    {
        const { day } = this.props;
        const date = new Date(day.dt * 1000);
        return (
            //html must be in ()
        <div className="weather-list-item" onClick={this.onDayClick} >
        <h2>{date.getMonth() + 1} / {date.getDate()}</h2>
        <h3>{day.temp.min.toFixed(1)}&deg;C &#124; {day.temp.max.toFixed(1)}&deg;C</h3> 
        </div>
        );
    }
   

}

export default WeatherListItem