import React from "react";
import PostItem from './single-post-item';
import fullPosts from './fullPostArray.json';
const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                fullPosts.map(fullPost =>
                    <PostItem
                        key={fullPost._id} fullPost={fullPost}/>)
            }

        </ul>

    );
};
export default HomeComponent;