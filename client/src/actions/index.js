import axios from "axios";
export function hola() {
  return dispatch =>
    axios
      .get("/api/phones")
      .then(res => res.json())
      .then(mobiles =>
        this.setState({ mobiles }, () =>
          console.log("mobiles fetched...", mobiles)
        )
      );
}
