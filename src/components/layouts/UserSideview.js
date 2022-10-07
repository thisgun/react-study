import { useState } from "react";

export default function UserSideview({ datas, name }) {

  return (
    <>
    {(datas && datas.name) ? (
        <span className="sv_wrap">
            <a href="#" className="sv_member" title={datas.name + " 자기소개"} target="_blank" rel="nofollow"><span className="profile_img"><img src={datas.absolute_user_icon_url} alt="" /></span> {datas.name}</a>
            <span className="sv">
            {datas.memo_url &&
            <a href={datas.memo_url}>쪽지보내기</a>
            }
            {datas.profile_url &&
            <a href={datas.profile_url}>자기소개</a>
            }
            {datas.user_posts_url &&
            <a href={datas.user_posts_url}>전체게시물</a>
            }
            </span>
        </span>
        ) : (
        <span className="bo_guest" dangerouslySetInnerHTML={{__html: name}}></span>
    )}
    </>
  );
}
