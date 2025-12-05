function burgerMenu() {
    const burger = document.querySelectorAll('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const burgerShadow = document.querySelector('.header__inner');

    burger[0].addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burgerShadow.classList.add('active')
            setTimeout(() => {
                burger[1].classList.add('active')
            }, 100);
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burgerShadow.classList.remove('active')
            burger[0].classList.remove('active')
            body.classList.remove('locked')
        }
    })
    burger[1].addEventListener('click', () => {

        menu.classList.remove('active')
        burgerShadow.classList.remove('active')
        burger[1].classList.remove('active')
        burger[0].classList.add('active')
        setTimeout(() => {
            burger[0].classList.remove('active')
        }, 120);

        body.classList.remove('locked')

    })

    /*    window.addEventListener('resize', () => {
           if (window.innerWidth > 991.98) {
               menu.classList.remove('active')
               burger.classList.remove('active')
               body.classList.remove('locked')
           }
       }) */
}
burgerMenu()


function fixedHeader() {
    const nav = document.querySelector('.header')

    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
    }
}
window.addEventListener('scroll', fixedHeader)
