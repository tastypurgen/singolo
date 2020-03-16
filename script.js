// HEADER
const header = document.getElementById('header')
const headerInner = document.getElementById('header-inner')
const nav = document.getElementById('nav')

window.addEventListener('scroll', (e) => {
	console.log('slider.scrollHeight :', slider.scrollHeight);
	console.log('this.scrollY :', this.scrollY);
	if (window.scrollY >= slider.scrollHeight + 7) {
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
	if (e.target != nav) {
		nav.querySelectorAll('a').forEach(a => a.classList.remove('active'))
		e.target.classList.add('active')
	}
})


// SLIDER
const slider = document.getElementById('slider')
const verPhone = document.querySelector('.phone-ver')
const verPhoneOff = document.querySelector('.phone-ver-off')
const horPhone = document.querySelector('.phone-hor')
const horPhoneOff = document.querySelector('.phone-hor-off')
const arrows = document.querySelectorAll('.arrow')

verPhone.addEventListener('click', () => {
	verPhone.classList.add('hidden')
	verPhoneOff.classList.remove('hidden')
})
verPhoneOff.addEventListener('click', () => {
	verPhone.classList.remove('hidden')
	verPhoneOff.classList.add('hidden')
})
horPhone.addEventListener('click', () => {
	horPhone.classList.add('hidden')
	horPhoneOff.classList.remove('hidden')
})
horPhoneOff.addEventListener('click', () => {
	horPhone.classList.remove('hidden')
	horPhoneOff.classList.add('hidden')
})

arrows.forEach(arrow => {
	arrow.addEventListener('click', () => {
		document.querySelector('#slider-blue').classList.toggle('hidden')
	})
})


// PORTFOLIO
const tags = document.querySelector('.portfolio__tags')
const portfolio = document.getElementById('works')
const works = document.querySelectorAll('.work')

// create a new container
let newPortfolio = () => {
	let imgArr = []
	works.forEach(work => {
		imgArr.push(work.attributes.src.value)
	});
	shuffle(imgArr)
	return imgArr.reduce((acc, item) => {
		return acc += `
			<div class="portfolio__work">
			<img src="${item}" alt="" class="work">
			</div>
		`
	}, '')
}

// tags handler
tags.addEventListener('click', e => {
	if (e.target != tags) {
		tags.querySelectorAll('.portfolio__tag').forEach(tag => {
			tag.classList.remove('tag-active')
		})
		e.target.classList.add('tag-active')
		portfolio.innerHTML = newPortfolio()
	}
})


portfolio.addEventListener('click', e => {
	portfolio.querySelectorAll('img').forEach(work => {
		work.classList.remove('work-active')
	})
	if (e.target != portfolio) e.target.classList.add('work-active')
})

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

// CONTACT
const btn = document.getElementById('btn')
const closeBtn = document.getElementById('close-btn')
const alertTopic = document.getElementById('alert-topic')
const alertText = document.getElementById('alert-text')

document.querySelector('.contact__inputs').addEventListener('submit', e => {
	const subject = document.getElementById('subject').value
	const description = document.getElementById('description').value
	if (subject) alertTopic.innerText = 'Тема: ' + subject
	if (description) alertText.innerText = 'Описание: ' + description
	document.getElementById('alert').classList.remove('alert-hidden')
	e.preventDefault()
})

closeBtn.addEventListener('click', e => {
	document.getElementById('alert').classList.add('alert-hidden')
	e.preventDefault()
})


// active-swithcer
window.addEventListener('scroll', () => {
	const navLinks = nav.querySelectorAll('a')
	const services = document.getElementById('services').offsetTop - 300
	const portfolio = document.getElementById('portfolio').offsetTop - 300
	const about = document.getElementById('about').offsetTop - 300
	const contact = document.getElementById('contact').offsetTop - 300

	navLinks.forEach(a => a.classList.remove('active'))
	if (this.scrollY < services) {
		navLinks[0].classList.add('active')
	}
	if (this.scrollY < portfolio && this.scrollY > services) {
		navLinks[1].classList.add('active')
	}
	if (this.scrollY < about && this.scrollY > portfolio) {
		navLinks[2].classList.add('active')
	}
	if (this.scrollY < contact && this.scrollY > about) {
		navLinks[3].classList.add('active')
	}
	if (this.scrollY > contact) {
		navLinks[4].classList.add('active')
	}
})