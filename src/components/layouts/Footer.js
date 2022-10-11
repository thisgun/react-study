import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Header(props) {
  return (
    <footer id="footer">
      <div id="ft_copy">
        <div id="ft_company">
          <Link to="#">회사소개</Link>
          <Link to="#">개인정보처리방침</Link>
          <Link to="#">서비스이용약관</Link>
        </div>
        Copyright &copy; <b>소유하신 도메인.</b> All rights reserved.
        <br />
      </div>
      <button type="button" id="top_btn">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
        <span className="sound_only">상단으로</span>
      </button>
    </footer>
  );
}
