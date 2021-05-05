import React from 'react';
import './styles.css';
import moment from 'moment';
import momentPTBR from 'moment/locale/pt-br';

import { Button } from 'semantic-ui-react';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function weather({weatherData}) {

  moment.locale('pt', momentPTBR);
  
  const WeatherIcon = styled.div`
  color: whitesmoke;
`;

  const refresh = () => {
    window.location.reload();
  }


  let weatherIcon = null;

  if (weatherData.weather[0].main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (weatherData.weather[0].main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (weatherData.weather[0].main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (weatherData.weather[0].main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (weatherData.weather[0].main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (weatherData.weather[0].main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    
    <div className="main">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">  
        <p className="day">{moment().format("DD/MM/yyyy HH:mm:ss") } </p>
        <div className="flex" style={{flexDirection:'column'}}>

          <div className="main-weather">
            <WeatherIcon style={{fontSize:30,marginTop:15, marginLeft:100}}>{weatherIcon}</WeatherIcon>
            
          </div>
        
          <p className="temp">Umidade: {weatherData.main.humidity} %</p>
        </div>
      </div>

      <div className="flex" style={{flexDirection:'column',alignItems:"flex-start", justifyContent:"flex-start", marginTop:-70}}>
        <p className="temp">Temperatura: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Máxima: {weatherData.main.temp_max} &deg;C</p>
        <p className="temp" style={{marginBottom:10}}>Mínima: {weatherData.main.temp_min} &deg;C</p>
    
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Nascer do Sol: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('pt-BR')}</p>
        <p className="sunrise-sunset">Pôr do Sol: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('pt-BR')}</p>
      </div>
    
  </div>
  )
}