function PostItem(fullPost) {
    return(`
        <div class="list-group-item" style="background-color: black">
            <div class="row">
                <div class="col-2">
                    <div>
                        <img src="${fullPost.avatarIcon}" class="img-fluid" style="float: left; border-radius: 40px; max-width: 80%;">
                    </div>
                
                </div>
                <div class="col-9">
                    <div style="float: left;">
                        <span class="fw-bold">${fullPost.userName}</span>&nbsp<i class="fas fa-check-circle"></i><span>&nbsp@${fullPost.handle}・${fullPost.time}</span>
                        </br>
                        <span>${fullPost.contentPost}</span>
                    </div>
                </div>
                <div class="col-1">
                    <div style="float: right;"><a href="#" style="color: gray;"><i class="fas fa-ellipsis-h"></i></a></div>
</div>
                </div>
            
            <div class="row">
                <div class="col-2"></div>
                <div class="col-10">
                    
                    <div style="float: right;">
                        <div class="list-group">
                            <div class="list-group-item pt-0 pb-0 ps-0 pe-0">
                                
                                <img class="img-fluid" style='border-radius: 8px;' src="${fullPost.imagePost}">

                            </div>
                            <div class="list-group-item ${fullPost.sub ? '' : 'd-none'}"> 
                                <span class="fw-bold">${fullPost.subTitle}</span></br>
                                <span style="color: gray">${fullPost.subContent}</span></br>
                                <span style="color: gray"><i class="fas fa-link"></i>${fullPost.outlink}</span>
                  
                            </div>
                        </div>
                    </div>
                    <div class="row pt-3 pb-1"  style="color: gray">
                        <div class="col"><i class="far fa-comment"></i><span>&nbsp&nbsp&nbsp&nbsp${fullPost.commentNumber}</span></div>
                        <div class="col"><i class="fas fa-retweet"></i><span>&nbsp&nbsp&nbsp&nbsp${fullPost.retweetNumber}</span></div>
                        <div class="col"><i class="far fa-heart"></i><span>&nbsp&nbsp&nbsp&nbsp${fullPost.likeNumber}</span></div>
                        <div class="d-none d-sm-block col"><i class="fas fa-upload"></i></div>
                    </div>
                </div>
            </div>
        
        </div>
    `);
}
export default PostItem