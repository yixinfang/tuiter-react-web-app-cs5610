import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className={"list-group"}>
                <h3>Home</h3>

            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default TuitsList;