document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((link) =>
		link.addEventListener('click', () => {
			navList.classList.remove('show');
		})
	);

	window.addEventListener('scroll', addShadow);

	const allButtons = document.querySelectorAll('.order');
	const prompt = document.querySelector('.prompt');
	const basket = document.querySelector('#basket');

	allButtons.forEach((link) =>
		link.addEventListener('click', () => {
			prompt.classList.remove('up-selling-prompt-invisible');
			prompt.classList.add('up-selling-prompt-visible');
		})
	);

	basket.addEventListener('click', function () {
		prompt.classList.remove('up-selling-prompt-visible');
		prompt.classList.add('up-selling-prompt-invisible');
	});
});
