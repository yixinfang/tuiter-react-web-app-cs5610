import React from "react";
import EditProfileComponent from "./EditProfileComponent";
import {useSelector} from "react-redux";

const EditProfile = () => {
    const profile = useSelector(state => state.currProfile)
    return(
        <EditProfileComponent
            profile={profile}/>
    )
};
export default EditProfile;