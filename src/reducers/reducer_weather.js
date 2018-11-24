  import {FETCH_WEATHER} from  '../actions/index';

  export default function(state=[], action){
    switch(action.type){
      case FETCH_WEATHER:
         return state.concat([action.payload.data]);
         // return [action.payload.data, ...state] - an identical ES6 syntax of the above line

    }
        return state;
  }
