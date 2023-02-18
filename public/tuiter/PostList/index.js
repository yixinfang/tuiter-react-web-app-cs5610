import fullPosts from "./fullPosts.js";
import PostItem from "./PostItem.js";

function PostItems() {
    return(`
        <ul class="list-group" style="border-radius: 0 0 0 0;">
            ${
                fullPosts.map(singlePost => {
                    return(PostItem(singlePost))
                }).join('')
            }
        </ul>
    `);
}
export default PostItems;