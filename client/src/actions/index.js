import axios from "axios";
export const SHOW_PHONES = "SHOW_PHONES";
export const MORE_DETAILS = "MORE_DETAILS ";

export function showPhones() {
  return (dispatch, getState) => {
    axios.get("/api/phones").then(response => {
      dispatch({ type: SHOW_PHONES, payload: response.data });
    });
  };
}

export function moreDetails(event) {
  return (dispatch, getState) => {
    const selectedItem = event.currentTarget.remove("hidden");
    dispatch({ type: MORE_DETAILS, payload: selectedItem });
  };
}
