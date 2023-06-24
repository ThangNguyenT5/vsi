export default function AosModule() {
    /** ANIMATION ON SCROLL */
    AOS.init({
        startEvent: 'DOMContentLoaded',
        offset: 0,
        duration: 2000,
        delay: '200',
        easing: 'ease',
        once: true,
        mirror: true,
        disable: function() {
            return $(window).width() <= 800; //768
        },
    });
    /** ANIMATION ON SCROLL - END */
}