//let element = document.querySelector('.main-content')
let wrapper = document.querySelector('.wrapper')
let navUlBottom = document.querySelector('.nav-ul-bottom')
let darkModeBtn = navUlBottom.querySelector('button')
darkModeBtn.onclick = function() {
    if (wrapper.className == 'wrapper-dark'){
        wrapper.setAttribute('class', 'wrapper')
        darkModeBtn.innerText = 'Dark Mode'
    }else{
        wrapper.setAttribute('class', 'wrapper-dark')
        darkModeBtn.innerText = 'Light Mode'
    }
}
console.log(wrapper.className)