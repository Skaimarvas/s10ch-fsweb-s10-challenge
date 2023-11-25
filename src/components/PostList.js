import React, { useEffect } from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { delAllData, getDataLS } from "../store/actions/actions";

const PostList = () => {
  const notlar = useSelector((store) => store.notlar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataLS());
  }, []);

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div className="">
      {notlar.toReversed().map((not) => (
        <Post item={not} key={not.id} />
      ))}
      <button
        onClick={() => dispatch(delAllData())}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-5 rounded"
      >
        {" "}
        Tüm Notları Sil{" "}
      </button>
    </div>
  );
};

export default PostList;
