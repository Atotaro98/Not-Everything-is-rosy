import React, {useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {getCountry} from '../../actions/index'
import {removeCountry} from '../../actions/index'
import './searchCountry.css'

 export default function Buscador () {
    const [country, setCountry] = useState('')



    const dispatch = useDispatch()
    const countryName = useSelector(state => state.countryLoaded)



   function handleChange (e){
     setCountry(e.target.value)
    }

  
    function handleSubmit (e) {
        e.preventDefault();
        dispatch( getCountry(country))
       }

       function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }  
   

    return (
            <div className="formulario">
                        
              <form className="form-container">

              <div className="rosy">
                           <h1>Not Everything is rosy</h1>
                       </div>

                <div className="searchbar">
                
                  <input
                    placeholder="Country"
                    type="text"
                    id="country"
                    autoComplete="off"
                    value= {country}
                    onChange={(e) => handleChange(e)}
                  />
                  <button className="buscar" type="submit"  onClick={(e) => handleSubmit(e)}></button>
                  {/* <button className="buscar" onClick={() =>dispatch(getAllCountry(country)) }>GET ALL </button> DONT WORK BECAUSE NEED TO UPGRRADE THE PLAN FOR THIS API https://rapidapi.com/Gramzivi/api/covid-19-data/ */}
                </div>

                <div className="rosy"></div>
                <div className="rosy"></div>         
                       
                       
                           
                      
                
              </form>
              <section className="contenedor"> 
               {  
               countryName && countryName.map(country =>(

                  <div className="country" key={country.code}>
                  
                        <div className="remove-country">
                         
                       <div className="button-remove"  onClick={() =>dispatch(removeCountry(country)) }></div> 
                       </div>
                       
                       <h1 className="title">{country.country}</h1> 
                      
                       <img src={`https://www.countryflags.io/${country.code}/shiny/64.png`}></img>  
                        
                        <div className="stats">
                          
                            <h3 className="confirmed">People Confirmed:  <span className="yellow">{formatNumber (country.confirmed)} </span></h3>
                            <h3 className="recovered">People Recovered:  <span className="green">{formatNumber (country.recovered)} </span></h3>
                            <h3 className="deaths">People Deaths:  <span className="red">{formatNumber (country.deaths)} </span></h3>
                            <h3 className="critical">People in Critical Situation:  <span className="orange">{formatNumber(country.critical)}</span></h3> 
                            
                            
                            
                            
                       </div>
                  </div>
                    
                 ))
               } 
              </section>
            </div>
          );

} ;




