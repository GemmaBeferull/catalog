import { SHOW_PHONES } from "../actions";

const initialState = {
  list: [],
  spinner: true
};

export function showPhones(state = initialState, action) {
  switch (action.type) {
    case SHOW_PHONES:
      return Object.assign({}, state, {
        list: action.payload,
        spinner: !state.spinner
      });
    default:
      return state;
  }
}
