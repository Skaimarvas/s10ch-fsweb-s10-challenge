import axios from "axios";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const GET_DATA_FROM_LS = "GET_DATA_FROM_LS";

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}

export function notSil(notId) {
  return { type: NOT_SIL, payload: notId };
}

export const getDataLS = () => {
  return { type: GET_DATA_FROM_LS };
};

//redux thunk action
export const notEkleAPI =
  (yeniNot) =>
  //redux thunk function
  (dispatch) => {
    axios
      .post("https://httpbin.org/anything", yeniNot)
      .then((res) => {
        if (res.status === 200) {
          dispatch(notEkle(yeniNot));
        }
      })
      .catch((error) => console.log(error));
  };

export const notSilAPI = (id) => (dispatch) => {
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch(notSil(id));
      }
    })
    .catch((error) => console.log(error));
};
