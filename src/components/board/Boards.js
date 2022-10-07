import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../redux/actions/boards";

import "./Board.css";

import BoardCard from "./BoardCard";

export default function Boards() {
  const dispatch = useDispatch();
  const { boards, is_loading } = useSelector(state => state.boards);

  const { id } = useParams();
    
  useEffect(() => {
    dispatch(getBoards(id));

    console.log("aaa" + id );

  }, []);

console.log(boards);

  if (!boards || boards.length === 0)
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
        <p className="text-3xl text-center text-gray-700">
          오류가 일어났습니다.
        </p>
      </div>
    );

    return (
    <>
        <div id="bo_list">
            <div className="bo_list_innr">
                <BoardCard boards={boards} quickview={true} />
            </div>
        </div>
    </>
    );

}