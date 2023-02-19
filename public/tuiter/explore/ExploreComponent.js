import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = (select='For you') => {
    const sections = [
        {label: 'For you', href:"for-you.html"},
        {label: 'Trending', href:"trending.html"},
        {label: 'News', href:"news.html"},
        {label: 'Sports', href:"sports.html"},
        {label: 'Entertainment', href:"entertainment.html"},
    ]
    return(`
<!--        search field and cog-->
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
<!--        tabs-->
        <ul class="nav mb-2 nav-tabs">
                ${
                    sections.map(section =>
                        `<li class="nav-item ${section.label === 'Entertainment' ? 'd-none d-md-block' : ''}">
                                        <a class="nav-link ${section.label === select ? 'active' : ''}" 
                                           href="${section.href}">
                                           ${section.label}
                                        </a>
                                  </li>`
            
                    ).join('')
                }  
        </ul>
<!--        image with overlaid-->
        <div class="wd-banner mt-2">
            <img src="../../images/Starship-Mk1-Day.webp" class="img-fluid" alt="Responsive image"/>
            <div class="wd-banner-content">
                <h2 class="fw-bold" style="color: #222222;">
                    SpaceX's Starship
                </h2>
            </div>
        </div>
        ${PostSummaryList()}
       
    `);
}
export default ExploreComponent