/* let itensJSON = [{
        name: 'Mortal Kombat',
        price: '299,99',
        description: 'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.',
        img_desktop: 'img/principalBanner.jpg',
        img_mobile: 'img/principal_banner_desktop.jpg'
    },
    {
        name: 'Outriders',
        price: 'R$ 200,00',

    },
    {
        name: 'Cyberpunk 2077',
        price: 'R$ 200,00',

    },
    {
        name: 'Donkey Kong',
        price: 'R$ 200,00',

    }

]
 */


/* const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

itensJSON.map((item, index) => {
    // console.log(item, index);
    let produtoItem = document.querySelector('.produto-box').cloneNode(true)
        //preencher itens com as informações do array
    produtoItem.setAttribute('data-key', index);
    produtoItem.querySelector('.produto-info .produto-nome').innerHTML = item.name
    console.log(produtoItem.querySelector('.produto-info .produto-preco').innerHTML = item.price)
})

console.log(itensJSON) */






function abrirModal() {
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex'
}

function fecharModal() {
    document.querySelector('.modal').style.display = 'none'
}

function fecharMenu() {
    document.querySelector('.menu-categories').style.display = 'none';
    document.querySelector('.sombra').style.display = 'none'
}

function abrirMenu() {
    document.querySelector('.menu-categories').style.display = 'flex';
    document.querySelector('.sombra').style.display = 'block'
}


const botao = document.querySelector('.btn');
const span = document.querySelector('.btn span');
let btnImg = document.getElementById('mario')


botao.addEventListener('click', () => {
    span.innerText = 'COMPRADO !';
    btnImg.style.display = 'block';
    botao.style.backgroundColor = 'var(--cor-azulescuro)';

})




/**
 * * Código abaixo é referente ao banner principal
 */

const banner = document.querySelector('.banner img')
banner.src = itensJSON[0].img_desktop

const texto1 = document.querySelector('.banner-textos h2')
const texto2 = document.querySelector('.banner-textos h1')
const texto3 = document.querySelector('.banner-textos p')

texto1.innerHTML = itensJSON[0].name
texto2.innerHTML = itensJSON[0].price
texto3.innerHTML = itensJSON[0].description

/**
 * 
 */

const firstProduct = document.querySelector('.produto-img1 img');
const secondProduct = document.querySelector('.produto-img2 img');
const thirdProduct = document.querySelector('.produto-img3 img');

firstProduct.src = itensJSON[1].img

secondProduct.src = itensJSON[2].img

thirdProduct.src = itensJSON[3].img

const nome1 = document.querySelector('.produto-nome1')
const preco1 = document.querySelector('.produto-preco1')
nome1.innerHTML = itensJSON[1].name
preco1.innerHTML = itensJSON[1].price

const nome2 = document.querySelector('.produto-nome2')
const preco2 = document.querySelector('.produto-preco2')
nome2.innerHTML = itensJSON[2].name
preco2.innerHTML = itensJSON[2].price

const nome3 = document.querySelector('.produto-nome3')
const preco3 = document.querySelector('.produto-preco3')
nome3.innerHTML = itensJSON[3].name
preco3.innerHTML = itensJSON[3].price