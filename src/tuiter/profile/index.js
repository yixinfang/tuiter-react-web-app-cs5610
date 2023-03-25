import React from "react";
import ProfileComponent from "./ProfileComponent";
import {useSelector} from "react-redux";

const Profile = () => {
    // const profile = useSelector(state => state.currProfile)[0]
    const profile = useSelector(state => state.currProfile)

    return(
        <ProfileComponent
        profile={profile}/>
    // <ProfileComponent/>
    )
};
export default Profile;