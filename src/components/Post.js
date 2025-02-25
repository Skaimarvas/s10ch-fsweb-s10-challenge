import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { notSil, notSilAPI } from "../store/actions/actions";

export default function Post({ item }) {
  const dispatch = useDispatch();
  function handleSil() {
    dispatch(notSilAPI(item.id));
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-5 rounded"
        onClick={handleSil}
      >
        Bu notu sil
      </button>
    </div>
  );
}
