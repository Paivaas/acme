document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cardsContainer')

    function displayCards() {
        const contents = JSON.parse(localStorage.getItem('contents')) || [];
        cardsContainer.innerHTML = ''

        contents.forEach(content => {
            const card = document.createElement('div')
            card.classList.add('card')
            console.log(localStorage)

            card.innerHTML = `
                <img class="image" src="${content.fotoCapa}" alt="${content.titulo}">
                <h3>${content.titulo}</h3>
                <div class="teste">
                    <p>${content.sinopse}</p>
                    <p><strong>Data de Lançamento:</strong> ${content.dataLancamento}</p>
                    <p><strong>Data de Relançamento:</strong> ${content.dataRelancamento}</p>
                    <p><strong>Duração:</strong> ${content.duracao} minutos</p>
                    <p><strong>Valor:</strong> R$ ${content.valor}</p>
                    <p><strong>Classificação Indicativa:</strong> ${content.classificacaoIndicativa}</p>
                </div>
            `

            cardsContainer.appendChild(card)
        });
    }

    displayCards();
})