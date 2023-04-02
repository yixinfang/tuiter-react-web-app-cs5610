import React, {useEffect}  from "react";
// import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";

const PostSummaryList = () => {
    const {tuits, loading}  = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    console.log(tuits)
    return(
        <ul className="list-group">
            {/*<li>heeeeee</li>*/}
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit =>
                    <PostSummaryItem
                        key={tuit._id} post={tuit}/> )
            }
        </ul>
    );
};
export default PostSummaryList;
