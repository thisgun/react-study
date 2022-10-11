import React, { useState, useEffect } from "react";
import parse, { domToReact } from "html-react-parser";
import { Link, useNavigate } from "react-router-dom";
import "./home.scss";

import UserSideview from "../../components/layouts/UserSideview";

import axios from "axios";

const Home = () => {
  const [latests, setlatests] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch_latests = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 latests 를 초기화하고
        setError(null);
        setlatests(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(`/api/main/`);
        setlatests(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetch_latests();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!latests) return null;

  return (
    <div>
      <div className="conle_idx_top">
        {Object.entries(latests).map((board, idx) => (
          <div className="conle_lt" key={board[1].id}>
            <div className="lt_basic">
              <h2>
                <Link to={`/board/${board[1].id}`} className="lt_title">
                  <strong>{board[1].bo_subject}</strong>
                </Link>
              </h2>
              <ul>
                {board[1].latest.map((post) => (
                  <li>
                    {post.icon_secret && (
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    )}
                    <Link to={`/post/${post.id}`} className="lt_tit">
                      {post.subject}
                      {post.icon_new && <span className="new_icon">N</span>}
                      {post.icon_file && (
                        <i className="fa fa-download" aria-hidden="true"></i>
                      )}
                      {post.icon_link && (
                        <i className="fa fa-link" aria-hidden="true"></i>
                      )}
                      {post.icon_hot && (
                        <i className="fa fa-heart" aria-hidden="true"></i>
                      )}
                      <span className="lt_writer">
                        <UserSideview datas={post.sideview_data} />
                      </span>
                    </Link>

                    <span className="lt_date">
                      <i className="far fa-clock"></i> {post.datetime2}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
