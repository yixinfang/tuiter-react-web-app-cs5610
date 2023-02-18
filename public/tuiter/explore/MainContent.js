function MainContent(select) {
    const sections = [
        {label: 'For you', href:"for-you.html"},
        {label: 'Trending', href:"trending.html"},
        {label: 'News', href:"news.html"},
        {label: 'Sports', href:"sports.html"},
        {label: 'Entertainment', href:"entertainment.html"},
    ]
    // const posts = [
    //     {}
    // ]
    return (`
        <div class="row">
            <div class="col-11 pe-0 pe-md-3">
                <div class="custom-search form-control wd-form-control" >
                    <input type="text" class=" custom-search-input border-0" placeholder="Search Twitter" >
                    <button class="btn custom-search-botton" style="background-color: white" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
                </div>
            </div>
            <div class="col-1 ps-1 ps-md-3" style="padding-top: 4px;">
                <a href="explore-settings.html"><i class="fas fa-cog fa-2x align-middle"></i></a>
            </div>
        </div>
        <div class="mb-2 mt-2">
            <ul class="nav nav-tabs">
                ${
                  sections.map(section =>
                      `<li class="nav-item">
                            <a class="nav-link ${section.label === select ? 'active' : ''}" 
                               href="${section.href}">
                               ${section.label}
                            </a>
                      </li>`
                  
                  ).join('')
                }  
            </ul>
            <div class="mt-2">
                <div class="wd-banner">
                    <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="img-fluid" alt="Responsive image"/>
                    <div class="wd-banner-content">
                        <h2 class="text-white fw-bold">
                            SpaceX's Starship
                        </h2>
                    </div>

                </div>
                <ul class="list-group">

                    <li class="list-group-item">
                        <div class="col-10 wd-float-left wd-fg-color-black wd-padding-right-16">
                            <span class="wd-fg-color-gray">Web Development</span></br>
                            <span class="fw-bold">ReactJS</span> <i class="fas fa-check-circle"></i> <span class="wd-fg-color-gray">- 2h</span> </br>
                            <span class="fw-bold">React.js is a component based front end library that makes it very easy to build
                                Single Page Applications or SPAs</span>

                        </div>
                        <div class="col-2 wd-float-right">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02jcTAy6AjS6poKeVmEjp-q5A1-VowyNWIQ&usqp=CAU" class="img-fluid"/>
                        </div>
                        <div class="wd-clear"></div>

                    </li>
                    <li class="list-group-item">
                        <div class="col-10 wd-float-left wd-fg-color-black wd-padding-right-16">
                            <span class="wd-fg-color-gray">Web Development</span></br>
                            <span class="fw-bold">JavaScript</span> <i class="fas fa-check-circle"></i> <span class="wd-fg-color-gray">- 2h</span> </br>
                            <span class="fw-bold">JavaScript is programming language that can run on browsers as well as desktops </span> </br>
                            <span class="wd-fg-color-gray">123K Tweets</span>

                        </div>
                        <div class="col-2 wd-float-right">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" class="img-fluid wd-border-radius-20"/>
                        </div>
                        <div class="wd-clear"></div>

                    </li>

                    <li class="list-group-item">
                        <div class="col-10 wd-float-left wd-fg-color-black wd-padding-right-16">
                            <span class="wd-fg-color-gray">Web Development</span></br>
                            <span class="fw-bold">jQuery</span></br>
                            <span class="wd-fg-color-gray">123K Tweets</span>
                        </div>
                        <div class="col-2 wd-float-right">
                            <img src="https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png" class="img-fluid"/>
                        </div>
                        <div class="wd-clear"></div>
                    </li>

                    <li class="list-group-item">
                        <div class="col-10 wd-float-left wd-fg-color-black wd-padding-right-16">
                            <span class="wd-fg-color-gray">Web Development</span></br>
                            <span class="fw-bold">NodeJS</span> <i class="fas fa-check-circle"></i> <span class="wd-fg-color-gray">- 2h</span> </br>
                            <span class="wd-fg-color-gray">123K Tweets</span>
                        </div>
                        <div class="col-2 wd-float-right">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" class="img-fluid"/>
                        </div>
                        <div class="wd-clear"></div>
                    </li>

                </ul>

            </div>
        
        </div>
    `)
    // return (`
    //     <div class="row">
    //         <div class="col-11 pe-0 pe-md-3">
    //             <div class="custom-search form-control wd-form-control" >
    //                 <input type="text" class=" custom-search-input border-0" placeholder="Search Twitter" >
    //                 <button class="btn custom-search-botton" style="background-color: white" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
    //             </div>
    //         </div>
    //         <div class="col-1 ps-1 ps-md-3" style="padding-top: 4px;">
    //             <a href="explore-settings.html"><i class="fas fa-cog fa-2x align-middle"></i></a>
    //         </div>
    //     </div>
    //     <div class=" mb-2 mt-2">
    //         <ul class="nav nav-tabs">
    //             <li class="nav-item">
    //                 <a class="nav-link active" href="for-you.html">For you</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="trending.html">Trending</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="news.html">News</a>
    //             </li>
    //             <li class="nav-item">
    //                 <a class="nav-link" href="sports.html">Sports</a>
    //             </li>
    //             <li class="nav-item d-none d-md-block">
    //                 <a class="nav-link" href="entertainment.html " tabindex="-1">Entertainment</a>
    //             </li>
    //         </ul>
    //
    //         <div class="mt-2">
    //             <div class="wd-banner">
    //                 <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="img-fluid" alt="Responsive image"/>
    //                 <div class="wd-banner-content">
    //                     <h2 class="text-white fw-bold">
    //                         SpaceX's Starship
    //                     </h2>
    //                 </div>
    //
    //             </div>
    //             <ul class="list-group">
    //
    //                 <li class="list-group-item">
    //                     <div class="col-10 wd-float-left wd-fg-color-black wd-padding-right-16">
    //                         <span class="wd-fg-color-gray">Web Development</span></br>
    //                         <span class="fw-bold">ReactJS</span> <i class="fas fa-check-circle"></i> <span class="wd-fg-color-gray">- 2h</span> </br>
    //                         <span class="fw-bold">React.js is a component based front end library that makes it very easy to build
    //                             Single Page Applications or SPAs</span>
    //
    //                     </div>
    //                     <div class="col-2 wd-float-right">
    //                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02jcTAy6AjS6poKeVmEjp-q5A1-VowyNWIQ&usqp=CAU" class="img-fluid"/>
    //                     </div>
    //                     <div class="wd-clear"></div>
    //
    //                 </li>
    //                 <li class="list-group-item">
    //                     <div class="col-10 wd-float-left wd-fg-color-black wd-padding-right-16">
    //                         <span class="wd-fg-color-gray">Web Development</span></br>
    //                         <span class="fw-bold">JavaScript</span> <i class="fas fa-check-circle"></i> <span class="wd-fg-color-gray">- 2h</span> </br>
    //                         <span class="fw-bold">JavaScript is programming language that can run on browsers as well as desktops </span> </br>
    //                         <span class="wd-fg-color-gray">123K Tweets</span>
    //
    //                     </div>
    //                     <div class="col-2 wd-float-right">
    //                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" class="img-fluid wd-border-radius-20"/>
    //                     </div>
    //                     <div class="wd-clear"></div>
    //
    //                 </li>
    //
    //                 <li class="list-group-item">
    //                     <div class="col-10 wd-float-left wd-fg-color-black wd-padding-right-16">
    //                         <span class="wd-fg-color-gray">Web Development</span></br>
    //                         <span class="fw-bold">jQuery</span></br>
    //                         <span class="wd-fg-color-gray">123K Tweets</span>
    //                     </div>
    //                     <div class="col-2 wd-float-right">
    //                         <img src="https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png" class="img-fluid"/>
    //                     </div>
    //                     <div class="wd-clear"></div>
    //                 </li>
    //
    //                 <li class="list-group-item">
    //                     <div class="col-10 wd-float-left wd-fg-color-black wd-padding-right-16">
    //                         <span class="wd-fg-color-gray">Web Development</span></br>
    //                         <span class="fw-bold">NodeJS</span> <i class="fas fa-check-circle"></i> <span class="wd-fg-color-gray">- 2h</span> </br>
    //                         <span class="wd-fg-color-gray">123K Tweets</span>
    //                     </div>
    //                     <div class="col-2 wd-float-right">
    //                         <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" class="img-fluid"/>
    //                     </div>
    //                     <div class="wd-clear"></div>
    //                 </li>
    //
    //             </ul>
    //
    //         </div>
    //
    //
    //     </div>
    //
    // `)

}
export default MainContent