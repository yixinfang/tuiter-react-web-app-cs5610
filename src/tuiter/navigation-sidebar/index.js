import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const cnt = paths.length;
    const active = paths[cnt-1];
    // const active = paths[2];
    // console.log(cnt, active)

    return (
        <div className="list-group">

            <Link to={"/"} className={`list-group-item`}>
                <div className="d-none d-xl-block"><i className="bi bi-twitter wd-icon-width  mt-1"></i> Tuiter</div>
                <div className={"d-xl-none"}><i className="bi bi-twitter wd-icon-width  mt-1"></i></div>
            </Link>

            <Link to="/tuiter/home" className={`list-group-item ${(active === 'home') || (active === 'tuiter') ?'active':''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-house-fill wd-icon-width  mt-1"></i> Home</div>
                <div className={"d-xl-none"}><i className="bi bi-house-fill wd-icon-width  mt-1"></i></div>
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <div className="d-none d-xl-block"><i className="bi bi-hash wd-icon-width  mt-1"></i> Explore</div>
                <div className={"d-xl-none"}><i className="bi bi-hash wd-icon-width  mt-1"></i></div>
            </Link>

            <Link to={"/"} className="list-group-item">
                <div className="d-none d-xl-block"><i className="bi bi-tags-fill wd-icon-width  mt-1"></i> Labs</div>
                <div className={"d-xl-none"}><i className="bi bi-tags-fill wd-icon-width  mt-1"></i></div>
            </Link>

            <Link to={"/"} className={`list-group-item ${active === "Notifications".toLowerCase() ? "active" : ""}`} >
                <div className="d-none d-xl-block"><i className="bi bi-bell-fill wd-icon-width  mt-1"></i> Notifications</div>
                <div className={"d-xl-none"}><i className="bi bi-bell-fill wd-icon-width  mt-1"></i></div>
            </Link>

            <Link to={"/"} className={`list-group-item ${active === "Messages".toLowerCase() ? "active" : ""}`} >
                <div className="d-none d-xl-block"><i className="bi bi-envelope-fill wd-icon-width  mt-1"></i> Messages</div>
                <div className={"d-xl-none"}><i className="bi bi-envelope-fill wd-icon-width  mt-1"></i></div>
            </Link>

            <Link to={"/"} className={`list-group-item ${active === "Bookmarks".toLowerCase() ? "active" : ""}`} >
                <div className="d-none d-xl-block"><i className="bi bi-bookmark-fill wd-icon-width  mt-1"></i> Bookmarks</div>
                <div className={"d-xl-none"}><i className="bi bi-bookmark-fill wd-icon-width  mt-1"></i></div>
            </Link>

            <Link to={"/"} className={`list-group-item ${active === "Lists".toLowerCase() ? "active" : ""}`} >
                <div className="d-none d-xl-block"><i className="bi bi-list-ul wd-icon-width  mt-1"></i> Lists</div>
                <div className={"d-xl-none"}><i className="bi bi-list-ul wd-icon-width  mt-1"></i></div>
            </Link>

            <Link to={"/tuiter/profile"} className={`list-group-item ${(active === "Profile".toLowerCase()) || (active === "edit-profile".toLowerCase()) ? "active" : ""}`} >
                <div className="d-none d-xl-block"><i className="bi bi-person-fill wd-icon-width  mt-1"></i> Profile</div>
                <div className={"d-xl-none"}><i className="bi bi-person-fill wd-icon-width  mt-1"></i></div>
            </Link>

            {/*<a className={`list-group-item*/}
            {/*        ${active === 'more'?'active':''}`} href={"/"}>*/}
            {/*    More*/}
            {/*</a>*/}
            <Link to={"/"} className={`list-group-item ${active === "More".toLowerCase() ? "active" : ""}`} >

                <div className="d-none d-xl-block"><i className="bi bi-filter-circle-fill wd-icon-width  mt-1"></i> More</div>
                <div className={"d-xl-none"}><i className="bi bi-filter-circle-fill wd-icon-width  mt-1"></i></div>

            </Link>
        </div>


    );
};
export default NavigationSidebar;