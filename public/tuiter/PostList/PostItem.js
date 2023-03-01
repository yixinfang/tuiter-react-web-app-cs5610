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
                        <div class="d-sm-none col"><a style="text-decoration: none; color: gray" href="${fullPost.commentHref}"><i class="far fa-comment"></i></a></div>
                        <div class="d-none d-sm-block d-lg-none col"><a style="text-decoration: none; color: gray" href="${fullPost.commentHref}"><i class="far fa-comment"></i>&nbsp<span>${fullPost.commentNumber}</span></a></div>
                        <div class="d-none d-lg-block col"><a style="text-decoration: none; color: gray" href="${fullPost.commentHref}"><i class="far fa-comment"></i>&nbsp&nbsp&nbsp&nbsp<span>${fullPost.commentNumber}</span></a></div>

                        <div class="d-sm-none col"><a style="text-decoration: none; color: gray" href="${fullPost.retweetHref}"><i class="fas fa-retweet"></i></a></div>
                        <div class="d-none d-sm-block d-lg-none col"><a style="text-decoration: none; color: gray" href="${fullPost.retweetHref}"><i class="fas fa-retweet"></i>&nbsp<span>${fullPost.retweetNumber}</span></a></div>
                        <div class="d-none d-lg-block col"><a style="text-decoration: none; color: gray" href="${fullPost.retweetHref}"><i class="fas fa-retweet"></i>&nbsp&nbsp&nbsp&nbsp<span>${fullPost.retweetNumber}</span></a></div>

                        <div class="d-sm-none col"><a style="text-decoration: none; color: gray" href="${fullPost.likeHref}"><i class="far fa-heart"></i></a></div>
                        <div class="d-none d-sm-block d-lg-none col"><a style="text-decoration: none; color: gray" href="${fullPost.likeHref}"><i class="far fa-heart"></i>&nbsp<span>${fullPost.likeNumber}</span></a></div>
                        <div class="d-none d-lg-block col"><a style="text-decoration: none; color: gray" href="${fullPost.likeHref}"><i class="far fa-heart"></i>&nbsp&nbsp&nbsp&nbsp<span>${fullPost.likeNumber}</span></a></div>

                        
                        
                        <div class="col"><a style="text-decoration: none; color: gray" href="${fullPost.uploadHref}"><i class="fas fa-upload"></i></a></div>
                    </div>
                </div>
            </div>
        
        </div>
    `);
}
export default PostItem