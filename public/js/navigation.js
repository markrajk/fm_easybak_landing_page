const nav = document.querySelector('#primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')
const backdrop = document.querySelector('.backdrop')

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible')

    if(visibility === 'false') {
        nav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
        backdrop.style.display = 'block'
    } else {
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        backdrop.style.display = 'none'
    }
})