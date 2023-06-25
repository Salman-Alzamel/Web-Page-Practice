//let element = document.querySelector('.main-content')
let wrapper = document.querySelector('.wrapper')
let mainContent = document.querySelector('.main-content')
let navContainer = document.querySelector('.nav-container')
let navLi = document.querySelector('.nav-li')
let navUlBottom = document.querySelector('.nav-ul-bottom')
let darkModeBtn = navUlBottom.querySelector('button')
darkModeBtn.onclick = function() {
    if (wrapper.className == 'wrapper-dark'){
        wrapper.setAttribute('class', 'wrapper')
        mainContent.setAttribute('class', 'main-content')
        navContainer.setAttribute('class', 'nav-container')
        navLi.setAttribute('class', 'nav-li')
        darkModeBtn.setAttribute('class', 'dark-mode-btn')
        darkModeBtn.innerText = 'Dark Mode'
    }else{
        wrapper.setAttribute('class', 'wrapper-dark')
        mainContent.setAttribute('class', 'main-content-dark')
        navContainer.setAttribute('class', 'nav-container-dark')
        navLi.setAttribute('class', 'nav-li-dark')
        darkModeBtn.setAttribute('class', 'dark-mode-btn-dark')
        darkModeBtn.innerText = 'Light Mode'
    }
}

let iconClose = document.querySelector('#close')
iconClose.onclick = function() {
    if (iconClose.innerHTML == 'close'){
        iconClose.innerHTML = 'menu'
    }else{
        iconClose.innerHTML = 'close'
    }
}
// console.log(wrapper.className)