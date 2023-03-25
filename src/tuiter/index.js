import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import ProfileReducer from "./profile/profile-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import TuitsList from "./tuits/TuitsList";
import Profile from "./profile";
import ProfileComponent from "./profile/ProfileComponent";
import EditProfileComponent from "./profile/EditProfileComponent";
const store = configureStore({
    reducer: {
            who: whoReducer,
            tuits: tuitsReducer,
            currProfile: ProfileReducer,
    }
});


function Tuiter() {
    return(
        <Provider store={store}>
        <div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    {/*<Route index element={<ExploreComponent/>}/>*/}
                    {/*<Route index element={<TuitsList/>}/>*/}
                    <Route index element={<HomeComponent/>}/>
                    <Route path="home"    element={<HomeComponent/>}/>
                    {/*<Route path="home"    element={<TuitsList/>}/>*/}
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    {/*<Route path="edit-profile" element={<EditProfile/>}/>*/}
                </Routes>


            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>



    )
}
export default Tuiter

