import MobileModule from "./module/MobileModule.js";
import AosModule from "./module/AosModule.js";
import BtnToTopModule from "./module/BtnToTopModule.js";
import PopupModule from "./module/PopupModule.js";
import SwiperModule from "./module/SwiperModule.js";    
import LoadModule from "./module/LoadModule.js";
import LoadMoreModule from "./module/LoadMoreModule.js";
import CheckModule from "./module/CheckModule.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import HeaderModule from "./module/HeaderModule.js";
import SideModule from "./module/SideModule.js";
import ShowHideModule from "./module/ShowHideModule.js";
import OpenPopup from "./module/OpenPopup.js";
import SmoothScrollModule from "./module/SmoothScrollModule.js";
// import SplitModule from "./module/SplitModule.js";
import Animated from "./module/Animated.js";
import CollapseModule from "./module/CollapseModule.js";
import scrollContent from "./module/ScrollContent.js";
import ShowImgModule from "./module/ShowImgModule.js";
import ParallaxModule from "./module/ParallaxModule.js";
import CountUpModule from "./module/CountUpModule.js";
import ScrollDesktop from "./module/ScrollDesktop.js";
import SearchModule from "./module/SearchModule.js";
import ProgressScroll from "./module/ProgressScroll.js";
import UploadfileModule from "./module/UploadfileModule.js";
import Select2Module from "./module/Select2Module.js";





window.addEventListener("DOMContentLoaded", () => {
    MobileModule();
    // SplitModule()
    ProgressScroll();
    AosModule();
    BtnToTopModule();
    PopupModule();
    SwiperModule();
    LoadModule();
    CheckModule();
    SearchModule();
    GalleryModule();
    TabModule();
    HeaderModule();
    SideModule();
    ShowHideModule();
    OpenPopup();
    Animated();
    SmoothScrollModule();
    LoadMoreModule();
    CollapseModule();
    // CmtModule();
    scrollContent();
    // ShowImgModule();
    ParallaxModule();
    CountUpModule();
    // SelectIsotope();
    ScrollDesktop();
    UploadfileModule();
    Select2Module();
});