// import ExploreNavigator from "./ExploreNavigator.js";
// import MainContent from "./MainContent.js";
// import FollowNavigator from "./FollowNavigator.js";
//
// const exploreElement = $('#explore')
// exploreElement.append(`
//     <div class="container pt-2">
//         <div class="row">
//             <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//                 ${ExploreNavigator('Explore')}
//             </div>
//             <div class="col-10 col-xl-6 col-md-9 col-lg-7">
//                 ${MainContent('For you')}
//             </div>
//             <div class="d-none d-lg-block col-lg-4">
//                 ${FollowNavigator()}
//             </div>
//
//         </div>
//     </div>
// `)
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../explore/ExploreComponent.js";
function exploreComponent() {
    $('#wd-explore').append(`
<!--       <h2>Explore</h2>-->
       <div class="row mt-2">
           <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
<!--               <h3>Navigation Sidebar</h3>-->
               ${NavigationSidebar('Explore')}
               
           
           </div>
           <div class="col-10 col-lg-7 col-xl-6 ">
<!--               <h3>ExploreComponent</h3>-->
               ${ExploreComponent()}
               
              
               
           
           </div>
           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
<!--               <h3>WhoToFollowList </h3>-->
               ${WhoToFollowList()}
               
               
           </div>
       </div>
   `);
}

$(exploreComponent);
