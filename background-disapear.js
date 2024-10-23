window.addEventListener('scroll', function() {
	const logoContainer = document.querySelector('.container__logo');
	const scrollThreshold = window.innerWidth <= 768 ? 50 : 200; // 50px para móviles, 200px para PC

	if (window.scrollY > scrollThreshold) {
		logoContainer.classList.add('scrolled-logo'); // Agrega la clase con el fondo
	} else {
		logoContainer.classList.remove('scrolled-logo'); // Remueve la clase y fondo
	}
});