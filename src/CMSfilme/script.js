document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contentForm');
    const contentList = document.getElementById('contentList');

    form.addEventListener('submit', saveContent);

    function saveContent(event) {
        event.preventDefault();

        const contentId = document.getElementById('contentId').value;
        const titulo = document.getElementById('titulo').value;
        const sinopse = document.getElementById('sinopse').value;
        const fotoCapa = document.getElementById('fotoCapa').value;
        const dataLancamento = document.getElementById('dataLancamento').value;
        const dataRelancamento = document.getElementById('dataRelancamento').value;
        const duracao = document.getElementById('duracao').value;
        const valor = document.getElementById('valor').value;
        const classificacaoIndicativa = document.getElementById('classificacaoIndicativa').value;

        let contents = JSON.parse(localStorage.getItem('contents')) || [];

        if (contentId) {
            const index = contents.findIndex(content => content.id == contentId);
            contents[index] = { id: contentId, titulo, sinopse, fotoCapa, dataLancamento, dataRelancamento, duracao, valor, classificacaoIndicativa };
        } else {
            const id = new Date().getTime();
            contents.push({ id, titulo, sinopse, fotoCapa, dataLancamento, dataRelancamento, duracao, valor, classificacaoIndicativa });
        }

        localStorage.setItem('contents', JSON.stringify(contents));
        form.reset();
        document.getElementById('contentId').value = '';
        displayContents();
    }

    function displayContents() {
        const contents = JSON.parse(localStorage.getItem('contents')) || [];
        contentList.innerHTML = '';

        contents.forEach(content => {
            const contentItem = document.createElement('div');
            contentItem.classList.add('content-item');

            const contentDetails = document.createElement('div');
            contentDetails.innerHTML = `
                <h3>${content.titulo}</h3>
                <p>${content.sinopse}</p>
                <p><strong>Data de Lançamento:</strong> ${content.dataLancamento}</p>
                <p><strong>Data de Relançamento:</strong> ${content.dataRelancamento}</p>
                <p><strong>Duração:</strong> ${content.duracao} minutos</p>
                <p><strong>Valor:</strong> R$ ${content.valor}</p>
                <p><strong>Classificação Indicativa:</strong> ${content.classificacaoIndicativa}</p>
                <img src="${content.fotoCapa}" alt="${content.titulo}" width="100">
            `;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', function() {
                deleteContent(content.id);
            });

            contentItem.appendChild(contentDetails);
            contentItem.appendChild(deleteButton);
            contentList.appendChild(contentItem);
        });
    }

    function deleteContent(id) {
        let contents = JSON.parse(localStorage.getItem('contents')) || [];
        contents = contents.filter(content => content.id !== id);
        localStorage.setItem('contents', JSON.stringify(contents));
        displayContents();
    }

    displayContents();
});
