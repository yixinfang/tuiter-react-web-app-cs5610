import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import {deleteTuit} from "../tuits/tuits-reducer";


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className={"list-group-item"}>
            <div className={"row"}>
                <div className={"col-auto"}>
                    <img width={50} className={" rounded-circle img-fluid"} alt={"show"} src={`/images/${tuit.image}`}/>
                </div>
                <div className={"col-10"}>
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div><span className={"fw-bold"}>{tuit.userName}</span><span><i className="bi bi-patch-check-fill" style={{color: "blue"}}></i> </span>  <span style={{color: "gray"}}>{tuit.handle}・{tuit.time}</span></div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit}/>


                </div>
            </div>

        </li>
    );
};
export default TuitItem;