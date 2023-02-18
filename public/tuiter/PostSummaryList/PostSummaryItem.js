function PostSummaryItem(post) {
    return(`
    <div class="list-group-item">
        <div class="col-10 pe-3" style="float: left;">
            <span class="wd-fg-color-gray">${post.topic}</span></br>
            <span class="fw-bold">${post.userName}</span> <i class="fas fa-check-circle"></i> <span class="wd-fg-color-gray">- ${post.time}</span> </br>
            <span class="fw-bold">${post.title}</span>
        </div>
        <div class="col-2" style="float: right;">
            <img src="${post.image}" class="mt-2 img-fluid" />
        </div>
        <div style="clear: both;"></div>
    </div>
    `);

}
export default PostSummaryItem;