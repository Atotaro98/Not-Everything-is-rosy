import  {GET_COUNTRY, GET_ALL_COUNTRY, REMOVE_COUNTRY} from '../actions/index'

//TODO HECHO X MI
//TODO HECHO X MI
//TODO HECHO X MI
//TODO HECHO X MI

const initialState = {

    countryLoaded: [],
  };


  function rootReducer(state = initialState, action) {
   
    if (action.type === GET_COUNTRY) {
        return {
          ...state,
          countryLoaded: state.countryLoaded.concat(action.payload)
        };
    }

    if (action.type === REMOVE_COUNTRY) {
      return {
        ...state,
        countryLoaded: state.countryLoaded.filter(country => country !== action.payload)
      }
  }

  if (action.type === GET_ALL_COUNTRY) {
    return {
      countryLoaded: action.payload
    }
}
    return state;
  }
  
  export default rootReducer;