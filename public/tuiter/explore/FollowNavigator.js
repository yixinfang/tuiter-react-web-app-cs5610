function FollowNavigator() {
    const sections = [
        {
            label: 'Java', sub: 'Java',
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
            iconStyle: '',
            href: "https://en.wikipedia.org/wiki/Java_(programming_language)"
        },
        {
            label: 'Relativity Space', sub: 'relativityspace',
            icon: "https://res.cloudinary.com/crunchbase-production/image/upload/j3dbh6kok0dket3uz2vy",
            iconStyle: 'wd-border-radius-40',
            href: "https://www.relativityspace.com/"
        },
        {
            label: 'Virgin Galactic', sub: 'virgingalactic',
            icon: "https://cdn.worldvectorlogo.com/logos/virgin-1.svg",
            iconStyle: '',
            href: "https://www.virgingalactic.com/"
        },
        {
            label: 'NASA', sub: 'NASA',
            icon: "http://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png",
            iconStyle: '',
            href: "https://www.nasa.gov/"
        },
        {
            label: 'Tesla', sub: 'Tesla',
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png",
            iconStyle: '',
            href: "https://www.tesla.com/"
        }

    ]
    return (`
        <ul class="list-group">
            <li class="list-group-item" style="background-color: #222222"><span class="fw-bold" style="color: white">Who to follow</span></li>
            
            ${
              sections.map(section =>
                `<li class="list-group-item" style="background-color: #222222; border: #262626 solid 1px;">
                        <div class="row" >
                            <div class=" col-lg-2 col-xl-2">
                                <div class="wd-container">
                                    <div class="wd-vertical-center wd-float-left wd-image-size">
                                        <img src="${section.icon}" class="img-fluid wd-float-left ${section.iconStyle}"/>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-lg-6 col-xl-7">
                                <div class="wd-container">
                                    <div class="wd-vertical-center wd-float-left" style="color: white">
                                        <span class="wd-bold-font">${section.label} <i class="fas fa-check-circle"></i></span>
                                        </br>
                                        <span>@${section.sub}</span>
                                    </div>
    
                                </div>
                            </div>
    
                            <div class="col-lg-4 col-xl-3">
                                <div class="wd-container">
                                    <div class="vertical-center">
                                        <a href="${section.href}" class="btn wd-border-radius-20 wd-float-right" style="background-color: #4f9ed1"><span class="fw-bold" style="color: white">Follow</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="wd-clear"></div>
                        </div>
    
                </li>`
              ).join('')
        
            }
               
<!--                    <li class="list-group-item">-->
<!--                        <div class="row">-->
<!--                            <div class=" col-lg-2 col-xl-2">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left wd-image-size">-->
<!--                                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" class="img-fluid wd-float-left"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class=" col-lg-6 col-xl-7">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left ">-->
<!--                                        <span class="wd-bold-font">Java <i class="fas fa-check-circle"></i></span>-->
<!--                                        </br>-->
<!--                                        <span>@Java</span>-->
<!--                                    </div>-->
<!--    -->
<!--                                </div>-->
<!--                            </div>-->
<!--    -->
<!--                            <div class="col-lg-4 col-xl-3">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="vertical-center">-->
<!--                                        <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" class="btn btn-primary wd-border-radius-20 wd-float-right">Follow</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="wd-clear"></div>-->
<!--                        </div>-->
<!--    -->
<!--                    </li>-->
<!--                    <li class="list-group-item">-->
<!--                        <div class="row">-->
<!--                            <div class=" col-lg-2 ">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left wd-image-size">-->
<!--                                        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/j3dbh6kok0dket3uz2vy" class="img-fluid wd-float-left wd-border-radius-40"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class=" col-lg-8 col-xl-7">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left ">-->
<!--                                        <span class="wd-bold-font">Relativity Space <i class="fas fa-check-circle"></i></span>-->
<!--                                        </br>-->
<!--                                        <span>@relativityspace</span>-->
<!--                                    </div>-->
<!--    -->
<!--                                </div>-->
<!--                            </div>-->
<!--    -->
<!--                            <div class="col-lg-2 col-xl-3">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="vertical-center">-->
<!--                                        <a href="https://www.relativityspace.com/" class="btn btn-primary wd-border-radius-20 wd-float-right">Follow</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="wd-clear"></div>-->
<!--                        </div>-->
<!--    -->
<!--                    </li>-->
<!--                    <li class="list-group-item">-->
<!--                        <div class="row">-->
<!--                            <div class=" col-lg-2">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left wd-image-size">-->
<!--                                        <img src="https://cdn.worldvectorlogo.com/logos/virgin-1.svg" class="img-fluid wd-float-left"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class=" col-lg-8 col-xl-7">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left ">-->
<!--                                        <span class="wd-bold-font">Virgin Galactic <i class="fas fa-check-circle"></i></span>-->
<!--                                        </br>-->
<!--                                        <span>@virgingalactic</span>-->
<!--                                    </div>-->
<!--    -->
<!--                                </div>-->
<!--                            </div>-->
<!--    -->
<!--                            <div class="col-lg-2 col-xl-3">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="vertical-center">-->
<!--                                        <a href="https://www.virgingalactic.com/" class="btn btn-primary wd-border-radius-20 wd-float-right">Follow</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="wd-clear"></div>-->
<!--                        </div>-->
<!--    -->
<!--                    </li>-->
<!--                    <li class="list-group-item">-->
<!--                        <div class="row">-->
<!--                            <div class=" col-lg-2 col-xl-2">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left wd-image-size">-->
<!--                                        <img src="http://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" class="img-fluid wd-float-left"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class=" col-lg-6 col-xl-7">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left ">-->
<!--                                        <span class="wd-bold-font">NASA <i class="fas fa-check-circle"></i></span>-->
<!--                                        </br>-->
<!--                                        <span>@NASA</span>-->
<!--                                    </div>-->
<!--    -->
<!--                                </div>-->
<!--                            </div>-->
<!--    -->
<!--                            <div class="col-lg-4 col-xl-3">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="vertical-center">-->
<!--                                        <a href="https://www.nasa.gov/" class="btn btn-primary wd-border-radius-20 wd-float-right">Follow</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="wd-clear"></div>-->
<!--                        </div>-->
<!--    -->
<!--                    </li>-->
<!--                    <li class="list-group-item">-->
<!--                        <div class="row">-->
<!--                            <div class=" col-lg-2 col-xl-2">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left wd-image-size">-->
<!--                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png" class="img-fluid wd-float-left"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class=" col-lg-6 col-xl-7">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="wd-vertical-center wd-float-left ">-->
<!--                                        <span class="wd-bold-font">Tesla <i class="fas fa-check-circle"></i></span>-->
<!--                                        </br>-->
<!--                                        <span>@Tesla</span>-->
<!--                                    </div>-->
<!--    -->
<!--                                </div>-->
<!--                            </div>-->
<!--    -->
<!--                            <div class="col-lg-4 col-xl-3">-->
<!--                                <div class="wd-container">-->
<!--                                    <div class="vertical-center">-->
<!--                                        <a href="https://www.tesla.com/" class="btn btn-primary wd-border-radius-20 wd-float-right">Follow</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="wd-clear"></div>-->
<!--                        </div>-->
<!--    -->
<!--                    </li>-->

        </ul>
    `)
}
export default FollowNavigator