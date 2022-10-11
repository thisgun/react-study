import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
// import {jwtUtils} from "../../utils/jwtUtils";
// import {setToken} from "../../redux/reducers/AuthReducer";

import { Menu, Popover, Transition } from "@headlessui/react";

import Logout from "../accounts/Logout";
import { loadUser, getAvatar } from "../../redux/actions/user";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  // const token = useSelector(state => state.Auth.token);
  const { token } = useSelector((state) => state.auth);
  const { user, avatar } = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(loadUser());
      dispatch(getAvatar());
    }
  }, [token]);

  console.log(token);

  // const [isAuth, setIsAuth] = useState(false);
  /*
  useEffect(() => {
    if (jwtUtils.isAuth(token)) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [token]);

  const logout = async () => {
    await dispatch(setToken(""));
    alert("로그아웃 되었습니다😎");
    navigate("/");
  };
    */

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <header id="header">
              <h1 id="hd_h1">타이틀</h1>

              <div className="to_content">
                <a href="#container">본문 바로가기</a>
              </div>
              <div id="mobile-indicator"></div>

              <div id="hd_wrapper" className="">
                <div className="gnb_side_btn">
                  <a className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">
                    <i className="fa fa-bars"></i>
                    <span className="sound_only">모바일 전체메뉴</span>
                  </a>
                </div>

                <div id="logo">
                  <Link to="/">로고</Link>
                </div>

                <div className="header_ct">
                  <div className="hd_sch_wr">
                    <button className="hd_sch_bt">
                      <i className="fa fa-search"></i>
                      <span className="sound_only">검색창 열기</span>
                    </button>
                    <fieldset id="hd_sch">
                      <h2>사이트 내 전체검색</h2>
                      <form name="fsearchbox" method="get">
                        <input
                          type="hidden"
                          name="sfl"
                          value="wr_subject||wr_content"
                        />
                        <input type="hidden" name="sop" value="and" />
                        <input
                          type="text"
                          name="stx"
                          id="sch_stx"
                          placeholder="검색어를 입력해주세요"
                          required
                          maxLength="20"
                        />
                        <button type="submit" value="검색" id="sch_submit">
                          <i className="fa fa-search" aria-hidden="true"></i>
                          <span className="sound_only">검색</span>
                        </button>
                        <button type="button" className="sch_more_close">
                          닫기
                        </button>
                      </form>
                    </fieldset>
                  </div>
                  <div id="tnb">
                    {/* Profile dropdown */}
                    {token && (
                      <Menu as="div" className="flex-shrink-0 relative ml-5">
                        <div>
                          <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={
                                avatar && avatar.avatar
                                  ? avatar.avatar
                                  : "https://res.cloudinary.com/dmtc1wlgq/image/upload/v1641911896/media/avatar/default_zrdbiq.png"
                              }
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                            <Menu.Item>
                              <button
                                className="block py-2 px-4 text-sm text-gray-700"
                                onClick={() => setModal(true)}
                              >
                                {" "}
                                로그아웃
                              </button>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )}

                    {!token && (
                      <Link
                        to="/login"
                        className="tnb_login ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200"
                      >
                        로그인
                      </Link>
                    )}

                    {!token && (
                      <Link
                        to="/register"
                        className="tnb_login ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200"
                      >
                        회원가입
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </header>
            <aside id="sidedrawer">
              <div id="gnb">
                <div className="gnb_side">
                  <h2>메인메뉴</h2>
                  <ul className="gnb_1dul"></ul>
                </div>
              </div>
              <ul className="shortcut">
                <li>
                  <Link to="/">
                    <i className="fa fa-question" aria-hidden="true"></i>{" "}
                    자주묻는 질문
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-comments" aria-hidden="true"></i>{" "}
                    1:1문의
                  </Link>
                </li>
                <li className="sc_current">
                  <Link to="/">
                    <i className="fa fa-history" aria-hidden="true"></i> 새글
                  </Link>
                </li>
              </ul>
            </aside>
          </>
        )}
      </Popover>
      {modal && <Logout modal={modal} setModal={setModal} />}
    </>
  );
};

export default Header;
