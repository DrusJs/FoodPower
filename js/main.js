document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active')
        } else {
            let active = document.querySelector('.accordion.active')
            if (active) {
                active.classList.remove('active')
            }
            e.currentTarget.classList.toggle('active')
        }
    })
})

if (document.querySelector('.account_switcher__wrapper')) {
    let accountSwithcers = Array.from(document.querySelector('.account_switcher__wrapper').children)
    accountSwithcers.forEach((el) => {
        el.addEventListener('click', swapTab)
    })
}


if (document.querySelector('.burger-button')) {
    document.querySelector('.burger-button').addEventListener('click', () => {
        document.querySelector('.burger-menu').classList.add('active')
    })
    
    document.querySelector('.burger-close').addEventListener('click', () => {
        document.querySelector('.burger-menu').classList.remove('active')
    })
}

function swapTab(e) {
    if (!e.currentTarget.classList.contains('button')) {
        let active = document.querySelector(`.account_switcher__wrapper .button`)
        active.classList.remove('button')
        active.classList.add('stroke__button')
        e.currentTarget.classList.add('button')
        e.currentTarget.classList.remove('stroke__button')
        let count = Array.from(e.currentTarget.parentElement.children).indexOf(e.currentTarget)
        let tabs = document.querySelector('.account-tabs')
        tabs.querySelector('.tab-container.active').classList.remove('active')
        Array.from(tabs.children)[count].classList.add('active')
    }
}

function swapActiveClass(e) {
    if (!e.currentTarget.classList.contains('button')) {
        let active = e.currentTarget.parentElement.querySelector(".button")
        active.classList.remove('button')
        active.classList.add('stroke__button')
        e.currentTarget.classList.add('button')
        e.currentTarget.classList.remove('stroke__button')
    }
}

function showModal(id) {
    document.body.classList.add('disable--scroll')
    document.getElementById(id).classList.add('active')
}

function closeModal(e) {
    e.currentTarget.closest('.modal-layer').classList.remove('active')
    if (!document.querySelector('.modal-layer.active')) {
        document.body.classList.remove('disable--scroll')
    }
}

function modalWrapperEvent(e) {
    if (e.target == e.currentTarget) {
        e.currentTarget.classList.remove('active')
    }
    if (!document.querySelector('.modal-layer.active')) {
        document.body.classList.remove('disable--scroll')
    }
}

function showNotification(id) {
    document.getElementById(id).classList.add('active')
}

function closeNotification(e) {
    e.currentTarget.closest('.notification__wrapper').classList.remove('active')
}

document.querySelectorAll('.modal-layer').forEach((el) => {
    el.addEventListener('click', modalWrapperEvent)
})

document.querySelectorAll('.modal_close__btn').forEach((el) => {
    el.addEventListener('click', closeModal)
})

document.querySelectorAll('.notification_close__btn').forEach((el) => {
    el.addEventListener('click', closeNotification)
})

document.querySelectorAll('.header__select_wrapper').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active')
    })
})

if (document.querySelector('.main_screen__buttons_wrapper')) {
    Array.from(document.querySelector('.main_screen__buttons_wrapper').children).forEach((el) => {
        el.addEventListener('click', swapActiveClass)
    })
}

if (document.querySelector('.footer__item')) {
    document.querySelectorAll('.footer__item .largebold__text').forEach((el) => {
        el.addEventListener('click', (e) => {
            if (!e.currentTarget.parentElement.classList.contains('footer__feedback')) {
                e.currentTarget.parentElement.classList.toggle('active')
            }
        })
    })
}