//TODO HECHO X MI
//TODO HECHO X MI
//TODO HECHO X MI

export const GET_COUNTRY = "GET_COUNTRY"
export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY"
export const REMOVE_COUNTRY = "REMOVE_COUNTRY"



  export  function getCountry(name) {
    return function(dispatch) {
      return fetch("https://covid-19-data.p.rapidapi.com/country?name=" + name,{
      "method": "GET",
      "headers": {
          "x-rapidapi-key": "0d28bef09bmshad0a1b23680b9e7p1c1e81jsn53ba0677b91f",
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
      }
      })
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_COUNTRY, payload: json });
         
        });
    };
  }

  export function getAllCountry() {
    return function(dispatch) {
     return  fetch("https://covid-19-data.p.rapidapi.com/country/all", {
      "method": "GET",
      "headers": {
          "x-rapidapi-key": "0d28bef09bmshad0a1b23680b9e7p1c1e81jsn53ba0677b91f",
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
      }
      })
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_ALL_COUNTRY, payload: json });
         
        });
    };
  }

  export   function removeCountry(payload) {
    return { type: REMOVE_COUNTRY, payload };
  }