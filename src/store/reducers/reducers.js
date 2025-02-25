import {
  NOT_EKLE,
  NOT_SIL,
  GET_DATA_FROM_LS,
  DEL_ALL_DATA,
} from "../actions/actions";
import { toast } from "react-toastify";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

export const reducer = (state = baslangicDegerleri, action) => {
  switch (action.type) {
    case NOT_EKLE:
      const addNote = {
        ...state,
        notlar: !state.notlar.includes(action.payload)
          ? [...state.notlar, action.payload]
          : state.notlar,
      };
      localStorageStateYaz(s10chLocalStorageKey, addNote);
      toast.info("Halelujah! Not Eklendi!");
      return addNote;

    case NOT_SIL:
      const delNote = {
        ...state,
        notlar: state.notlar.filter((not) => not.id !== action.payload),
      };
      toast.warn("Destur! Not Silindi");
      localStorageStateYaz(s10chLocalStorageKey, delNote);

      return delNote;

    case GET_DATA_FROM_LS:
      const getData = baslangicNotlariniGetir(s10chLocalStorageKey);
      toast("Sayfa Yüklendi");
      return getData;

    case DEL_ALL_DATA:
      const emptyData = { ...state, notlar: [] };
      localStorage.removeItem(s10chLocalStorageKey);
      toast.error("Tüm Data Silindi");
      return emptyData;

    default:
      return state;
  }
};
