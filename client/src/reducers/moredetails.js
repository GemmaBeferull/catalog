import { MORE_DETAILS } from "../actions";

const initialState = {
  hidden: true
};

export function moreDetails(state = initialState, action) {
  switch (action.type) {
    case MORE_DETAILS:
      return Object.assign({}, state, { hidden: action.payload });
    default:
      return state;
  }
}
