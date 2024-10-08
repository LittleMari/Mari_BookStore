const contenedoresLibros = document.querySelectorAll('.catalogo');
const prevBtns = document.querySelectorAll('.carruselprev');
const nextBtns = document.querySelectorAll('.carruselnext');

const scrollPercentage = 100;

contenedoresLibros.forEach((contenedorLibros, index) => {
    const prevBtn = prevBtns[index];
    const nextBtn = nextBtns[index];

    nextBtn.addEventListener('click', () => {
        const scrollAmount = (contenedorLibros.clientWidth * scrollPercentage) / 100;

        if (contenedorLibros.scrollLeft + contenedorLibros.clientWidth >= contenedorLibros.scrollWidth) {
            contenedorLibros.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            contenedorLibros.scrollBy({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    prevBtn.addEventListener('click', () => {
        const scrollAmount = (contenedorLibros.clientWidth * scrollPercentage) / 100;

        if (contenedorLibros.scrollLeft <= 0) {
            contenedorLibros.scrollTo({
                top: 0,
                left: contenedorLibros.scrollWidth - contenedorLibros.clientWidth,
                behavior: 'smooth'
            });
        } else {
            contenedorLibros.scrollBy({
                top: 0,
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});
