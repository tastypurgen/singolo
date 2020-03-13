const header = document.getElementById('header')
const headerInner = document.getElementById('header-inner')
const nav = document.getElementById('nav')
const slider = document.getElementById('slider')

window.addEventListener('scroll', () => {
	if (window.scrollY >= slider.scrollHeight) {
		header.classList.add('header-fixed')
		slider.classList.add('slider-fixed')
		headerInner.classList.add('header__inner-fixed')
	} else {
		header.classList.remove('header-fixed')
		slider.classList.remove('slider-fixed')
		headerInner.classList.remove('header__inner-fixed')
	}
})

nav.addEventListener('click', e => {
	nav.querySelectorAll('a').forEach(a => a.classList.remove('active'))
	e.target.classList.add('active')
	// TODO change active after scroll
})
