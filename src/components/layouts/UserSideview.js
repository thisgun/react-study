import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserSideview({ datas, name }) {
  return (
    <>
      {datas && datas.name ? (
        <span className="sv_wrap">
          <Link
            to="#"
            className="sv_member"
            title={datas.name + " 자기소개"}
            target="_blank"
            rel="nofollow"
          >
            <span className="profile_img">
              <img src={datas.absolute_user_icon_url} alt="" />
            </span>{" "}
            {datas.name}
          </Link>
          <span className="sv">
            {datas.memo_url && <Link to={datas.memo_url}>쪽지보내기</Link>}
            {datas.profile_url && <Link to={datas.profile_url}>자기소개</Link>}
            {datas.user_posts_url && (
              <Link to={datas.user_posts_url}>전체게시물</Link>
            )}
          </span>
        </span>
      ) : (
        <span
          className="bo_guest"
          dangerouslySetInnerHTML={{ __html: name }}
        ></span>
      )}
    </>
  );
}
