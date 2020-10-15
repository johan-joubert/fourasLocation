let jscolor1 = document.querySelector('.jscolor1')
let jscolor2 = document.querySelector('.jscolor2')
let jscolor3 = document.querySelector('.jscolor3')
let jscolor4 = document.querySelector('.jscolor4')
let jscolorTitle = document.querySelector('.jscolorTitle')
let codinggo = document.querySelector('.codinggo')
const nav = document.querySelector('nav');



window.addEventListener('scroll', () => {
  if(window.scrollY > 500) {
    nav.classList.add('scroll');
    jscolor1.classList.add('scroll');
    jscolor2.classList.add('scroll');
    jscolor3.classList.add('scroll');
    jscolor4.classList.add('scroll');
    jscolorTitle.classList.add('scroll');
    codinggo.classList.add('scroll');

  }
  else {
    nav.classList.remove('scroll');
    jscolor1.classList.remove('scroll');
    jscolor2.classList.remove('scroll');
    jscolor3.classList.remove('scroll');
    jscolor4.classList.remove('scroll');
    jscolorTitle.classList.remove('scroll');
    codinggo.classList.remove('scroll');

  }
})