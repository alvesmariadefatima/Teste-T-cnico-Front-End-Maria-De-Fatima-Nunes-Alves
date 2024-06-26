import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';
import Footer from '../Footer/Footer';

function Home() {
    // Exemplo de array de produtos
    const produtos = [
        {
            id: 1,
            imagem: '/jogo-playstation4-sony.png',
            nomeProduto: 'Sony PlayStation 4',
            descricao: 'O Sony PlayStation 4 Days of Play Limited Edition é um console azul especial, menor, mais leve e eficiente, com suporte HDR e um controlador exclusivo com detalhes dourados.',
            preco: 803.00
        },
        {
            id: 2,
            imagem: '/jogo-playstation5.png',
            nomeProduto: 'PlayStation 5',
            descricao: 'O PlayStation 5, ou PS5, lançado pela Sony em novembro de 2020, é a mais recente geração de consoles de videogame, com CPU AMD Zen 2, GPU AMD RDNA 2 para gráficos até 4K (8K ready), SSD ultrarrápido e o inovador controle DualSense para uma experiência de jogo imersiva.',
            preco: 799.00
        },
        {
            id: 3,
            imagem: '/jogo-nintendo-switch.png',
            nomeProduto: 'Nintendo Switch',
            descricao: 'O Nintendo Switch, lançado pela Nintendo em março de 2017, é um console de videogame híbrido que combina a capacidade de ser usado tanto como um console doméstico conectado à TV quanto como um dispositivo portátil, destacando-se pelos controles Joy-Con destacáveis e uma vasta biblioteca de jogos exclusivos da Nintendo, como Mario Kart 8 Deluxe, The Legend of Zelda: Breath of the Wild e Super Mario Odyssey.',
            preco: 650.00
        },

        {
            id: 4,
            imagem: '/xbox-series-s.png',
            nomeProduto: 'Xbox Series S',
            descricao: 'O Xbox Series S é uma versão compacta e acessível da mais recente geração de consoles da Microsoft, projetado para oferecer desempenho de próxima geração em resolução até 1440p, com suporte a jogos digitais e físicos, integrando-se ao ecossistema Xbox com eficiência e acessibilidade.',
            preco: 590.00
        },

        {
            id: 5,
            imagem: '/console-super-mario-bros.png',
            nomeProduto: 'Console Super Mario Bros',
            descricao: 'Este jogo revolucionário é conhecido por sua jogabilidade inovadora, personagens carismáticos como Mario e Luigi, e níveis desafiadores que cativaram gerações de jogadores ao redor do mundo, estabelecendo-se como um marco na história dos videogames.',
            preco: 690.00
        },

        {
            id: 5,
            imagem: '/jogo-ps4-cavaleiros-do-zodiaco.png',
            nomeProduto: 'Jogo PS4 - Cavaleiros do Zodíaco',
            descricao: 'O Xbox Series S é uma versão compacta e acessível da mais recente geração de consoles da Microsoft, projetado para oferecer desempenho de próxima geração em resolução até 1440p, com suporte a jogos digitais e físicos, integrando-se ao ecossistema Xbox com eficiência e acessibilidade.',
            preco: 590.00
        },

        {
            id: 6,
            imagem: '/ps2-dragon-ball-z.png',
            nomeProduto: 'PlayStation 2 - Dragon Ball Z',
            descricao: 'O jogo "Dragon Ball Z" para PlayStation 2 oferece uma emocionante experiência de aventura baseada no popular anime, permitindo aos jogadores mergulhar no mundo de Dragon Ball Z, enfrentar desafios épicos e participar de batalhas emocionantes com seus personagens favoritos da série.',
            preco: 800.00
        },

        {
            id: 7,
            imagem: '/xbox-360-elite.png',
            nomeProduto: 'Xbox 360 Elite',
            descricao: 'O Xbox 360 Elite é uma versão aprimorada do console Xbox 360, lançada pela Microsoft em 2007, conhecida por sua cor preta fosca e maior capacidade de armazenamento. Oferecia uma experiência de jogo melhorada e suporte a conteúdo multimídia, tornando-se popular entre os jogadores pela sua performance e estilo distintos.',
            preco: 750.00
        },

        {
            id: 8,
            imagem: '/player-portatil-console-jogos.png',
            nomeProduto: 'Player Portátil para Console de Games',
            descricao: 'Um player portátil para console de games é um dispositivo compacto projetado para oferecer uma experiência de jogo semelhante à de um console de mesa, permitindo aos usuários jogar seus jogos favoritos em qualquer lugar, geralmente com tela integrada, controles ergonômicos e capacidade de conectar-se a TVs ou monitores para uma experiência de jogo flexível e conveniente.',
            preco: 560.00
        },
    ];

    return (
        <div>
            <Navbar />
            <div className={styles.produtosContainer}>
                {produtos.map((produto) => (
                    <div key={produto.id} className={styles.produto}>
                        <img src={produto.imagem} alt={`Imagem de ${produto.descricao}`} />
                        <p>{produto.nomeProduto}</p>
                        <p>{produto.descricao}</p>
                        <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                        
                        <div className={styles.containerBotaoCarrinho}>
                            <button className={styles.botaoCarrinho}>
                            <img className={styles.carrinhoCompra} src="/Carrinho.png" alt="Ícone Carrinho" />
                            <span>Adicionar ao Carrinho</span>
                        </button>
                        </div>
                        </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
