// Função para obter filmes do local storage
function getMovies() {
    return JSON.parse(localStorage.getItem('movies')) || [];
}

// Função para salvar filmes no local storage
function saveMovies(movies) {
    localStorage.setItem('movies', JSON.stringify(movies));
}

// Função para adicionar um filme
function addMovie(movie) {
    const movies = getMovies();
    movies.push(movie);
    saveMovies(movies);
}

// Função para exibir filmes na página view.html
function displayMovies() {
    const movieList = document.getElementById('movieList');
    const movies = getMovies();

    if (movieList) {
        movieList.innerHTML = '';
        movies.forEach((movie, index) => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.innerHTML = `
                <h2>${movie.titulo}</h2>
                <img src="${movie.fotoCapa}" alt="${movie.titulo}">
                <p><strong>Sinopse:</strong> ${movie.sinopse}</p>
                <p><strong>Data de Lançamento:</strong> ${movie.dataLancamento}</p>
                <p><strong>Data de Relançamento:</strong> ${movie.dataRelancamento}</p>
                <p><strong>Duração:</strong> ${movie.duracao} minutos</p>
                <p><strong>Valor:</strong> R$ ${movie.valor}</p>
                <p><strong>Classificação Indicativa:</strong> ${movie.classificacaoIndicativa}</p>
                <button onclick="deleteMovie(${index})">Excluir</button>
            `;
            movieList.appendChild(movieItem);
        });
    }
}

// Função para deletar um filme
function deleteMovie(index) {
    const movies = getMovies();
    movies.splice(index, 1);
    saveMovies(movies);
    displayMovies();
}

// Adicionar evento de submit no formulário
document.getElementById('movieForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const movie = {
        titulo: document.getElementById('titulo').value,
        sinopse: document.getElementById('sinopse').value,
        fotoCapa: document.getElementById('fotoCapa').value,
        dataLancamento: document.getElementById('dataLancamento').value,
        dataRelancamento: document.getElementById('dataRelancamento').value,
        duracao: document.getElementById('duracao').value,
        valor: document.getElementById('valor').value,
        classificacaoIndicativa: document.getElementById('classificacaoIndicativa').value,
    };

    addMovie(movie);

    // Limpar formulário
    this.reset();
});

// Exibir filmes ao carregar a página view.html
if (window.location.pathname.includes('view.html')) {
    displayMovies();
}
