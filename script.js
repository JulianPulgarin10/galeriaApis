// URLs de imágenes personalizadas que deseas usar
const imagenesPersonalizadas = [
    'https://tierraadentro.fondodeculturaeconomica.com/wp-content/uploads/2019/03/7436124055007480979-e1553716789458.jpg',
    'https://resizing.flixster.com/7v1Lk3u_HTmeAuyns3AFXrEw1Bg=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16236207_v_h9_aj.jpg',
    'https://i.ytimg.com/vi/Hne-eJOeZzA/maxresdefault.jpg',
    'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2022/11/03/63645d8bb0663.jpeg',
    'https://laestatuilla.com/wp-content/uploads/2023/05/peliculas-rapidos-y-furiosos-poster.jpg',
    'https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH',
    'https://hips.hearstapps.com/hmg-prod/images/annabelle-3-vuelve-a-casa-1562911569.jpg',
    'https://areajugones.sport.es/wp-content/uploads/2024/04/mufasa-el-rey-leon-trailer.jpg',
    'https://i.blogs.es/e4ab12/aladdin-guy-ritchie/1366_2000.jpg',
    'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2024/06/IO2_Specialty_Headquarters_1s_v7.0_Mech5_FS-scaled.jpg?fit=1200%2C768&quality=55&strip=all&ssl=1'   
];

// Textos personalizados para cada imagen
const textosPersonalizados = [
    "Nombre: The Matrix Lanzamiento: 1999 <br> Género: Ciencia Ficción, Acción <br> Director: Lana Wachowski, Lilly Wachowski <br> Protagonistas: Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    'Nombre: Pikachu <br> Primera Aparición: Pokémon Red and Green (1996) para Game Boy en Japón. <br> Género: Criatura de Ficción, Pokémon Eléctrico <br> Especie: Pokémon Rata <br> Tipo: Eléctrico',
    'Nombre Completo: Conde Drácula Primera <br> Aparición: "Drácula", una novela escrita por Bram Stoker, publicada en 1897. <br> Género: Horror, Literatura Gótica <br> Creación: Bram Stoker <br> Especie: Vampiro',
    'Título: Avengers: Endgame <br> Lanzamiento: 2019 <br> Género: Acción, Ciencia Ficción, Aventura, Superhéroes <br> Director: Anthony y Joe Russo Guion: Christopher Markus y Stephen McFeely',
    'Primera Película: The Fast and the Furious (2001) <br> Género: Acción, Aventura, Crimen <br> Director de la primera película: Rob Cohen Director de la última película (Fast X): Louis Leterrier',
    'Título: Avatar <br> Lanzamiento: 2009 <br> Género: Ciencia Ficción, Aventura, Acción <br> Director: James Cameron Guion: James Cameron <br> Protagonistas: Sam Worthington, Zoë Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez, Giovanni Ribisi',
    'Título: Annabelle <br> Lanzamiento: 2014 <br> Género: Terror, Suspense <br> Director: John R. Leonetti Guion: Gary Dauberman <br> Protagonistas: Annabelle Wallis, Ward Horton, Alfre Woodard, Tony Amendola',
    'Película: El Rey León (The Lion King) <br> Primera Aparición: 1994 (película animada original) <br> Director: Roger Allers y Rob Minkoff',
    'Título: Aladino <br> Lanzamiento: 1992 (película animada original) <br> Género: Animación, Fantasía, Aventura, Musical Director: Ron Clements y John Musker',
    'Título: Intensamente 2 <br> Lanzamiento: 2024 (programado; la fecha puede variar) <br> Género: Animación, Aventura, Comedia, Drama <br> Directores: Kelsey Mann (se espera que sea el director de esta secuela, siguiendo el trabajo de Pete Docter y Ronnie del Carmen en la primera película)'
];

// Función para obtener y mostrar las fotos desde la API de jsonplaceholder
async function fetchPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        const fotos = await response.json();
        const gallery = document.getElementById('photoGallery');
        gallery.innerHTML = ''; // Limpiar la galería antes de mostrar nuevas fotos

        // Recorrer cada foto y modificar el URL de la imagen y el texto
        fotos.forEach((foto, index) => {
            const card = document.createElement('div');
            card.classList.add('card');

            // Asigna una imagen personalizada y un texto personalizado
            const imagen = imagenesPersonalizadas[index % imagenesPersonalizadas.length];
            const texto = textosPersonalizados[index % textosPersonalizados.length];

            card.innerHTML = `
                <img src="${imagen}" alt="${texto}">
                <h3>${texto}</h3>
            `;
            gallery.appendChild(card);
        });
    } catch (error) {
        console.error('Error al obtener las fotos:', error);
    }
}

// Funcionalidad para el botón de desplazamiento hacia arriba
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});










// Obtener el modal, el contenido del modal, la imagen del modal y el texto del modal
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');

// Función para mostrar el modal con la imagen y la descripción
function showModal(imagen, descripcion) {
    modalImage.src = imagen;
    modalDescription.innerHTML = descripcion;
    modal.style.display = 'flex';
}

// Añadir eventos a las imágenes para abrir el modal
function addImageClickEvent() {
    const cards = document.querySelectorAll('.card img');
    cards.forEach((img, index) => {
        img.addEventListener('click', () => {
            const imagen = imagenesPersonalizadas[index % imagenesPersonalizadas.length];
            const descripcion = textosPersonalizados[index % textosPersonalizados.length];
            showModal(imagen, descripcion);
        });
    });
}

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal cuando se hace clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Llamar a la función para añadir el evento de clic a las imágenes después de agregar las fotos
async function fetchPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        const fotos = await response.json();
        const gallery = document.getElementById('photoGallery');
        gallery.innerHTML = ''; // Limpiar la galería antes de mostrar nuevas fotos

        // Recorrer cada foto y modificar el URL de la imagen y el texto
        fotos.forEach((foto, index) => {
            const card = document.createElement('div');
            card.classList.add('card');

            // Asigna una imagen personalizada y un texto personalizado
            const imagen = imagenesPersonalizadas[index % imagenesPersonalizadas.length];
            const texto = textosPersonalizados[index % textosPersonalizados.length];

            card.innerHTML = `
                <img src="${imagen}" alt="${texto}">
                <h3>${texto}</h3>
            `;
            gallery.appendChild(card);
        });

        // Añadir el evento de clic a las imágenes después de añadir las fotos
        addImageClickEvent();
    } catch (error) {
        console.error('Error al obtener las fotos:', error);
    }
}
