const c = 3;
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const b1 = document.querySelector('.banner1')
const b2 = document.querySelector('.banner2')

c1.onclick = function() {
    b1.style.display = 'block'
    b2.style.display = 'none'
}
c2.onclick = function() {
    b2.style.display = 'block'
    b1.style.display = 'none'
}