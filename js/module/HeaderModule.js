export default function HeaderModule() {
    const header = document.querySelector('.header')
    const mobile = document.querySelector('.mobile')
    const mobileOverlay = document.querySelector('.mobile-overlay')
    const cart = document.querySelectorAll('.disableJS')
    // const search = document.querySelector('.search-mona')
    cart.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth < 1200) {
                e.preventDefault();
            }
        })
    })
    if (header && mobile && mobileOverlay) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                header.classList.add('sticky')
                mobile.classList.add('sticky')
                mobileOverlay.classList.add('sticky')
                // search.classList.add('sticky')

            } else {
                header.classList.remove('sticky')
                mobile.classList.remove('sticky')
                mobileOverlay.classList.remove('sticky')
                // search.classList.remove('sticky')
            }
        })
    }
    $(document).ready(function () {
        if (header && mobile && mobileOverlay) {
            window.addEventListener("scroll", function () {
                if (window.scrollY > 0) {
                    header.classList.add('sticky')
                    mobile.classList.add('sticky')
                    mobileOverlay.classList.add('sticky')
                    // search.classList.add('sticky')

                } else {
                    header.classList.remove('sticky')
                    mobile.classList.remove('sticky')
                    mobileOverlay.classList.remove('sticky')
                    // search.classList.remove('sticky')
                }
            })
        }
    });


    const headerLoginwr = document.querySelector('.header-top-login-wr');
    const headerLogin = document.querySelector('.header-top-login');
    const headerCart = document.querySelector('.header-cart');
    if (headerLoginwr) {
        headerLoginwr.addEventListener('click', () => {
            headerLogin.classList.add('open')
            headerCart.classList.add('disable')
        })
        function hideMenu() {
            headerLogin.classList.remove('open')
            headerCart.classList.remove('disable')
        }
        // $(document).mouseup(function (e) {
        //     console.log(e.target)
        //     if (
        //         !$(".header-login").is(e.target) &&
        //         $(".header-login").has(e.target).length === 0
        //     ) {
        //         hideMenu();
        //     }
        // });
        document.addEventListener('click', (e)=> {
            if(!e.target.matches('.header-login, .header-login *') && !e.target.matches('.header-top-login-wr, .header-top-login-wr *')){
                hideMenu();
            }else return
        })
    }

    // 
    const menuMegaBtn = document.querySelector('.header-burger-btn');
    const menuMega = document.querySelector('.header-burger');
    const megaOverlay = document.querySelector('.megas-overlay');
    const megaRight = document.querySelector('.megas-right');
    if (menuMegaBtn) {
        menuMegaBtn.addEventListener('click', () => {
            menuMega.classList.add('open')
        })
        megaOverlay.addEventListener('click', () => {
            menuMega.classList.remove('open')
        })
        megaRight.addEventListener('click', () => {
            menuMega.classList.remove('open')
        })
        function hideMenus() {
            menuMega.classList.remove('open')
        }
        $(document).mouseup(function (e) {
            console.log(e.target)
            if (
                !$(".header-burger").is(e.target) &&
                $(".header-burger").has(e.target).length === 0 && !$(".megas-menu, .megas-menu *")
            ) {
                hideMenus();
            }
        });
    }

    // 
    const forgotjs = document.querySelector('.forgotJS');
    const forgotClosejs = document.querySelector('.forgotCloseJS');
    if(forgotjs) {
        forgotjs.addEventListener('click', ()=> {
            $('.header-login-forgot').addClass('open')
        })
    }
    if(forgotClosejs) {
        forgotClosejs.addEventListener('click', ()=> {
            $('.header-login-forgot').removeClass('open')
        })
    }
}