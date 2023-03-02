import React from "react";
import {Link} from "react-router-dom";

const PostItem = ({fullPost}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <div className="float-start">
                        <img className="img-fluid" alt="show" src={`/images/${fullPost.avatarIcon}`}/>
                    </div>
                </div>
                <div className="col-9">
                    <div className="float-start">
                        <div><span className="fw-bold">{fullPost.userName}</span><span><i className="bi bi-patch-check-fill" style={{color: "skyblue"}}></i> </span>  <span style={{color: "gray"}}>@{fullPost.handle}・{fullPost.time}</span></div>

                        <div>{fullPost.contentPost}</div>
                    </div>

                </div>
                <div className="col-1">
                    <div className="float-end"><a href="https://www.northeastern.edu/"><i className="bi bi-three-dots" style={{color:"gray"}}></i></a></div>
                </div>

            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <div className="float-end">
                        <div className="list-group">
                            <div className="list-group-item pt-0 pb-0 ps-0 pe-0">
                                <img className="img-fluid" style={{"border-radius":8}} alt="show"src={`/images/${fullPost.imagePost}`}/>
                            </div>
                            <div className={`list-group-item ${fullPost.sub ? '' : 'd-none'}`} >
                                <div className="fw-bold">{fullPost.subTitle}</div>
                                <div style={{color: "gray"}}>{fullPost.subContent}</div>
                                <div style={{color: "gray"}}><i className="bi bi-link-45deg"></i>{fullPost.outlink}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3 pb-1" style={{color: "gray"}}>
                        <div className="d-sm-none col"><a href="/#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-chat"></i></a></div>
                        <div className="d-none d-sm-block d-lg-none col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-chat"></i> <span>{fullPost.commentNumber}</span></a></div>
                        <div className="d-none d-lg-block col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-chat"></i>    <span>{fullPost.commentNumber}</span></a></div>

                        <div className="d-sm-none col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-arrow-repeat"></i></a></div>
                        <div className="d-none d-sm-block d-lg-none col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-arrow-repeat"></i> <span>{fullPost.retweetNumber}</span></a></div>
                        <div className="d-none d-lg-block col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-arrow-repeat"></i>    <span>{fullPost.retweetNumber}</span></a></div>

                        <div className="d-sm-none col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-heart"></i></a></div>
                        <div className="d-none d-sm-block d-lg-none col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-heart"></i> <span>{fullPost.likeNumber}</span></a></div>
                        <div className="d-none d-lg-block col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-heart"></i>    <span>{fullPost.likeNumber}</span></a></div>

                        <div className="col"><a href="#" style={{"text-decoration": "none", color: "gray"}}><i className="bi bi-upload"></i></a></div>


                    </div>


                </div>

            </div>




        </li>

    );
};
export default PostItem;