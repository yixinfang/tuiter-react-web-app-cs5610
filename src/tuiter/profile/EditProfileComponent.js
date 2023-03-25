import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile} from "./profile-reducer";
// const EditProfileComponent = ({profile}) => {
const EditProfileComponent = () => {
    // this allows you to copy
    // the State from the global state into our local State.
    const currProfile = useSelector((state) => state.currProfile)
    const [newProfile, setProfile] = useState(currProfile);

    // console.log(currProfile)
    // a function that allows us to send over data to the reducer. It allows us to invoke this function
    // and send it data across
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        // alert("save button clicked");
        dispatch(editProfile(newProfile))
        console.log(currProfile.firstName, newProfile.firstName)
        // dispatch(editProfile({
        //     bio: bio,
        //     name: name,
        // }))
    };
    return(
        // <h3>{newProfile.bio}</h3>
        <>
           <div className={"row"}>
               <div className={"col-1"}>
                   <Link to={'/tuiter/profile'}> X </Link>
               </div>
               <div className={"col-11"}>
                   <h3>
                       <button
                           onClick={handleSaveButton}
                           className={"btn btn-info float-end"}>
                           Save
                       </button>
                       Edit Profile
                   </h3>
               </div>
           </div>
            <div className={"position-relative mt-2"}>
                <img className="img-fluid" alt='' src={`/images/${newProfile.bannerPicture}`}/>
                <img className="position-absolute wd-nudge-down w-25"src={`/images/${newProfile.profilePicture}`}/>
            </div>
            <div className={"list-group"} style={{"margin-top": 72}}>
                <li className={"list-group-item"}>
                    <div>first name</div>
                    <input
                        onChange={(e) =>
                            setProfile({
                                ...newProfile,
                                firstName: e.target.value,
                            })
                        }
                        value={`${newProfile.firstName}`}
                        style={{"text-decoration": "none","border-width": 0}}
                    />
                    {newProfile.firstName}
                    {currProfile.firstName}
                </li>
                <li className={"list-group-item"}>
                    <div>last name</div>
                    <input
                        onChange={(e) =>
                            setProfile({
                                ...newProfile,
                                lastName: e.target.value,
                            })
                        }
                        value={`${newProfile.lastName}`}
                        style={{"text-decoration": "none","border-width": 0}}
                    />
                    {newProfile.lastName}
                </li>
                <li className={"list-group-item"}>
                    <label>Bio</label>
                    <br />
                    <input
                        onChange={(e) =>
                            setProfile({
                                ...newProfile,
                                bio: e.target.value,
                            })
                        }
                        value={newProfile.bio}
                        style={{"text-decoration": "none","border-width": 0}}
                        className="w-100"
                    />
                    {/*{newProfile.bio}*/}
                </li>
                <li className={"list-group-item"}>
                    <div>Location</div>
                    <input
                        onChange={(e) =>
                            setProfile({
                                ...newProfile,
                                location: e.target.value,
                            })
                        }
                        value = {newProfile.location}
                        style={{"text-decoration": "none","border-width": 0}}
                    />
                    {newProfile.location}
                </li>
                <li className={"list-group-item"}>
                    <input
                        onChange={(e) =>
                            setProfile({
                                ...newProfile,
                                website: e.target.value,
                            })
                        }
                        style={{"text-decoration": "none","border-width": 0}}
                        className="w-100"
                        placeholder='website'
                    />
                </li>


            </div>
        </>


    );
};
export default EditProfileComponent;
