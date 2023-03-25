import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const tuitLikeHandler = (tuit_id) => {
        dispatch(likeTuit(tuit_id))
    }
    const heartIcon = tuit.liked ? 'bi-heart-fill': 'bi-heart';
    const heartColor = tuit.liked ? "red" : "gray";
    return(
        <div className={"row pt-3 pb-1"} style={{color: "gray"}}>
            <div className="d-sm-none col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-chat"></i></a></div>
            <div className="d-none d-sm-block d-lg-none col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-chat"></i> <span>{tuit.replies}</span></a></div>
            <div className="d-none d-lg-block col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-chat"></i>    <span>{tuit.replies}</span></a></div>

            <div className="d-sm-none col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-arrow-repeat"></i></a></div>
            <div className="d-none d-sm-block d-lg-none col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-arrow-repeat"></i> <span>{tuit.retuits}</span></a></div>
            <div className="d-none d-lg-block col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-arrow-repeat"></i>    <span>{tuit.retuits}</span></a></div>

            {/*<div className="d-sm-none col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-heart"></i></a></div>*/}
            {/*<div className="d-none d-sm-block d-lg-none col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-heart"></i> <span>{tuit.likes}</span></a></div>*/}
            {/*<div className="d-none d-lg-block col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-heart"></i>    <span>{tuit.likes}</span></a></div>*/}
            <div className="d-sm-none col">
                <i id={tuit._id} className={`bi ${heartIcon}`} style={{color: tuit.liked ? "red" : "gray"}} onClick={() => tuitLikeHandler(tuit._id)}></i>
            </div>
            <div className="d-none d-sm-block d-lg-none col">
                <i id={tuit._id} className={`bi ${heartIcon}`} style={{color: tuit.liked ? "red" : "gray"}} onClick={() => tuitLikeHandler(tuit._id)}></i> <span for={tuit._id}>{tuit.likes}</span>
            </div>
            <div className="d-none d-lg-block col">
                <i id={tuit._id} className={`bi ${heartIcon}`} style={{color: tuit.liked ? "red" : "gray"}}  onClick={() => tuitLikeHandler(tuit._id)}></i>    <span for={tuit._id}>{tuit.likes}</span>
            </div>

            <div className="col"><a href={"/"} style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-upload"></i></a></div>

        </div>
    );
};
export default TuitStats;