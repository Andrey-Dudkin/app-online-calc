// * navbar fixed
const navbar = document.querySelector('.navbar')
if (window.scrollY > 50) {
  navbar.classList.add('navbar--fixed')
} else {
  navbar.classList.remove('navbar--fixed')
}
function navbarFixed() {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar--fixed')
  } else {
    navbar.classList.remove('navbar--fixed')
  }
}
window.addEventListener('scroll', navbarFixed)

// * navbar fixed to mobile
function navbarFixedMobile() {
  if (window.screen.width <= 500) {
    const navbar = document.querySelector('.navbar')
    let scroll = window.scrollY
    if (scroll > 5) {
      navbar.classList.add('navbar--fixed')
    }
  }
}
window.addEventListener('scroll', navbarFixedMobile)

// * app calc
const calcDispay = document.querySelector('.app-calc__display')
const calcBtns = document.querySelectorAll('.app-calc-btns__btn')
calcBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    switch (btn.value) {
      case 'C':
        calcDispay.textContent = '0'
        break;
        case "=":
          calcDispay.textContent = eval(calcDispay.textContent)
          break;
          case "X":
            let currenNumber = calcDispay.textContent
            let newNumber = currenNumber.slice(0,-1)
            calcDispay.textContent = newNumber
            break;
      default:
        if (calcDispay.textContent === '0' && btn.value !== "," && btn.value !== ".") {
          calcDispay.textContent = btn.value
        } else {
          calcDispay.textContent += btn.value
        }
    }
  })
})
