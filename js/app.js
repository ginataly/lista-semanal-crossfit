function alterarStatus(id) {
    let botaoClicado = document.getElementById(`exercicio-${id}`);
    let imagem = botaoClicado.querySelector('.dashboard__item__img');
    let botao = botaoClicado.querySelector('.dashboard__item__button');
    let exercicio = botaoClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Feito';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Refazer';
        botao.classList.add('dashboard__item__button--return');
    }

}