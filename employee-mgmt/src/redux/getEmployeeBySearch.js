import {FETCH_TICKET_BY_SEARCH} from "./types"

export default function(state = [], action) {
    switch (action.type) {
      case FETCH_TICKET_BY_SEARCH:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
  } 