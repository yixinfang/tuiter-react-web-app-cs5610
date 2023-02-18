import whoList from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
function WhoToFollowList() {
    return(`
        <ul class="list-group">
            <li class="list-group-item"><span class="fw-bold">Who to follow</span></li>
            ${
                whoList.map(who => {
                    return(WhoToFollowListItem(who))
                }).join('')
            }
        </ul>
    `);
}
export default WhoToFollowList;