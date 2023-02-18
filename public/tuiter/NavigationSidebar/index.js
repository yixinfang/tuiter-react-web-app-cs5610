const NavigationSidebar = (highlight) => {
    const sections = [
        {label: '', icon: 'fab fa-twitter', href: '/'},
        {label: 'Home', icon: 'fas fa-home', href: '../HomeScreen/index.html'},
        {label: 'Explore', icon: 'fas fa-hashtag', href: '../explore/index.html'},
        {label: 'Notifications', icon: 'fas fa-bell', href: '/'},
        {label: 'Messages', icon: 'fas fa-envelope', href: '/'},
        {label: 'Bookmarks', icon: 'fas fa-bookmark', href: '/'},
        {label: 'Lists', icon: 'fas fa-list', href: '/'},
        {label: 'Profile', icon: 'fas fa-user', href: '/'},
        {label: 'More', icon: 'fas fa-ellipsis-h', href: '/'},

    ]
    return(`
        <div class="list-group mb-2" >
            ${
        sections.map(section =>
            `<a class="list-group-item ${section.label === highlight ? 'active' : ''}" 
                href="${section.href}">
                <div class="d-none d-xl-block"><i class="${section.icon}"></i><span> ${section.label}</span></div>
                <div class="d-xl-none"><i class="${section.icon}"></i></div>
                
            </a>`)
            .join('')
            }
        </div>

<!--   <div class="list-group">-->
<!--     <a class="list-group-item" href="/">-->
<!--       <i class="fab fa-twitter"></i></a>-->
<!--       &lt;!&ndash; continue rest of list, e.g.,-->
<!--            Home, Explore, Notifications,  Messages, etc. &ndash;&gt;-->
<!--   </div>-->
        <div class="d-grid mt-2">
         <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
   `);
}
export default NavigationSidebar;
