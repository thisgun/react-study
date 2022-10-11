import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Board.css";

import { Disclosure } from "@headlessui/react";
import {
  HeartIcon,
  MinusSmIcon,
  PlusSmIcon,
  BookmarkIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
} from "@heroicons/react/outline";

import { getDetailPost, likePost, savePost } from "../../redux/actions/boards";

import PostDelete from "./PostDelete";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PostDetail() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const { post_detail } = useSelector((state) => state.boards);

  const { post_id } = useParams();

  useEffect(() => {
    dispatch(getDetailPost(post_id));
  }, []);

  if (!post_detail || post_detail.length === 0)
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
        <p className="text-3xl text-center text-gray-700">
          해당 게시물이 없습니다.
        </p>
      </div>
    );

  /*
  const procedures = JSON.parse(post_detail.procedure);
  const ingredients = JSON.parse(post_detail.ingredients);

  const post = {
    details: [
      {
        name: "Ingredients",
        items: ingredients,
      },
      {
        name: "Procedures",
        items: procedures,
      },
    ],
  };
    */

  return (
    <>
      <article id="bo_v">
        <div className="bo_v_innr">
          <header className="bo_top_hd">
            <h2 id="bo_v_title">
              {post_detail.ca_name && (
                <span className="bo_v_cate">{post_detail.ca_name}</span>
              )}
              <span className="bo_v_tit">{post_detail.subject}</span>
            </h2>
            <div id="bo_v_info">
              <h2>페이지 정보</h2>
              <div className="profile_info">
                <div className="profile_img">프로필이미지는 나중에</div>
                <span className="sound_only">작성자</span>
                <span
                  dangerouslySetInnerHTML={{ __html: post_detail.name }}
                ></span>
                <span className="ip">아이피도 나중에</span>
                <span className="sound_only">조회</span>
                <strong>
                  <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                  {post_detail.hit}회
                </strong>
                <span className="sound_only">작성일</span>
                <span>
                  <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                  {post_detail.wr_datetime}
                </span>
                <a href="#bo_vc" className="bo_vc_btn">
                  <span className="sound_only">댓글</span>
                  <i className="far fa-comment-dots"></i>{" "}
                  {post_detail.wr_comment}
                </a>
              </div>
            </div>
          </header>

          <section id="bo_v_atc">
            <h2 id="bo_v_atc_title">본문</h2>

            <div id="bo_v_con">{post_detail.content}</div>
          </section>
        </div>
      </article>
    </>
  );
}
