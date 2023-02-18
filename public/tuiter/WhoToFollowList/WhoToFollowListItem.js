function WhoToFollowListItem(who) {
    return (`
        <div class="list-group-item">
            <div class="row" >
                <div class="col-lg-2 col-xl-2">
                    <div class="wd-container">
                        <div class="wd-vertical-center wd-image-size">
                            <img src="${who.avatarIcon}" class="img-fluid wd-float-left"/>
                        </div>
                    </div>
                </div>
                <div class=" col-lg-6 col-xl-7">
                    <div class="wd-container">
                        <div class="wd-vertical-center wd-float-left" style="color: white">
                            <span class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></span>
                            </br>
                            <span>@${who.handle}</span>
                        </div>
    
                    </div>
                    
                </div>
    
                <div class="col-lg-4 col-xl-3">
                    <div class="wd-container">
                        <div class="vertical-center">
                            <a class="btn wd-border-radius-20 wd-float-right" style="background-color: #4f9ed1"><span class="fw-bold" style="color: white">Follow</span></a>
                        </div>
                    </div>
                    
                </div>
                <div class="wd-clear"></div>
            </div>
        </div>
        
    
    `);
}
export default WhoToFollowListItem