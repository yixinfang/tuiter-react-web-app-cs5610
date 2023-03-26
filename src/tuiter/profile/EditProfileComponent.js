import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile} from "./profile-reducer";
// const EditProfileComponent = ({profile}) => {
const EditProfileComponent = () => {
    // this allows you to copy
    // the State from the global state into our local State.
    const currProfile = useSelector(state => state.currProfile.currProfile)
    const [newProfile, setProfile] = useState(currProfile);
    // const [newFirstName, setFirstName] = useState('')
    // const editFirstName = (e) => {
    //     const firstNameEdited = e.target.value;
    //     const newFirstName = {
    //         firstName: firstNameEdited
    //     };
    //     setFirstName(newFirstName);
    // }

    // console.log(currProfile)
    // a function that allows us to send over data to the reducer. It allows us to invoke this function
    // and send it data across
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        // alert("save button clicked");
        dispatch(editProfile(newProfile))

        // dispatch(editProfile({
        //     firstName: newFirstName,
        // }))
        console.log(currProfile, newProfile)
        // dispatch(editProfile({
        //     bio: bio,
        //     name: name,
        // }))
    };
    console.log(currProfile, newProfile)
    const dateOfBirth = currProfile.dateOfBirth
    const dateOfBirth_arr = dateOfBirth.split('/')

    return(
        // <h3>{newProfile.bio}</h3>
        <>
           <div className={"row"}>
               <div className={"col-1"}>
                   <Link to={'/tuiter/profile'}> <i className="bi bi-x-lg"></i> </Link>
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
                <img className="img-fluid"
                     alt=''
                     src={`/images/${newProfile.bannerPicture}`}
                />
                <img className="position-absolute wd-nudge-down w-25 rounded-circle"
                     alt={""}
                     style={{"backgroudColor": "white", "borderWidth": 1}}
                     src={`/images/${newProfile.profilePicture}`}
                />
            </div>
            <div className={"list-group"} style={{"marginTop": 72}}>
                <li className={"list-group-item"}>
                    <label>Name</label>
                    <br/>
                    <input
                        onChange={(e) =>
                            // editFirstName(e.target.value)
                            setProfile({
                                ...newProfile,
                                firstName: e.target.value,
                            })
                        }
                        className={'w-25'}
                        value={`${newProfile.firstName}`}
                        placeholder="first name"
                        style={{"text-decoration": "none","border-width": 0}}
                    />
                    <input
                        onChange={(e) =>
                            // editFirstName(e.target.value)
                            setProfile({
                                ...newProfile,
                                lastName: e.target.value,
                            })
                        }
                        className={'w-25'}
                        value={`${newProfile.lastName}`}
                        placeholder="last name"
                        style={{"text-decoration": "none","border-width": 0}}
                    />

                </li>
                {/*<li className={"list-group-item"}>*/}
                {/*    <div>first name</div>*/}
                {/*    <input*/}
                {/*        onChange={(e) =>*/}
                {/*            // editFirstName(e.target.value)*/}
                {/*            setProfile({*/}
                {/*                ...newProfile,*/}
                {/*                firstName: e.target.value,*/}
                {/*            })*/}
                {/*        }*/}
                {/*        placeholder={`${newProfile.firstName}`}*/}
                {/*        style={{"text-decoration": "none","border-width": 0}}*/}
                {/*    />*/}
                {/*    {newProfile.firstName} {currProfile.firstName}*/}
                {/*</li>*/}
                {/*<li className={"list-group-item"}>*/}
                {/*    <div>last name</div>*/}
                {/*    <input*/}
                {/*        onChange={(e) =>*/}
                {/*            setProfile({*/}
                {/*                ...newProfile,*/}
                {/*                lastName: e.target.value,*/}
                {/*            })*/}
                {/*        }*/}
                {/*        value={`${newProfile.lastName}`}*/}
                {/*        style={{"text-decoration": "none","border-width": 0}}*/}
                {/*    />*/}
                {/*    {newProfile.lastName}*/}
                {/*</li>*/}
                <li className={"list-group-item"}>
                    <label>Bio</label>
                    <br/>
                    <input
                        onChange={(e) =>
                            setProfile({
                                ...newProfile,
                                bio: e.target.value,
                            })
                        }
                        value={newProfile.bio}
                        style={{"text-decoration": "none","border-width": 0, "height":40}}
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
                <li className={"list-group-item"}>
                    <label>Birth data <span>Edit</span></label>
                    <br />
                    {/*<input*/}
                    {/*    style={{"text-decoration": "none","border-width": 0}}*/}
                    {/*    value={newProfile.dateOfBirth}*/}
                    {/*/>*/}
                    <input
                        style={{"text-decoration": "none","border-width": 0, "width": 30}}
                        // className={"w-25"}
                        value={dateOfBirth_arr[0]}
                    />
                    <input
                        style={{"text-decoration": "none","border-width": 0, "width": 30}}
                        value={dateOfBirth_arr[1]}
                    />
                    <input
                        style={{"text-decoration": "none","border-width": 0, "width": 60}}
                        value={dateOfBirth_arr[2]}
                    />
                </li>


            </div>
        </>


    );
};
export default EditProfileComponent;
