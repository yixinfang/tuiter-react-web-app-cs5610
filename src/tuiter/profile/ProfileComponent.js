import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
// const ProfileComponent = ({profile}) => {
function ProfileComponent() {
    const currProfile = useSelector(state => state.currProfile.currProfile)
    console.log(currProfile.firstName)
    return(
        <>
            <div className={"row"}>
                <div className={"col-1"}>

                    <Link to={'/tuiter'}><i className="bi bi-arrow-left" style={{color: "black"}}></i></Link>
                </div>
                <div className={"col-11"}>
                    <div className={"fw-bold"}>{currProfile.firstName} {currProfile.lastName}</div>
                    <div>{currProfile.tweetsCounts} Tweets</div>
                </div>
            </div>
            <div className={"position-relative mt-2"}>
                <img className="img-fluid" alt={""} src={`/images/${currProfile.bannerPicture}`}/>
                <img className="position-absolute wd-nudge-down w-25 rounded-circle" alt={""}
                     style={{"backgroudColor": "white", "borderWidth": 1}} src={`/images/${currProfile.profilePicture}`}/>
                {/*<button className={"float-end"}>edit profile</button>*/}
                {/*<div className={"wd-clear"}></div>*/}
            </div>
            <div className={"row mt-3 mb-3"}>
                <div className={"col-9"}></div>
                {/*<div className={"col-3"}><Link to={"/tuiter/edit-profile"}>edit profile</Link></div>*/}
                <div className={"col-3"}><Link to={"/tuiter/edit-profile"}><button className={"ms-2 ps-3 pe-3 rounded-pill"} style={{"backgroundColor": "white", border:'1px solid'}}>edit profile</button></Link></div>
                {/*<EditProfile/>*/}
            </div>
            <div className={"mt-6"} style={{"marginTop":64}}>
                <div className={"fw-bold"}>{currProfile.firstName} {currProfile.lastName}</div>
                <div>{currProfile.handle}</div>
            </div>
            <div className={"mt-3"}>
                {currProfile.bio}
            </div>
            <div className={"row mt-3"}>
                <div className={"col"}><i className="bi bi-geo-alt"></i> {currProfile.location}</div>
                <div className={"col"}><i className="bi bi-balloon"></i> Born {currProfile.dateOfBirth}</div>
                <div className={"col"}><i className="bi bi-calendar3"></i> Joined {currProfile.dateJoined}</div>
                <div className={"col"}></div>
            </div>
            {/*<div className={"mt-3"}>*/}
            {/*    <i className="bi bi-geo-alt"></i> {profile.location}  <i className="bi bi-balloon"></i> {profile.dateOfBirth} <i className="bi bi-calendar3"></i> {profile.dateJoined}*/}
            {/*</div>*/}
            <div className={"mt-3"}>
                <span className={"fw-bold"}>{currProfile.followingCount}</span> following  <span className={"fw-bold"}>{currProfile.followersCount}</span> followers
            </div>
        </>

    );
}
export default ProfileComponent;