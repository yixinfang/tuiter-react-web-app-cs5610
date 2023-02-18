function ExploreNavigator(highlight = 'Explore') {
    const sections = [
        {label: 'Home', icon: 'fas fa-home'},
        {label: 'Explore', icon: 'fas fa-hashtag'},
        {label: 'Notifications', icon: 'fas fa-bell'},
        {label: 'Messages', icon: 'fas fa-envelope'},
        {label: 'Bookmarks', icon: 'fas fa-bookmark'},
        {label: 'Lists', icon: 'fas fa-list'},
        {label: 'Profile', icon: 'fas fa-user'},
        {label: 'More', icon: 'fas fa-ellipsis-h'},

    ]

    return (`
        <div class="list-group mb-2" >
            ${
              sections.map(section =>
                  `<a class="list-group-item ${section.label === highlight ? 'active' : ''}">
                        <i class="${section.icon}"></i>
                        ${section.label}
                    </a>`).join('')
            }
        </div>
        <a href="#" class="btn btn-primary form-control wd-border-radius-20" type="button">Tweet</a>
    `)
    // return (`
    //    <div class="list-group mb-2">
    //       <a class="list-group-item"><i class="fab fa-twitter fa-1x"></i> </a>
    //       <a class="list-group-item">
    //           <div class="d-none d-xl-block"><i class="fas fa-home"></i><span> Home</span> </div>
    //           <div class="d-xl-none"><i class="fas fa-home"></i></div>
    //       </a>
    //       <a class="list-group-item active">
    //           <div class="d-none d-xl-block"><i class="fas fa-hashtag"></i><span> Explore</span> </div>
    //           <div class="d-xl-none"><i class="fas fa-hashtag"></i></div>
    //       </a>
    //       <a class="list-group-item">
    //           <div class="d-none d-xl-block"><i class="fas fa-bell"></i><span> Notifications</span> </div>
    //           <div class="d-xl-none"><i class="fas fa-bell"></i></div>
    //       </a>
    //       <a class="list-group-item">
    //           <div class="d-none d-xl-block"><i class="fas fa-envelope"></i><span> Messages</span> </div>
    //           <div class="d-xl-none"><i class="fas fa-envelope"></i></div>
    //       </a>
    //       <a class="list-group-item">
    //           <div class="d-none d-xl-block"><i class="fas fa-bookmark"></i><span> Bookmarks</span> </div>
    //           <div class="d-xl-none"><i class="fas fa-bookmark"></i></div>
    //       </a>
    //       <a class="list-group-item">
    //           <div class="d-none d-xl-block"><i class="fas fa-list"></i><span> Lists</span> </div>
    //           <div class="d-xl-none"><i class="fas fa-list"></i></div>
    //       </a>
    //       <a class="list-group-item">
    //           <div class="d-none d-xl-block"><i class="fas fa-user"></i><span> Profile</span> </div>
    //           <div class="d-xl-none"><i class="fas fa-user"></i></div>
    //       </a>
    //       <a class="list-group-item">
    //           <div class="d-none d-xl-block"><i class="fas fa-ellipsis-h"></i><span> More</span> </div>
    //           <div class="d-xl-none"><i class="fas fa-ellipsis-h"></i></div>
    //       </a>
    //    </div>
    //    <a href="#" class="btn btn-primary form-control wd-border-radius-20" type="button">Tweet</a>
    // `)
}
export default  ExploreNavigator