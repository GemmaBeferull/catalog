import { combineReducers } from "redux";
import { showPhones } from "./phones";
import { moreDetails } from "./moredetails";

const rootReducer = combineReducers({
  phone: showPhones,
  hide: moreDetails
});
export default rootReducer;
