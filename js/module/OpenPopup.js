export default function OpenPopup() {
    // const popup = document.querySelectorAll('.popJS');
    // const popupClose = document.querySelectorAll('.popCloseJS');
    // const popupOver = document.querySelectorAll('.popOverJS');
    // const popupOpen = document.querySelectorAll('.popOpenJS');
    // const header = document.querySelector('.header ')
    // if (popup) {
    //     popupOpen.forEach((k, index) => {
    //         k.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             popup[index].classList.add('open');
    //             $('body').css('overflow-y', 'hidden')
    //         })
    //     })
    //     popupClose.forEach((k, index) => {
    //         k.addEventListener('click', () => {
    //             popup[index].classList.remove('open');
    //             $('body').css('overflow-y', 'auto')
    //         })
    //     })
    //     popupOver.forEach((k, index) => {
    //         k.addEventListener('click', () => {
    //             popup[index].classList.remove('open');
    //             $('body').css('overflow-y', 'auto')
    //         })
    //     })
    // }
    const modal = document.querySelector('.modal');
    const body = document.getElementsByTagName("body")[0];

    let isOpen = false;
    if (modal) {
        const btnModal = document.querySelector('.modal-btn');
        const overlayModal = document.querySelector('.modal-overlay');
        btnModal.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                modal.classList.add('open');
                body.style.overflowY = 'hidden';
                console.log(isOpen);
            } else {
                modal.classList.remove('open');
                body.style.overflowY = 'auto';
            }
        })

        overlayModal.addEventListener('click', () => {
            isOpen = false;
            modal.classList.remove('open');
            body.style.overflowY = 'auto';

        })
    } 
}