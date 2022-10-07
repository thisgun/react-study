import { useState } from "react";
import parse, { domToReact } from 'html-react-parser';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/outline";
import { likePost, savePost } from "../../redux/actions/boards";

import UserSideview from "../layouts/UserSideview";
import QuickView from "./QuickView";

export default function BoardCard({ boards, quickview }) {

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

    let count = boards.count;
    let next = boards.next;
    let previous = boards.previous;
    let board = boards.results.board;
    let posts = boards.results.post;

  return (
    <>
      <form name="fboardlist" id="fboardlist" method="post">
		<input type="hidden" name="bo_table" value={board.bo_table} />
		<input type="hidden" name="sfl" value="" />
		<input type="hidden" name="stx" value="" />
		<input type="hidden" name="spt" value="" />
		<input type="hidden" name="sst" value="" />
		<input type="hidden" name="sod" value="" />
		<input type="hidden" name="page" value="" />
		<input type="hidden" name="sw" value="" />
      </form>

      <div id="bo_li_01" className="list_03">
          <ul>
          {posts.map((post) => (
            <li>
                <Link to={`/post/${post.id}`}>
                <div className="tit cnt_left bo_subject">{post.subject}</div>
                </Link>
                <div className="wri cnt_left bo_info">
                {/*<span className="sound_only">작성자</span><span className="bo_guest" dangerouslySetInnerHTML={{__html: post.name}}></span> */}
                <span className="sound_only">작성자</span><UserSideview datas={post.sideview_data} name={post.name} />
                </div>
                <div className="view cnt_left">
                    <span className="sound_only">조회</span><span className="bo_view"><i className="far fa-eye"></i> {post.wr_hit}</span>
                </div>
                <div className="date cnt_left">
                    <span className="sound_only">날짜</span><span className="bo_date"><i className="far fa-clock"></i> {post.datetime2}</span>
                </div>
            </li>
            ))}
          </ul>
      </div>

      {/* Pagination */}
      {/* <nav
        className="bg-white mt-10 px-4 pt-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">20</span> results
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <a
            href="/"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="/"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>
      </nav> */}
      {open && <QuickView open={open} setOpen={setOpen} id={id} />}
    </>
  );
}
