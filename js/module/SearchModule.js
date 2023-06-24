export default function SearchModule() {
    const search = document.querySelector('.header-search-wrapper');
    if (search) {
        const searchBtn = search.querySelector('.header-search')
        const searchForm = search.querySelector('.header-search-box')
        let isSearchOpen = false
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                isSearchOpen = !isSearchOpen
                if (isSearchOpen) {
                    searchForm.classList.add('open')
                } else {
                    searchForm.classList.remove('open')
                }
            })
        }
        window.addEventListener('click', (e) => {
            const notForm = searchForm.contains(e.target)
            const notBtn = searchBtn.contains(e.target)
            isSearchOpen = false;
            if (!notForm && !notBtn) {
                searchForm.classList.remove('open')
            }
        })
    }
}