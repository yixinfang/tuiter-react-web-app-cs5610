import {createSlice} from "@reduxjs/toolkit";
import currProfile from './initProfile.json';
// const initialState = {
//     currProfile: {
//         firstName: 'Jose',
//         lastName: 'Annunziato',
//         handle: '@jannunzi',
//         profilePicture: 'jose.png',
//         bannerPicture: 'polyglot.png',
//         bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
//         website: 'youtube.com/webdevtv',
//         location: 'Boston, MA',
//         dateOfBirth: '7/7/1968',
//         dateJoined: '4/2009',
//         followingCount: 340,
//         followersCount: 223
//     },
// };

const profileSlice = createSlice({
    name: "currProfile",
    initialState: currProfile,
    reducers: {
        // the action represents the parameter of what happened of the events
        editProfile(state, action) {
            //action by division needs contain a property called payload payload is the actual data that we are passing, or as a parameter across right to the reducer.
           state.currProfile = action.payload;

        },
        // editProfile(state, action) {
        //     state.unshift();
        //     state.push({
        //         "firstName": action.payload.firstName,
        //         "lastName": action.payload.lastName,
        //         // "handle": action.payload.handle,
        //         // "profilePicture": action.payload.profilePicture,
        //         "bio": action.payload.bio,
        //
        //     })
        //     // state.currProfile = action.payload;
        // }
    },
});
export default profileSlice.reducer;
export const {editProfile} = profileSlice.actions;
