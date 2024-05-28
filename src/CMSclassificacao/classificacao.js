function addItem() {
    var sigla = document.getElementById('sigla').value;
    var descricao = document.getElementById('descricao').value;
    var fotoCapa = document.getElementById('fotoCapa').value;

    if (sigla.trim() === '' || descricao.trim() === '' || fotoCapa.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var item = {
        sigla: sigla,
        descricao: descricao,
        fotoCapa: fotoCapa
    };

    var items = localStorage.getItem('items');
    items = items ? JSON.parse(items) : [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));

    displayItems();
}

// Função para exibir os itens
function displayItems() {
    var itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    var items = localStorage.getItem('items');
    items = items ? JSON.parse(items) : [];

    items.forEach(function(item, index) {
        var listItem = document.createElement('div');
        listItem.classList.add('list-item');

        var img = document.createElement('img');
        img.src = item.fotoCapa;

        var content = document.createElement('div');
        content.innerHTML = '<strong>' + item.sigla + '</strong><br>' + item.descricao;

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.onclick = function() {
            deleteItem(index);
        };

        listItem.appendChild(img);
        listItem.appendChild(content);
        listItem.appendChild(deleteBtn);

        itemList.appendChild(listItem);
    });
}

// Função para excluir um item
function deleteItem(index) {
    var items = localStorage.getItem('items');
    items = items ? JSON.parse(items) : [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

// Exibir itens na inicialização
displayItems();